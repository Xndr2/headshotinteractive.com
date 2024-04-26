import { Analytics } from "@vercel/analytics/react"
import Navigation from "./components/navigation";
import Script from 'next/script'
import "./globals.css";
import { Goldman } from "next/font/google";

const goldman = Goldman({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export const metadata = {
  title: 'Headshot Interactive',
  description: 'Welcome to the official Headshot Interactive website. Meet the team, learn about Abandoned or check recent updates.',
  url: "headshotinteractive.com",
  image: "https://headshotinteractive.com/Logos/HI_LogoBlack.png",
  // icons
  icons: {
    icon: '/Logos/HI_Logo.png',
    shortcut: '/Logos/HI_Logo.png',
  },
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
  // twitter / and other things according to Next.js
  // twitter: {
  //   card: 'summary',
  //   title: 'headshotinteractive.com',
  //   description: 'Welcome to Headshot. We are a small indie development studio. Check out Abandoned!',
  //   site: '@Xndr___',
  //   creator: '@Xndr___',
  //   image: 'https://headshotinteractive.com/Logos/HI_Logo.png', // Must be an absolute URL
  // },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-JJZVQ6H597" />
        <Script src="./googleScript.js" />
      </head>
      <body className={goldman.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}