import { loadS3IntoPinecone } from "@/lib/pinecone";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: Request, res: Response) {
    try {
        const body = await req.json();
        const { file_key, file_name } = body;
        console.log(
            "file_key_route: ",
            file_key,
            "file_name_route: ",
            file_name
        );
        const pages = await loadS3IntoPinecone(file_key);
        // console.log("file pages from route:", pages);
        return NextResponse.json(
            { pages }
            // { message: "Chat created successfully from route" },
            // { status: 201 }
        );
    } catch (error) {
        console.log("An error occured in route!");
        console.log(error);
        return NextResponse.json({ error: error }, { status: 500 });
    }
}
