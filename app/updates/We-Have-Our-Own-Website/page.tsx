import Image from "next/image"
import Link from "next/link"

export default function Update() {
    return (
        <div className=":max-w-[52rem] md:mt-20 mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl">
            <header className="pt-16 text-center">
                <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight underline font-extrabold">We Have Our Own Website!</h1>
                <p className="text-lg text-slate-400 text-left">
                    If you are reading this, welcome to the official Headshot Interactive website. We post everything on our Discord but more details here for those looking for an in depth explanation.
                </p>
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