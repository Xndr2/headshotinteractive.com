import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { redirect } from "next/navigation";

export default function Steam() {
    
    redirect("https://store.steampowered.com/app/2897990/Abandoned/")

    return (
        <>
            <div className="mx-auto w-max text-center mt-40">
                <p>You will be redirected shortly...</p>
                <Link className="underline" href="https://store.steampowered.com/app/2897990/Abandoned/">If not click here.</Link>
            </div>
        </>
    );
}