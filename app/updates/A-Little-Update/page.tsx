import Image from "next/image"
import Link from "next/link"

export default function Update() {
    return (
        <div className=":max-w-[52rem] md:mt-20 mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl">
            <header className="py-16 text-center">
                <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight underline font-extrabold">A little update</h1>
                <p className="text-lg text-slate-400 text-left">Hello there,</p>
                <div className="text-lg text-slate-400 text-left">
                    <p>
                        <br />
                        We recently held a meeting about Abandoned and concluded that the story didn&apos;t seem right. We now internally revamped the story and because a lot has changed i decided to change the description of the game from
                        <br />
                        <span className="font-bold">&quot;Sci-Fi tactical PvE shooter&quot;</span> to <span className="font-bold">&quot;psychological thriller&quot;</span>
                        <br /><br />
                        Also, side note
                        <br />
                        We are still looking for sound designers. So if you can, or you know someone that can make music of any type of sfx please go to <span className="bg-blue-800 p-0.5 rounded-md text-slate-300 hover:text-white hover:underline hover:curs">#applications</span> in the discord server !!!
                        <br /><br />
                        Thanks,
                        <br />
                        Xndr
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