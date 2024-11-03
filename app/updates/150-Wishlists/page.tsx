import Image from "next/image"
import Link from "next/link"

export default function Update() {
    return (
        <div className=":max-w-[52rem] md:mt-20 mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl">
            <header className="py-16 text-center">
                <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight underline font-extrabold">We hit 150 wishlists on Steam!!!</h1>
                <p className="text-lg text-slate-400 text-left">Thank you all so much for the support!</p>
                <div className="text-lg text-slate-400 text-left">
                    <p>Here is a little sneak peek to our work in progress tutorial area, the shooting range.</p>
                    <br /><br />
                    <Image
                    src="/updates/150-Wishlists/image.png"
                    alt="picture showing 150 wishlists"
                    width={266}
                    height={248}
                    className=""
                    />
                    <br />
                    <Image
                        src="/updates/150-Wishlists/Screenshot.png"
                        alt="teaser"
                        width={3838}
                        height={1606}
                        className=""
                    />
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