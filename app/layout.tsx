import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Goldman } from "next/font/google";

const goldman = Goldman({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    title: "Headshot Interactive",
    description: "Headshot Interactive is a small indie game studio. Development is currently on hold.",
    metadataBase: new URL("https://headshotinteractive.com"),
    icons: {
        icon: "/Logos/HI_LogoBlack.png",
        shortcut: "/Logos/HI_LogoBlack.png",
    },
    applicationName: "Headshot Interactive",
    referrer: "origin-when-cross-origin",
    keywords: ["Headshot Interactive", "Headshot", "Interactive", "Abandoned", "Indie Game Studio"],
    authors: [{ name: "Headshot Interactive", url: "https://headshotinteractive.com" }],
    creator: "Xndr",
    openGraph: {
        title: "Headshot Interactive",
        description: "Headshot Interactive is a small indie game studio. Development is currently on hold.",
        url: "https://headshotinteractive.com",
        siteName: "Headshot Interactive",
        images: [{ url: "/Logos/HI_LogoBlack.png" }],
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Headshot Interactive",
        description: "Headshot Interactive is a small indie game studio. Development is currently on hold.",
        creator: "@Xndr___",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={goldman.className}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
