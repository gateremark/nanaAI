import Logo from "@/app/assets/logo";
import { SignIn } from "@clerk/nextjs";

type Props = {};

const Signin = (props: Props) => {
    return (
        <div className="flex max-w-7xl mx-auto flex-col items-center py-2 min-h-screen">
            <Logo />
            <h1 className="text-5xl font-semibold py-4">Sign In</h1>
            <div className="flex mx-auto justify-center items-center mt-10">
                <SignIn
                    appearance={{
                        elements: {
                            formButtonPrimary:
                                "bg-black hover:bg-gray-700 transition text-sm normal-case",
                        },
                    }}
                    afterSignInUrl="/getstarted"
                />
            </div>
        </div>
    );
};

export default Signin;
