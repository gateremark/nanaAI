import { uploadFile } from "@/lib/s3";
import { useDropzone } from "react-dropzone";
import { FaFileArrowDown } from "react-icons/fa6";

type Props = {};

export default function FileUpload(props: Props) {
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            "application/pdf": [".pdf"],
        },
        maxFiles: 1,
        onDrop: async (acceptedFiles) => {
            console.log(acceptedFiles);
            const file = acceptedFiles[0];
            if (file.size > 10 * 1024 * 1024) {
                alert("File size is too large. Max size is 10MB.");
                return;
            }

            try {
                const data = await uploadFile(file);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        },
    });
    return (
        <div className=" p-2 bg-white rounded-xl">
            <div
                {...getRootProps({
                    className:
                        "cursor-pointer p-4 border-dashed border-2 border-gray-300 rounded-xl text-center hover:border-gray-500 transition duration-300 ease-in-out relative",
                })}
            >
                <FaFileArrowDown className=" dark:text-[#020817] text-[#020817] absolute left-1/2 text-3xl right-1/2 top-2" />
                <input
                    {...getInputProps}
                    className=" cursor-pointer bg-transparent"
                />
                <>
                    <p className="text-gray-500 text-sm mt-2">
                        Drag 'n' drop a PDF here, or click to select files
                    </p>
                </>
            </div>
        </div>
    );
}
