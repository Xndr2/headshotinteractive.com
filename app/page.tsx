import Image from "next/image";
import Link from "next/link";
import MeetTheTeam from "./components/meettheteam";
import Testers from "./components/testers";

export default function Home() {
    let team = [
        // team
        { src: "/abandoned_pfp/xndr.webp", name: "Xndr", title: "Project Lead", rank: "Senior Developer" },
        { src: "/abandoned_pfp/charlesfrost.webp", name: "CharlesFrxst", title: "Community Manager", rank: "Senior Moderator" },
        { src: "/abandoned_pfp/gadubadish.webp", name: "Gadubadish", title: "3D Modeler", rank: "Senior Developer" },
        { src: "/abandoned_pfp/grug.webp", name: "Grug", title: "Trial Graphics Developer ", rank: "Moderator" },
        { src: "/abandoned_pfp/theusi.webp", name: "TheUsi", title: "3D Modeler", rank: "Developer" },
        { src: "/abandoned_pfp/milton.webp", name: "Milton", title: "Story Writer", rank: "Trial Developer" },
    ];

    let testers = [
        // testers
        { src: "/abandoned_pfp/testers/Kronos II.webp", name: "Kronos II", title: "Tester" },
        { src: "/abandoned_pfp/testers/Mera.webp", name: "Mera", title: "Tester" },
        { src: "/abandoned_pfp/testers/Simon.webp", name: "Simon", title: "Tester" },
        { src: "/abandoned_pfp/testers/Flixy.webp", name: "Flixy", title: "Tester" },
        { src: "/abandoned_pfp/testers/Jarne2203.webp", name: "Jarne2203", title: "Tester" },
        { src: "/abandoned_pfp/testers/Serg4.webp", name: "Serg4", title: "Tester" },
    ]

    return (
        <>
            <main className="">
                <div id="Home" className="absolute top-0 w-full text-center">
                    {/* Main */}
                    <div className="flex h-[120vh] flex-col items-center bg-home-image-1 bg-cover bg-center">
                        <Image
                            src="/Logos/HI_Text.png"
                            alt="Logo"
                            width={1440}
                            height={14}
                            className="h-auto md:w-6/12 mt-20 md:mt-40 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]"
                        />


                    </div>

                    {/* About */}
                    <div id="About" className="flex h-full md:h-[120vh] flex-col items-center bg-home-image-2 bg-cover bg-center">
                        <h2 className="text-4xl mt-20 md:mt-40 mx-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">Meet the team!</h2>
                        <p className="mx-10 md:text-lg text-center max-w-screen-md">
                            We are Headshot Interactive, a small indie development studio.
                            <br />
                            Starting from a single developer, we have grown into a team of {team.length} amazing people.
                        </p>
                        {/* member list */}
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
                        <p className="mx-10 mb-20 md:text-lg text-left max-w-screen-md">
                            Abandoned is a Sci-Fi Tactical PvE shooter set on an alien planet that serves as a trading hub for products,
                            spices and goods from all across the galaxy.
                            <br /><br />
                            You, <span className="italic">the player</span>, are on this planet and need to find a way back home. <br />
                            Explore the huge city, fight alien terrorists that want to take over the planet or work together with the military and destroy these terrorist once and for all.<br />
                            The game follows a basic story line, some of the decisions you make can lead to an entirely different ending.
                            <br /><br /><span className="font-semibold text-xl">&#8227; Explore</span><br />
                            Build on Unreal Engine 5, Abandoned allows for a planet on a 1:1 scale that is fully explore-able. Explore the city or go outside city walls, who knows what you might find out there.
                            <br /><br /><span className="font-semibold text-xl">&#8227; Fight</span><br />
                            The city&apos;s military is in all out war with a group of terrorists that want to take over the city. Complete your basic training and join an AI squad on a mission.
                            Carefully plan out your next move, be stealthy, or go in guns-blazing.
                            <br />The choice is up to you.
                            <br /><br /><span className="font-semibold text-xl">&#8227; Escape</span><br />
                            At the end of the day, your main objective is still trying to get off this planet and going back to earth to report what happened to your crew... what actually happened to your crew?
                            Try to remember the events that went down before coming to this planet alone and leave once you remember everything you need. But is everything you need to know really everything there&apos;s to know?
                            <br />Can you really trust everyone you know?
                            <br />Maybe all this isn&apos;t what it looks like...
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}