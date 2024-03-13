import Logo from "@/app/assets/logo";
import { SignIn } from "@clerk/nextjs";
// import { dark, neobrutalism } from "@clerk/themes";
// import { useTheme } from "next-themes";

type Props = {};

const Signin = (props: Props) => {
    // const { resolvedTheme } = useTheme();
    return (
        <div className="flex max-w-7xl mx-auto flex-col items-center py-5 min-h-screen">
            {/* <Logo /> */}
            <h1 className="text-5xl font-semibold py-6">Sign In</h1>
            <div className="flex mx-auto justify-center items-center">
                <SignIn
                    appearance={{
                        elements: {
                            formButtonPrimary:
                                " hover:bg-blue-700 transition text-sm normal-case",
                        },
                    }}
                    // appearance={
                    //     {
                    //         baseTheme: dark,
                    //     }
                    // }
                    afterSignInUrl="/getstarted"
                />
            </div>
        </div>
    );
};

export default Signin;
