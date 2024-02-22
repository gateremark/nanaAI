import AWS from "aws-sdk";

export async function uploadFile(file: File) {
    try {
        AWS.config.update({
            accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
        });
        const s3 = new AWS.S3({
            params: {
                Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME,
            },
            region: `${process.env.NEXT_PUBLIC_AWS_REGION}`,
        });

        const file_key =
            "uploads/" + Date.now().toString() + file.name.replace(" ", "-");

        const params = {
            Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME!,
            Key: file_key,
            Body: file,
        };

        const upload = s3
            .putObject(params)
            .on("httpUploadProgress", (evt) => {
                console.log(
                    "Uploading file...",
                    parseInt(((evt.loaded * 100) / evt.total).toString())
                ) + "%";
            })
            .promise();

        await upload.then((data) => {
            console.log("successfully uploaded file: ", file_key);
        });

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
