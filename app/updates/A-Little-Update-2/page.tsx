import Image from "next/image"
import Link from "next/link"

export default function Update() {
    return (
        <div className=":max-w-[52rem] md:mt-20 mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl">
            <header className="py-16 text-center">
                <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight underline font-extrabold">A little update v2</h1>
                <p className="text-lg text-slate-400 text-left">Hey everyone! 👋</p>
                <div className="text-lg text-slate-400 text-left">
                    <p>
                        <br />
                        We know it&apos;s been a bit quiet around here, and you&apos;re probably wondering what&apos;s going on with the game. Just wanted to give you a quick update: we are still hard at work in the background!
                        <br /><br />
                        Right now, most of what we have are placeholder systems, models, and assets, so there hasn&apos;t been a lot to show off yet. Once we get the real models, sounds, animations, and graphics in place, you&apos;ll be seeing a lot more from us.
                        <br /><br />
                        Our goal is to share something really cool by the end of the year, but we&apos;re not 100% sure we&apos;ll make that. Life happens, and since we work on this in our spare time, things can pop up that we don&apos;t expect.
                        <br /><br />
                        Thanks for your patience, and stay tuned! We&apos;re excited to share more when it&apos;s ready!
                        <br /><br />
                        Much love,
                        <br />
                        The Abandoned Dev Team
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