import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Shot Missed...',
    description: 'Headshot Interactive | 404 page not found.',
    icons: 'Logos/HI_Logo.png',
}

export default function Error() {
    return (
        <div className="mt-40">
            <div className="text-center">
                <h1 className='text-6xl font-medium mb-2'>Oops!</h1>
                <p className="text-xl font-medium m-6">You Aimed, Fired and Missed.<br />404 | Page not found.</p>
                <a href="/" className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">Go Home</a>
            </div>
        </div>
    )
}