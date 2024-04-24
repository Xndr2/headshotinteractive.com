import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Headshot Interactive | Home',
    description: 'Headshot Interactive | 404 page not found.',
    icons: 'Logos/HI_Logo.png',
}

export default function Home() {
    return (
        <>
            <div className="relative">
                {/* Info */}
                <div className="sticky top-0 flex h-screen flex-col items-center bg-home-image-1 bg-cover bg-center">
                    <Image
                        src="/Logos/HI_Text.png"
                        alt="Logo"
                        width={1440}
                        height={14}
                        className="h-auto md:w-6/12 mt-40 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]"
                    />
                    <h2 className="text-4xl mx-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">We aim for gameplay!</h2>
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