'use client'

import { Epilogue } from "next/font/google";
import "../globals.css";

const geistEpilogue = Epilogue({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistEpilogue.variable} antialiased`}
            >
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
};