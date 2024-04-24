import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Headshot Interactive | Home',
    description: 'Headshot Interactive | Home Page.',
    // info
    applicationName: 'Headshot Interactive',
    referrer: 'origin-when-cross-origin',
    keywords: ['Headshot Interactive', 'Headshot', 'Interactive', 'HeadshotInteractive', 'Abandoned', 'Abandoned Part 1', 'Part 1', 'Xndr'],
    authors: [{ name: 'Headshot' }, { name: 'Interactive', url: 'https://headshotinteractive.com' }],
    creator: 'Xndr',
    publisher: 'Xndr',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    // verification
    verification: {
        google: 'google',
    },
    // icons
    icons: {
        icon: '/Logos/HI_Logo.png',
        shortcut: '/Logos/HI_Logo.png',
        apple: '/Logos/HI_Logo.png',
    },
    // twitter / and other things according to Next.js
    twitter: {
        card: 'summary_large_image',
        title: 'HeadshotInteractive.com',
        description: 'Welcome to Headshot. We are a small indie development studio. Check out Abandoned!',
        site: '@Xndr___',
        creator: '@Xndr___',
        creatorId: '1493973114211995656',
        images: ['https://headshotinteractive.com/Logos/HI_Logo.png'], // Must be an absolute URL
    },
}

export default function Home() {
    return (
        <>
            <div className="relative text-center">
                {/* Info */}
                <div className="sticky top-0 flex h-screen flex-col items-center bg-home-image-1 bg-cover bg-center">
                    <Image
                        src="/Logos/HI_Text.png"
                        alt="Logo"
                        width={1440}
                        height={14}
                        className="h-auto md:w-6/12 mt-40 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]"
                    />
                    <h2 className="text-2xl md:text-4xl mx-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">We aim for gameplay!</h2>
                </div>

                {/* About */}
                <div className="sticky top-0 flex h-screen flex-col items-center bg-home-image-2 bg-cover bg-center">
                    <h2 className="text-4xl mt-40 mx-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">Meet the team!</h2>
                    <p className="mx-10 md:text-lg text-center">
                        We are Headshot Interactive, a small indie development studio.
                        <br />
                        Starting from a single developer, we have become to a team of 8 people and growing.
                    </p>
                </div>

                {/* Abandoned */}
                <div className="sticky top-0 flex h-screen flex-col items-center bg-black bg-cover bg-center">
                    <h2 className="text-4xl mt-40 mx-2">Abandoned</h2>
                    <p className="mx-10 text-pretty">
                        CHANGE ME
                        <br />
                        CHANGE ME
                    </p>
                </div>
            </div>
        </>
    );
}