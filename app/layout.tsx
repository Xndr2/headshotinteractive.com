import { Analytics } from "@vercel/analytics/react"
import Navigation from "./components/navigation";
import "./globals.css";

import { Goldman } from "next/font/google";

const goldman = Goldman({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export const metadata = {
  title: 'Headshot Interactive',
  description: 'Welcome to the official Headshot Interactive website. Meet the team, learn about Abandoned or check recent updates.',
  // info
  applicationName: 'Headshot Interactive',
  referrer: 'origin-when-cross-origin',
  keywords: ['Headshot Interactive', 'Headshot', 'Interactive', 'HeadshotInteractive', 'Abandoned', 'Abandoned Part 1', 'Part 1', 'Xndr'],
  authors: [{ name: 'Headshot' }, { name: 'Interactive', url: 'https://headshotinteractive.com' }],
  creator: 'Xndr',
  publisher: 'Xndr',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // icons
  icons: {
    icon: '/Logos/HI_Logo.png',
    shortcut: '/Logos/HI_Logo.png',
  },
  // twitter / and other things according to Next.js
  twitter: {
    card: 'summary',
    title: 'headshotinteractive.com',
    description: 'Welcome to Headshot. We are a small indie development studio. Check out Abandoned!',
    site: '@Xndr___',
    creator: '@Xndr___',
    image: 'https://headshotinteractive.com/Logos/HI_Logo.png', // Must be an absolute URL
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={goldman.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
