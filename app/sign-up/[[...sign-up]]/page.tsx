import Logo from "@/app/assets/logo";
import { SignUp } from "@clerk/nextjs";

type Props = {};

const Signup = (props: Props) => {
    return (
        <div className="flex max-w-7xl mx-auto flex-col items-center py-2 min-h-screen">
            <Logo />
            <h1 className="text-5xl font-semibold py-4">Sign Up</h1>
            <div className="flex mx-auto justify-center items-center mt-10">
                <SignUp
                    appearance={{
                        elements: {
                            formButtonPrimary:
                                "bg-black hover:bg-gray-700 transition text-sm normal-case",
                        },
                    }}
                    afterSignUpUrl="/getstarted"
                />
            </div>
        </div>
    );
};

export default Signup;
