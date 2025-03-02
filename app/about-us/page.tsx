import MeetTheTeam from "../components/meettheteam";
import Testers from "../components/testers";

export default function AboutUs() {
    let team = [
        // team
        { src: "/abandoned_pfp/xndr.webp",
            name: "Xndr",
            roles: [
                {role: "Lead Developer"},
                {role: "Game Designer"},
                {role: "Systems Developer"},
                {role: "Gameplay Programmer"},
                {role: "Project Manager"},
                {role: "Founder of Headshot"},
            ],
            links: [
                {name: "Website", link: "https://xndr.site"},
                {name: "Twitter / X", link: "https://twitter.com/Xndr___"},
            ],
        },
        { src: "/abandoned_pfp/gadubadish.webp",
            name: "Gadubadish",
            roles: [
                {role: "3D Artist"},
                {role: "Environment Designer"},
                {role: "Concept Artist"},
                {role: "Story Developer"},
                {role: "Voice Actor | Male Player"},
            ],
            links: [
                {name: "YouTube", link: "http://www.youtube.com/@Gadubadish"},
                {name: "Twitter / X", link: "https://x.com/gadubadish"},
            ],
        },
        { src: "/abandoned_pfp/charlesfrost.webp",
            name: "CharlesFrxst",
            roles: [
                {role: "Community Manager"},
                {role: "Senior Moderator"},
                {role: "Story Contributor"},
                {role: "Founding Member of Headshot"},
            ],
            links: [
                {name: "Twitter / X", link: "https://x.com/CharlesFrxst"},
            ],
        },
        { src: "/abandoned_pfp/theusi.webp",
            name: "TheUsi",
            roles: [
                {role: "3D Artist"},
                {role: "Environment Designer"},
                {role: "Story Contributor"},
            ],
            links: [
                {name: "Discord", link: "https://discordapp.com/users/779389467219197993"},
            ],
        },
        { src: "/abandoned_pfp/Lynx.jpg",
            name: "Lynx",
            roles: [
                {role: "Music Composer"},
                {role: "Sound Designer"},
                {role: "Story Contributor"},
            ],
            links: [
                {name: "Twitter / X", link: "https://x.com/EnviousLynx"},
            ],
        },
        { src: "/abandoned_pfp/grug.webp",
            name: "Grug",
            roles: [
                {role: "Senior Moderator"},
                {role: "VFX Advisor"},
                {role: "Story Contributor"},
                {role: "Voice Actor | ASH"},
            ],
            links: [
                {name: "Discord", link: "https://discordapp.com/users/490225729137672203"},
                {name: "Casting Call", link: "https://www.castingcall.club/greguss"},
            ],
        },
        { src: "/abandoned_pfp/Unholy0bastard.jpg",
            name: "Unholy0bastard",
            roles: [
                {role: "C++ Assistant"},
            ],
            links: [
                {name: "Discord", link: "https://discordapp.com/users/265115912883929088"},
            ],
        },
        { src: "/abandoned_pfp/jack.png",
            name: "Jack",
            roles: [
                {role: "Graphical Artist"},
                {role: "Steam Artwork Designer"},
            ],
            links: [
                {name: "Email", link: "mailto:eimantaskersulis@gmail.com"},
            ],
        },
    ];
    
    let testers = [
        // testers
        { src: "/abandoned_pfp/testers/Kronos II.webp", name: "Kronos II", title: "Tester" },
        { src: "/abandoned_pfp/testers/Mera.webp", name: "Mera", title: "Tester" },
        { src: "/abandoned_pfp/testers/Simon.webp", name: "Simon", title: "Tester" },
        { src: "/abandoned_pfp/testers/Jarne2203.webp", name: "Jarne2203", title: "Tester" },
        { src: "/abandoned_pfp/testers/MrDagger.webp", name: "Mr. Dagger", title: "Tester" },
    ];

    return (
        <div className="bg-home-image-2 bg-cover bg-center">
            <div className="bg-opacity-30 bg-black">
                <div className="flex flex-col items-center pt-10 mx-auto drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
                    {/* about */}
                    <div className="max-w-3xl text-center">
                        <h2 className="text-4xl mt-20">About Us</h2>
                        <p className="mx-10 mt-5 md:text-lg text-left">
                            We are Headshot Interactive, a small indie game studio made up of friends who love gaming and storytelling. We may be new to the game development scene and don&apos;t have any previous experience with a big project like Abandoned, but that&apos;s part of what makes this journey so exciting!
                            <br />
                            We&apos;re learning as we go, and every day brings new challenges and creative breakthroughs.
                            <br /><br />
                            We work on our games in our spare time. This isn&apos;t a job for us, it&apos;s a passion project. We&apos;re driven by the joy of making games, not by deadlines or funding.
                            <br />
                            As of now, we don&apos;t have any funds so no one is making money off our projects!
                            <br /><br />
                            With no pressure to rush, we take our time to experiment and explore different ideas, making sure every aspect of our games feels right. This freedom lets us create games that are true to our vision and full of heart.
                        </p>
                    </div>
                    
                    {/* meet the team */}
                    <div className="max-w-5xl text-center">
                        <h2 className="text-4xl mt-20">Meet The Team</h2>
                        <p className="mx-10 mt-5 md:text-lg">
                            Starting from a single developer, we have grown into a team of {team.length} amazing people.
                        </p>
                        <MeetTheTeam team={team} />
                        <p className="mx-10 mt-5 md:text-lg">
                            We also have a small group of {testers.length} active Steam testers.
                        </p>
                        <p className="text-sm">Rework of this section in progress...</p>
                        <Testers testers={testers} />
                    </div>
                </div>
            </div>
        </div>
    )
}