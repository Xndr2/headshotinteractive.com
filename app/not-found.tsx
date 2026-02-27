import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "404 | Headshot Interactive",
    description: "Page not found.",
};

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
            <h1 className="text-5xl font-bold mb-4">404</h1>
            <p className="text-lg text-neutral-400 mb-8">Page not found.</p>
            <a href="/" className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded transition-colors">
                Go Home
            </a>
        </div>
    );
}
