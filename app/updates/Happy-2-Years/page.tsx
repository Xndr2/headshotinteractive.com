import Image from "next/image"
import Link from "next/link"

export default function Update() {
    return (
        <div className=":max-w-[52rem] md:mt-20 mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl">
            <header className="py-16 text-center">
                <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight underline font-extrabold">Happy 2 Years !!!</h1>
                <p className="text-lg text-slate-400 text-left">As of today, the idea for Abandoned exists 2 years.</p>
                <p className="text-lg text-left my-4 font-bold">TLDR: I&apos;m happy with the current state of development. Will have to do a lot to make it look good, but at least the systems work better then before.</p>
                <div className="text-lg text-slate-400 text-left">
                    <p>
                        I know it looks like we haven&apos;t done much in those years.
                        <br />
                        And yes, that is completely true if you look at it from a players perspective. But I like to think we, the team, actually did accomplish a lot.
                        <br />
                        We are no game developers, we don&apos;t have any experience making a game this big. And yet, we try.
                        <br /><br />

                        Our initial idea for Abandoned was very ambitious and we knew it would take ages to complete at our skill level. So we went with the idea of making a smaller game first and after that focus on Abandoned. This smaller game being Abandoned: Prologue.
                        <br /><br />

                        Over the years we had to rework many times, from switch to Unity and back to Unreal, by PC wiping itself clean or me being unhappy with the current state of how we did things.
                        <br />
                        <span className="font-bold">But... No more!</span>
                        <br />
                        For the last 2 months I have been reworking one last time. Making systems for different things instead of putting them all together.
                        These systems are, once build, used as the underlying tech for Abandoned and how everything in the world reacts to each other. This means they just take a very long time to build and get working as they should.
                        <br /><br />

                        <span className="font-bold text-xl text-slate-300">Show me!</span>
                        <br />
                        In the video below you can see all kinds of systems active.
                        <br />
                        Please do not judge the way everything looks. All assets are placeholders by Unreal that will be replaced when we make our own.
                        <br /><br />
                        You can see:
                        <br />
                    </p>
                    <ul className="list-disc">
                        <li className="ml-8">The weapon system handling the state of the current weapon</li>
                        <li className="ml-8">The Dynamic crosshair updating to where you are aiming</li>
                        <li className="ml-8">The player controller making sure the player moves, looks, etc. when the correct button is pressed</li>
                        <li className="ml-8">The player character handling everything physics, speed, health related</li>
                        <li className="ml-8">The UI updating to the correct weapon and showing its info.</li>
                        <li className="ml-8">The dummy&apos;s receiving damage when shot</li>
                        <li className="ml-8">The speed control system adjusting the player speed when being notified by the controller (using scroll wheel to change the speed)</li>
                        <li className="ml-8">etc.</li>
                    </ul>
                    <div className="mt-4">
                        <video src="/updates/Happy-2-Years/DynCrosshair.mp4" controls></video>
                    </div>
                    <p>

                        <br /><br />

                        <span className="font-bold text-xl text-slate-300">What&apos;s next?</span>
                        <br /><br />
                        I&apos;m currently making all these systems even better and adding more and more systems, like interacting with game objects, a dialogue system, cutscenes, etc.
                        <br />
                        The team and I have also sat down to get the entire story line in order. (Devs will hear more on this soon)
                        <br />
                        And for all those <span className="bg-blue-800 p-0.5 rounded-md text-slate-300 hover:text-white hover:underline hover:curs">@Tester</span> &apos;s out there, I am in contact with Steam support to try and get you guys some keys so y&apos;all can test the game when I make a build.
                        <br /><br />

                        Enough yapping for now,
                        <br />
                        Ill get back to working :)
                    </p>
                </div>
                {/* Back button */}
                <Link className="flex items-center text-sm text-red-500 font-medium" href="/updates">
                    <span className="relative">Back To Updates</span>
                    <svg className="relative mt-px overflow-visible ml-2.5 text-red-500" width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M0 0L3 3L0 6"></path>
                    </svg>
                </Link>
            </header>

        </div >
    )
}