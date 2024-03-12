import { Button } from "@/components/ui/button";

type Props = {};

export default function UrlUpload(props: Props) {
    return (
        <div className=" p-2 rounded-xl relative mx-2 sm:mx-0 bg-gray-100 ">
            <span
                className="
                        absolute top-0 left-0 bg-red-500 text-white px-2 py-1 rounded-tl-xl rounded-br-xl
                        "
            >
                {" "}
                In development
            </span>
            <div className="flex justify-center items-center flex-col">
                <p className="text-gray-500 text-sm mt-8">
                    Enter a URL of a Web Page
                </p>
                <input
                    type="text"
                    className="w-full h-10 border-2 border-blue-200 focus:border-blue-600 rounded-xl p-2 dark:bg-gray-600 dark:text-white"
                    placeholder="https://example.com"
                />
                <Button
                    type="button"
                    className="bg-blue-500 text-white hover:bg-blue-600 mt-4 disabled:cursor-not-allowed"
                    disabled
                >
                    {" "}
                    Submit{" "}
                </Button>
            </div>
        </div>
    );
}
