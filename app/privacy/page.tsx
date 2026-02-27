import Link from "next/link";

export const metadata = {
    title: "Privacy Policy | Headshot Interactive",
    description: "Privacy Policy for Headshot Interactive.",
};

export default function Privacy() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-20">
            <Link href="/" className="text-sm text-neutral-500 hover:text-white transition-colors">
                &larr; Back
            </Link>

            <h1 className="text-3xl font-bold mt-8 mb-2">Privacy Policy</h1>
            <p className="text-neutral-400 mb-10">Headshot Interactive</p>

            <section className="space-y-8 text-neutral-300">
                <div>
                    <h2 className="text-xl font-semibold text-white mb-2">Consent</h2>
                    <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white mb-2">Information we collect</h2>
                    <p>We do not collect any personal data. Basic anonymous analytics are collected via Vercel Analytics to understand site traffic.</p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-white mb-2">Cookies</h2>
                    <p>This website does not use cookies.</p>
                </div>
            </section>
        </div>
    );
}
