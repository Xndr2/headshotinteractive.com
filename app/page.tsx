import Image from "next/image";
import Link from "next/link";
import MeetTheTeam from "./components/meettheteam";
import Testers from "./components/testers";
import Head from "next/head";
import { StyledKofiButton } from "./components/KofiButton";

export default function Home() {
    let team = [
        // team
        { src: "/abandoned_pfp/xndr.webp", name: "Xndr", title: "Project Lead", rank: "Senior Developer" },
        { src: "/abandoned_pfp/charlesfrost.webp", name: "CharlesFrxst", title: "Community Manager", rank: "Senior Moderator" },
        { src: "/abandoned_pfp/gadubadish.webp", name: "Gadubadish", title: "3D Modeler", rank: "Senior Developer" },
        { src: "/abandoned_pfp/grug.webp", name: "Grug", title: "Trial Graphics Developer ", rank: "Moderator" },
        { src: "/abandoned_pfp/theusi.webp", name: "TheUsi", title: "3D Modeler", rank: "Developer" },
        { src: "/abandoned_pfp/Lynx.jpg", name: "Lynx", title: "Sound Designer", rank: "Trial Developer" },
    ];

    let testers = [
        // testers
        { src: "/abandoned_pfp/testers/Kronos II.webp", name: "Kronos II", title: "Tester" },
        { src: "/abandoned_pfp/testers/Mera.webp", name: "Mera", title: "Tester" },
        { src: "/abandoned_pfp/testers/Simon.webp", name: "Simon", title: "Tester" },
        { src: "/abandoned_pfp/testers/Jarne2203.webp", name: "Jarne2203", title: "Tester" },
    ]

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

                    {/* About */}
                    <div id="About" className="flex flex-col items-center bg-home-image-2 bg-cover bg-center">
                        <h2 className="text-4xl mt-20 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">Meet the team!</h2>
                        <p className="mx-10 md:text-lg text-center">
                            We are Headshot Interactive, a small indie development studio.
                            <br />
                            Starting from a single developer, we have grown into a team of {team.length} amazing people.
                        </p>
                        <MeetTheTeam team={team} />
                        <p className="mx-10 md:text-lg text-center max-w-screen-md">
                            We also have a small group of {testers.length} active Steam testers.
                        </p>
                        <Testers testers={testers} />
                    </div>


                    {/* Abandoned */}
                    <div id="Abandoned" className="flex flex-col items-center bg-home-image-1 bg-cover bg-center">
                        <Image
                            src="/Logos/Abandoned_logo.png"
                            alt="Logo"
                            width={640}
                            height={101}
                            className="h-auto md:w-6/12 lg:w-4/12 my-20 my:mt-40 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]"
                        />

                        {/* Info */}
                        <div className="mx-10 mb-20 md:text-lg text-left max-w-screen-md drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
                            <p>
                                <a className="font-bold text-red-500 text-xl underline" target="_blank" href="https://store.steampowered.com/app/2897990/Abandoned_Prologue/">Abandoned</a> is a psychological thriller set in a universe created by Headshot Interactive.
                                <br />
                                You play as a security officer aboard a space station. Your mission: Search for alien life forms and make contact with them.
                                <br /><br />
                                It&apos;s 2052, and after waking up from hyper-sleep, you quickly realize something is seriously wrong. Your ship has landed inside an alien space station, and you have no idea how or why. Your first task? Find out what happened to the missing crew.
                                <br /><br />
                                You&apos;ll explore dark, abandoned labs and eerie hallways while trying to avoid huge, dangerous monsters. As you dig deeper, you&apos;ll uncover the dark secrets of the station and race against time to find your crew before it&apos;s too late.
                                <br /><br />
                            </p>
                            <br /><br />
                            <ul className="list-inside list-disc">
                                <li className="text-red-500 text-xl">Psychological Thriller</li>
                                <p>The game will keep you guessing with its unsettling atmosphere and mysterious story.
                                    You&apos;ll have to question everything as you uncover the truth behind the station&apos;s abandonment and the creatures that might still be lurking around.
                                </p>
                                <br />
                                <li className="text-red-500 text-xl">Linear</li>
                                <p>Abandoned has a linear gameplay style, meaning you move from one event to the next without going back.
                                    If you&apos;ve enjoyed games like Half-Life, Prey, Metro, or Dead Space, you&apos;ll feel right at home.</p>
                                <br />
                                <li className="text-red-500 text-xl">Visuals</li>
                                <p>Built with Unreal Engine 5, Abandoned showcases stunning visual fidelity and a highly optimized performance, offering a captivating and immersive experience.
                                    We recommend reviewing the minimum system requirements to ensure optimal gameplay.</p>
                            </ul>
                            <p>
                                <br />
                                <span className="text-red-500 text-xl">Side note!!</span>
                                <br />
                                As this is our debut project, we appreciate your understanding as we work diligently in our spare time to bring this game to life.
                                We anticipate encountering bugs and inconsistencies and value your patience and feedback.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}