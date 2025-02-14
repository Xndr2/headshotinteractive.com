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
        { src: "/abandoned_pfp/Unholy0bastard.jpg", name: "Unholy0bastard", title: "C++ Programmer", rank: "Trial Developer" },
    ];

    let testers = [
        // testers
        { src: "/abandoned_pfp/testers/Kronos II.webp", name: "Kronos II", title: "Tester" },
        { src: "/abandoned_pfp/testers/Mera.webp", name: "Mera", title: "Tester" },
        { src: "/abandoned_pfp/testers/Simon.webp", name: "Simon", title: "Tester" },
        { src: "/abandoned_pfp/testers/Jarne2203.webp", name: "Jarne2203", title: "Tester" },
        { src: "/abandoned_pfp/testers/MrDagger.webp", name: "Mr. Dagger", title: "Tester" },
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
                    <div id="Abandoned" className="bg-home-image-5 bg-cover bg-center">
                        <div className=" h-full w-full backdrop-blur-sm backdrop-brightness-75 flex flex-col items-center">
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
                                You play as a security officer aboard the spaceship Helios 2-79A, working for <span className=" font-bold">Lazelle Corporation</span>: a leading force in interstellar exploration and research.
                                <br /><br />
                                What begins as a routine mission to chart unexplored regions of space takes a chilling turn when you are abruptly awakened from hypersleep to find your crew missing and your ship mysteriously landed inside a space station.
                                <br /><br />
                                With no communication from your crew and the station looming in darkness, your first task is survival. Explore shadowy corridors, abandoned laboratories, and unsettling environments as you search for your crewmates and uncover cryptic clues about what transpired.
                            </p>
                            <br /><br />
                            <ul className="list-inside list-disc">
                                <li className="text-red-500 text-xl">Psychological Thriller</li>
                                <p>
                                Tension lingers in every corner. Unknown dangers may lurk in the station&apos;s depths, and the line between truth and illusion becomes increasingly blurred. Your choices matter, and your resolve will be tested as you delve deeper into the mystery.
                                <br /><br />
                                The game will keep you questioning everything with its unsettling atmosphere and gripping story. Nothing is as it seems, and survival hinges on your ability to adapt and uncover the station's secrets.
                                </p>
                                <br />
                                <li className="text-red-500 text-xl">Linear</li>
                                <p>
                                Abandoned offers a linear gameplay experience with tightly crafted sequences that immerse you in a compelling narrative. If you&apos;ve enjoyed games like Half-Life, Prey, Metro, or Dead Space, you&apos;ll find yourself drawn to its intense and eerie world.
                                </p>
                                <br />
                                <li className="text-red-500 text-xl">Visuals</li>
                                <p>
                                We chose Unreal Engine 5 as a development tool because it provides the flexibility and resources we need to bring our vision for Abandoned to life. While advanced features like Lumen and Nanite may come in handy, our decision was never about marketing buzzwords or making Unreal a selling point. It’s simply the tool that best supports our creative goals.
                                <br />
                                We do recommend reviewing the minimum system requirements to ensure optimal gameplay.
                                </p>
                            </ul>
                            <p>
                                <br />
                                <span className="text-red-500 text-xl">Side note!!</span>
                                <br />
                                As this is our debut project, we deeply appreciate your understanding and support as we bring this game to life. While we anticipate encountering bugs and inconsistencies, your patience and feedback are invaluable to us as we continue development.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}