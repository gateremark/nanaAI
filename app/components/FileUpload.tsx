import { uploadFileToS3 } from "@/lib/s3";
import { useDropzone } from "react-dropzone";
import { FaFileArrowDown } from "react-icons/fa6";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { useState } from "react";
import { SlCloudUpload } from "react-icons/sl";

type Props = {};

type MutationTypes = {
    file_key: string;
    file_name: string;
};

export default function FileUpload(props: Props) {
    const [uploading, setUploading] = useState(false);
    const [acceptedFileName, setAcceptedFileName] = useState("");
    const { mutate, status } = useMutation({
        mutationFn: async ({ file_key, file_name }: MutationTypes) => {
            const response = await axios.post("/api/create-chat", {
                file_key,
                file_name,
            });
            // console.log("Response from route: ", response);
            return response.data;
        },
    });
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            "application/pdf": [".pdf"],
        },
        maxFiles: 1,
        onDrop: async (acceptedFiles) => {
            // console.log("acceptedFiles: ", acceptedFiles[0].name);
            setAcceptedFileName(acceptedFiles[0].name);
            // console.log("acceptedFilesState: ", acceptedFileName);
            const file = acceptedFiles[0];
            if (file.size > 10 * 1024 * 1024) {
                toast.error("File too large. Max size is 10MB.");
                // alert("File too large. Max size is 10MB.");
                return;
            }

            try {
                setUploading(true);
                const data = await uploadFileToS3(file);
                if (!data?.file_key || !data?.file_name) {
                    toast.error("Failed to upload file!");
                    // alert("Failed to upload file!");
                    return;
                }
                mutate(data, {
                    onSuccess: (data) => {
                        console.log("onSuccess:", data);
                        toast.success("Chat created successfully!");
                    },
                    onError: (error) => {
                        console.log("onError:", error);
                        toast.error("Failed to create chat!");
                    },
                });
                console.log("data of uploaded file to s3:", data);
            } catch (error) {
                console.log(error);
            } finally {
                setUploading(false);
            }
        },
    });
    return (
        <div className=" p-2 rounded-xl relative mx-2 sm:mx-0 bg-gray-100">
            <Toaster richColors />
            <div
                {...getRootProps({
                    className:
                        "cursor-pointer p-4 border-dashed border-2 border-gray-300 rounded-xl text-center hover:border-gray-500 transition duration-300 ease-in-out",
                })}
            >
                <input {...getInputProps()} className=" w-full h-full" />
                {uploading || status === "pending" ? (
                    <>
                        <div className="flex justify-center items-center flex-col">
                            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
                            <p className="text-gray-500 text-sm mt-2">
                                Processing{" "}
                                <span className="font-semibold">
                                    {acceptedFileName}
                                </span>{" "}
                                ...
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                        {" "}
                        <SlCloudUpload className=" text-[#020817] absolute left-[47%] text-4xl top-4" />
                        <>
                            <p className="text-gray-500 text-sm mt-8">
                                Drag &apos;n&apos; drop a PDF here, or click to
                                select (Max size: 10MB)
                            </p>
                        </>
                    </>
                )}
            </div>
        </div>
    );
}
