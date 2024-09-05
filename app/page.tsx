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
        { src: "/abandoned_pfp/milton.webp", name: "Milton", title: "Story Writer", rank: "Trial Developer" },
    ];

    let testers = [
        // testers
        { src: "/abandoned_pfp/testers/Kronos II.webp", name: "Kronos II", title: "Tester" },
        { src: "/abandoned_pfp/testers/Mera.webp", name: "Mera", title: "Tester" },
        { src: "/abandoned_pfp/testers/Simon.webp", name: "Simon", title: "Tester" },
        { src: "/abandoned_pfp/testers/Flixy.webp", name: "Flixy", title: "Tester" },
        { src: "/abandoned_pfp/testers/Jarne2203.webp", name: "Jarne2203", title: "Tester" },
    ]

    return (
        <>
            <main className="">
                <div id="Home" className="absolute top-0 w-full text-center">
                    {/* Main */}
                    <div className="flex flex-col items-center h-screen bg-home-image-1 bg-cover bg-center">
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
                    <div id="Abandoned" className="flex h-full max-h-max flex-col items-center bg-black bg-cover bg-center">
                        <Image
                            src="/Logos/Abandoned_logo.png"
                            alt="Logo"
                            width={640}
                            height={101}
                            className="h-auto md:w-6/12 mt-20 md:mt-40 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]"
                        />

                        {/* Info */}
                        <div className="mx-10 mb-20 md:text-lg text-left max-w-screen-md">
                            <p>
                                <span className="font-bold">Abandoned: Prologue</span> is a psychological thriller set in a universe created by Headshot Interactive. You play as a security officer aboard a space station with the goal of making first contact with whatever is out there.
                                <br /><br />
                                <span className="text-red-500 text-xl">Story</span>
                                <br />
                                It&apos;s the year 2052 when you wake up from hyper sleep - but you immediately know there is something wrong. The ship you are in is docked to an abandoned alien space station. You must find the remaining crew members and find out what happened.
                                <br /><br />
                                <span className="text-red-500 text-xl">Gameplay</span>
                                <br />
                            </p>
                            <ul className="list-inside list-disc">
                                <li>Psychological Thriller</li>
                                <p>You won&apos;t believe the things that lived on this station. And who says everyone left... Why is the station abandoned? What really is going on?
                                    We aim to create a game that will make you question almost everything you do.</p>
                                <br />
                                <li>Linear</li>
                                <p>The game is created with a linear playstyle in mind. This means that one thing will unlock another thing, but there is no way of going back.
                                    It plays like Half Life, Prey, Metro, Dead Space, etc.</p>
                                <br />
                                <li>Graphics</li>
                                <p>Build using Unreal Engine 5 we can create an amazing looking game while still being optimized and performant.
                                    Make sure to check the minimum specification below.</p>
                            </ul>
                            <p>
                                <br />
                                <span className="text-red-500 text-xl">Side note!!</span>
                                <br />
                                This is our debut game. We had the intention of creating something different but decided to first make a smaller game first. Abandoned: Prologue is made with the story of Abandoned in mind, see it as extra content before the main game.
                                We went this way because none of us are game developers or have any experience with it. And now we can focus on learning without large consequences if anything goes wrong.
                                <br />
                                [For anyone that read the previous description, that was the one for Abandoned.]
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}