import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./rootLayout.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from "@clerk/clerk-react";

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
}



const RootLayout = () => {
    return (
        <ClerkProvider
            publishableKey={PUBLISHABLE_KEY}
            appearance={{
                baseTheme: dark,
            }}
        >
            <div className="rootlayout">
                <header>
                    <Link to="/" className="logo">
                        <img src="/logo.png" alt="" />
                        <span>GEN TWIN AI</span>
                    </Link>
                    <div className="user">
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
            </div>
        </ClerkProvider>
    );
};

export default RootLayout;
