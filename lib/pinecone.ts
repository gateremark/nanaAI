import { Pinecone } from "@pinecone-database/pinecone";
import { downloadFromS3 } from "./s3-server";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import md5 from "md5";
import {
    Document,
    RecursiveCharacterTextSplitter,
} from "@pinecone-database/doc-splitter";
import { getEmbeddings } from "./embed";
import { convertToAscii } from "./utils";

if (!process.env.PINECONE_API_KEY) {
    throw new Error("Pinecone API key not found!");
}

const pinecone = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY ?? "",
});

const PINECONE_INDEX_NAME = process.env.PINECONE_INDEX_NAME ?? "";

if (!PINECONE_INDEX_NAME) {
    throw new Error("Pinecone index name not found!");
}

const pineconeIndex = pinecone.Index(PINECONE_INDEX_NAME!);

// export { pinecone, pineconeIndex };
type PDFPage = {
    pageContent: string;
    metadata: {
        loc: { pageNumber: number };
    };
};

export async function loadS3IntoPinecone(file_key: string) {
    // 1. Get the pdf file from S3 - downloadFromS3
    console.log("Loading S3 file into Pinecone...");

    const file_name = await downloadFromS3(file_key);
    console.log("downloaded file from s3: ", file_name);

    if (!file_name) {
        throw new Error("Failed to download file from S3!");
    }

    const pdfLoader = new PDFLoader(file_name as string); 
    const pages = (await pdfLoader.load()) as PDFPage[];
    // console.log("downloaded file pages:", pages);
    return pages;

    // 2. Load the pdf file into Pinecone - split and segment

    const docs = await Promise.all(pages.map(prepareDocument));

    // 3. vectorize and embed individual documents
    const vector = await Promise.all(docs.flat().map(embedDocument));

    // 4. Load the vectors into Pinecone

    console.log("Loading vectors into Pinecone...");

    const namespace = convertToAscii(file_key);
}

async function embedDocument(doc: Document) {
    try {
        const embeddings = await getEmbeddings(doc.pageContent);
        const hash = md5(doc.pageContent);
        return {
            id: hash,
            values: embeddings,
            metadata: {
                text: doc.metadata.text,
                pageNumber: doc.metadata.pageNumber,
            },
        };
    } catch (error) {
        throw error;
    }
}

export const truncateStringByBytes = (str: string, bytes: number) => {
    const encoded = new TextEncoder().encode(str);
    return new TextDecoder("utf-8").decode(encoded.slice(0, bytes));
};

async function prepareDocument(page: PDFPage) {
    let { pageContent, metadata } = page;
    pageContent = pageContent.replace(/\n/g, " ");
    // split the docs
    const splitter = new RecursiveCharacterTextSplitter();
    const docs = await splitter.splitDocuments([
        new Document({
            pageContent,
            metadata: {
                pageNumber: metadata.loc.pageNumber,
                text: truncateStringByBytes(pageContent, 36000),
            },
        }),
    ]);
    return docs;
}
