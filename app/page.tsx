import Image from "next/image";
import { Metadata } from "next";
import MeetTheTeam from "./components/meettheteam";

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
    let team = [
        { src: "/abandoned_pfp/xndr.webp", name: "Xndr", description: "Project Lead | Senior Developer" },
        { src: "/abandoned_pfp/charlesfrost.webp", name: "CharlesFrxst", description: "Community Manager | Senior Moderator" },
        { src: "/abandoned_pfp/gadubadish.webp", name: "Gadubadish", description: "3D Modeler | Senior Developer" },
        { src: "/abandoned_pfp/grug.webp", name: "Grug", description: "Project Lead | Moderator" },
        { src: "/abandoned_pfp/theusi.webp", name: "TheUsi", description: "3D Modeler | Developer" },
        { src: "/abandoned_pfp/milton.webp", name: "Milton", description: "Story Writer | Trial Developer" },
        { src: "/abandoned_pfp/discountcheese.webp", name: "Discount_Cheese", description: "Story Writer | Trial Developer" },
    ];

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
                        className="h-auto md:w-6/12 mt-20 md:mt-40 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]"
                    />
                    <h2 className="text-2xl md:text-4xl mx-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">We aim for gameplay</h2>
                </div>

                {/* About */}
                <div className="sticky top-0 flex h-screen flex-col items-center bg-home-image-2 bg-cover bg-center">
                    <h2 className="text-4xl mt-20 md:mt-40 mx-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">Meet the team!</h2>
                    <p className="mx-10 md:text-lg text-center">
                        We are Headshot Interactive, a small indie development studio.
                        <br />
                        Starting from a single developer, we have become to a team of 7 people and growing.
                    </p>
                    {/* member list */}
                    <MeetTheTeam team={team} />
                </div>

                {/* Abandoned */}
                <div className="sticky top-0 flex h-screen flex-col items-center bg-black bg-cover bg-center">
                    <h2 className="text-4xl mt-20 md:mt-40 mx-2">Abandoned</h2>
                    <p className="mx-10 text-pretty">
                        COMING
                        <br />
                        SOON
                    </p>
                </div>
            </div>
        </>
    );
}