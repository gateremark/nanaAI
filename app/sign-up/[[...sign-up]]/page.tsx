import Logo from "@/app/assets/logo";
import { SignUp } from "@clerk/nextjs";
// import { dark } from "@clerk/themes";

type Props = {};

const Signup = (props: Props) => {
    return (
        <div className="flex max-w-7xl mx-auto flex-col items-center py-5 min-h-screen">
            {/* <Logo /> */}
            <h1 className="text-5xl font-semibold py-6">Sign Up</h1>
            <div className="flex mx-auto justify-center items-center">
                <SignUp
                    // appearance={{
                    //     elements: {
                    //         formButtonPrimary:
                    //             "bg-black hover:bg-gray-700 transition text-sm normal-case",
                    //     },
                    // }}
                    // appearance={{
                    //     baseTheme: dark,
                    // }}
                    afterSignUpUrl="/getstarted"
                />
            </div>
        </div>
    );
};

export default Signup;
