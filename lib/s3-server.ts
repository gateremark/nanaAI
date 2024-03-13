import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { createWriteStream } from "fs";
import { Readable } from "stream";

export async function downloadFromS3(file_key: string) {
    try {
        const s3 = new S3Client({
            region: `${process.env.NEXT_PUBLIC_AWS_REGION}`,
            credentials: {
                accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID!,
                secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!,
            },
        });

        const params = {
            Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME,
            Key: file_key,
        };

        const command = new GetObjectCommand(params);
        const response = await s3.send(command);

        const file_name = `/tmp/pdf-${Date.now()}.pdf`;
        const writeStream = createWriteStream(file_name);

        if (response.Body) {
            const readable = response.Body as Readable;
            readable.pipe(writeStream);
        }

        return file_name;
    } catch (error) {
        return Promise.reject(error);
    }
}
