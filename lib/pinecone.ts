import { Pinecone } from "@pinecone-database/pinecone";
import { downloadFromS3 } from "./s3-server";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";

const pinecone = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY ?? "",
});

const PINECONE_INDEX_NAME = process.env.PINECONE_INDEX_NAME ?? "";

if (!process.env.PINECONE_API_KEY) {
    throw new Error("Pinecone API key not found!");
}

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

export async function loadS3IntoPinecone(fileKey: string) {
    console.log("Loading S3 file into Pinecone...");

    const file_name = await downloadFromS3(fileKey);

    if (!file_name) {
        throw new Error("Failed to download file from S3!");
    }

    const pdfLoader = new PDFLoader(file_name);
    const pages = (await pdfLoader.load()) as PDFPage[];
    return pages;
}
