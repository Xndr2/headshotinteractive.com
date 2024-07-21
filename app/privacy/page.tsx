import Image from "next/image";
import Link from "next/link";

export default function Privacy() {

    return (
        <>
            <div className="max-w-[52rem] md:mt-20 mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl">
                <header className="py-16 sm:text-center">
                    <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold text-slate-200">Privacy Policy for Headshot Interactive
                        <p className="text-lg text-left">This Privacy Policy document contains types of information that is collected and recorded by Headshot Interactive and how we use it.</p>
                    </h1>
                </header>

                <div className="text-lg">
                    <h1 className="text-2xl sm:text-3xl tracking-tight font-extrabold">Consent:</h1>
                    <p>By using our website and playing our game, you hereby consent to our Privacy Policy and agree to its terms.</p>
                </div>

                <div className="text-lg mt-10">
                    <h1 className="text-2xl sm:text-3xl tracking-tight font-extrabold">Information we collect:</h1>
                    <p>We do not collect any data as of July 21 2024 (the date this page was created). If we decide to change this we will make sure every player knows about it.</p>
                </div>

                <div className="text-lg mt-10">
                    <h1 className="text-2xl sm:text-3xl tracking-tight font-extrabold">Why we don't collect any data:</h1>
                    <p>"I believe that we do not need all this information since we are still a small group of developers. We gain nothing by collecting and selling user data."</p>
                    <p className="sm:ml-72">-Xndr, Project Lead</p>
                </div>

                <div className="text-lg mt-10">
                    <h1 className="text-2xl sm:text-3xl tracking-tight font-extrabold">Cookies:</h1>
                    <p>This website doesn't use cookies since you, the user, do not log in or change anything on the website.</p>
                </div>
            </div>
        </>
    );
}