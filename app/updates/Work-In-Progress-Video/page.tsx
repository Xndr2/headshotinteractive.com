import Image from "next/image"
import Link from "next/link"

export default function Update() {
    return (
        <div className=":max-w-[52rem] md:mt-20 mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl">
            <header className="py-16 text-center">
                <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight underline font-extrabold">Work In Progress Video</h1>
                <p className="text-lg text-slate-400 text-left">Hi everyone,</p>
                <div className="text-lg text-slate-400 text-left">
                    <br />
                    <p>
                        Here is a little work in progress video of things I&apos;ve been working on.
                        <br />
                        This shows a bunch of systems working together such as weapons, item management, player character, visuals, interacting, health / sanity, bullet detection, UI, etc.
                        <br />
                        Basically everything you see is connected so a system in some way.
                        <br /><br />
                        This isn&apos;t the announcement I was talking about a couple of days ago.
                        <br />
                        We are still planning on showing something huge near the end of the year!
                    </p>
                    <div className="mt-4">
                        <p>Video can look weird due to compression</p>
                        <video src="/updates/Work-In-Progress-Video/video.mp4" controls></video>
                    </div>
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