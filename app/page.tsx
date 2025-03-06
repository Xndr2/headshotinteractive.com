import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { StyledKofiButton } from "./components/KofiButton";

export default function Home() {

    return (
        <>
            <main className="">
                <div id="Home" className="absolute top-0 w-full text-center">
                    {/* Main */}
                    <div className="flex flex-col items-center h-screen bg-home-image-4 bg-cover bg-center">
                        <div className="mt-64">
                            <Image
                                src="/Logos/HI_Text.png"
                                alt="Logo"
                                width={1440}
                                height={14}
                                className="h-auto max-h-32 w-auto drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]"
                            />
                            <h1 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-thin drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
                                We <span className="text-red-500">aim</span> for gameplay.
                            </h1>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}