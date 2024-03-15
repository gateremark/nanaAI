import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { Readable } from "stream";
import fs from "fs";

export async function downloadFromS3(file_key: string) {
    return new Promise((resolve, reject) => {
        try {
            const s3 = new S3Client({
                region: `${process.env.NEXT_PUBLIC_AWS_REGION}`!,
                credentials: {
                    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID!,
                    secretAccessKey:
                        process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!,
                },
            });

            const params = {
                Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME!,
                Key: file_key,
            };

            const command = new GetObjectCommand(params);
            s3.send(command).then((response) => {
                const file_name = `/tmp/pdf-${Date.now()}.pdf`;

                // Create a write stream
                const writeStream = fs.createWriteStream(file_name);

                // Pipe the S3 Object stream to the file stream
                if (response.Body instanceof Readable) {
                    response.Body.pipe(writeStream).on("finish", () =>
                        resolve(file_name)
                    );
                }
            });
        } catch (error) {
            reject(error);
        }
    });
}
