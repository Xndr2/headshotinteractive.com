import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'New Name: Headshot Interactive',
    description: 'New Name: Headshot Interactive',
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

export default function Update() {
    return (
        <div className=":max-w-[52rem] mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl">
            <header className="py-16 text-center">
                <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight underline font-extrabold">New Name: Headshot Interactive</h1>
                <p className="text-lg text-slate-400 text-left">
                    As of now, our Development team will be known as &apos;Headshot Interactive&apos;. We have grown much in the past few months and we couldn&apos;t keep developing without having a group name.
                    We also have new logo&apos;s, these are the ones we use on the website.
                </p>
                {/* Back button */}
                <Link className="flex items-center text-sm text-red-500 font-medium" href="/updates">
                    <span className="relative">Back To Updates</span>
                    <svg className="relative mt-px overflow-visible ml-2.5 text-red-500" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M0 0L3 3L0 6"></path>
                    </svg>
                </Link>
            </header>
            <div className="flex flex-col items-center gap-10">
                <Image
                    src="/Logos/HI_Text.png"
                    alt="Logo"
                    width={1440}
                    height={14}
                    className=""
                />
                <Image
                    src="/Logos/HI_Logo.png"
                    alt="Logo"
                    width={500}
                    height={500}
                    className="h-auto w-8 md:w-16"
                />
            </div>

        </div >
    )
}