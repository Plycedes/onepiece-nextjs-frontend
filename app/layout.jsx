"use client";

import "@styles/globals.css";
import { MoralisProvider } from "react-moralis";

export const metadata = {
    title: "One Piece",
    description: "Decentralized Lottery",
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <MoralisProvider initializeOnMount={false}>
                    <div className="main">
                        <main className="app">{children}</main>
                    </div>
                </MoralisProvider>
            </body>
        </html>
    );
};

export default RootLayout;
