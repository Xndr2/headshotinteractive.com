import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { redirect } from "next/navigation";

export default function Twitch() {
    
    redirect("https://www.twitch.tv/headshotinteractive")

    return (
        <>
            <div className="mx-auto w-max text-center mt-40">
                <p>You will be redirected shortly...</p>
                <Link className="underline" href="https://www.twitch.tv/headshotinteractive">If not click here.</Link>
            </div>
        </>
    );
}