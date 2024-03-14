import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export async function uploadFileToS3(file: File) {
    try {
        const s3 = new S3Client({
            region: `${process.env.NEXT_PUBLIC_AWS_REGION}`,
            credentials: {
                accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID!,
                secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!,
            },
        });

        const file_key =
            "uploads/" + Date.now().toString() + file.name.replace(" ", "-");

        const params = {
            Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME!,
            Body: file,
            Key: file_key,
        };

        const upload = new PutObjectCommand(params);

        await s3.send(upload);
        // console.log("successfully uploaded file: ", file_key);


        return Promise.resolve({
            file_key,
            file_name: file.name,
        });
    } catch (error) {
        return Promise.reject(error);
    }
}

export function getS3Url(file_key: string) {
    return `https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${file_key}`;
}
