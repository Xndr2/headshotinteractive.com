import Image from "next/image";

export default function Abandoned() {
    return (
        <div className="bg-home-image-5 bg-cover bg-center">
            <div className="bg-opacity-30 bg-black">
                <div className="flex flex-col items-center pt-10 mx-auto drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
                    {/* about */}
                    <div className="max-w-3xl text-center">
                        <h2 className="text-4xl mt-20">Abandoned</h2>
                        {/* Info */}
                        <div className="mx-10 my-20 md:text-lg text-left max-w-screen-md drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">
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
                                The game will keep you questioning everything with its unsettling atmosphere and gripping story. Nothing is as it seems, and survival hinges on your ability to adapt and uncover the station&apos;s secrets.
                                </p>
                                <br />
                                <li className="text-red-500 text-xl">Linear</li>
                                <p>
                                Abandoned offers a linear gameplay experience with tightly crafted sequences that immerse you in a compelling narrative. If you&apos;ve enjoyed games like Half-Life, Prey, Metro, or Dead Space, you&apos;ll find yourself drawn to its intense and eerie world.
                                </p>
                                <br />
                                <li className="text-red-500 text-xl">Visuals</li>
                                <p>
                                We chose Unreal Engine 5 as a development tool because it provides the flexibility and resources we need to bring our vision for Abandoned to life. While advanced features like Lumen and Nanite may come in handy, our decision was never about marketing buzzwords or making Unreal a selling point. It&apos;s simply the tool that best supports our creative goals.
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
        </div>
    )
}