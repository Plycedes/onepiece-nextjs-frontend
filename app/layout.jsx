import "@styles/globals.css";

export const metadata = {
    title: "One Piece",
    description: "Decentralized Lottery",
};

const RootLayout = ({ children }) => {
    return (
        <html Lang="en">
            <body>
                <div className="main">
                    <main className="app">{children}</main>
                </div>
            </body>
        </html>
    );
};

export default RootLayout;
