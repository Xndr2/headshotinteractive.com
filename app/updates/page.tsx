import React from "react";
import Updates from "../components/update/updates";
import { Metadata } from "next";
import { title } from "process";

export const metadata: Metadata = {
  title: 'Headshot Interactive | Updates',
  description: 'Headshot Interactive | Updates Page.',
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
  // verification
  verification: {
    google: 'google',
  },
  // icons
  icons: {
    icon: '/Logos/HI_Logo.png',
    shortcut: '/Logos/HI_Logo.png',
    apple: '/Logos/HI_Logo.png',
  },
  // twitter / and other things according to Next.js
  twitter: {
    card: 'summary_large_image',
    title: 'HeadshotInteractive.com',
    description: 'Welcome to Headshot. We are a small indie development studio. Check out Abandoned!',
    site: '@Xndr___',
    creator: '@Xndr___',
    creatorId: '1493973114211995656',
    images: ['https://headshotinteractive.com/Logos/HI_Logo.png'], // Must be an absolute URL
  },
}

// top post is newest
const UpdatesPage = () => {
  let updates = [
    { title: "We Have Our Own Website!", desc: "If you are reading this, welcome to the official Headshot Interactive website. We post everything on our Discord but more details here for those looking for an in depth explanation.", postLink: "/updates/We-Have-Our-Own-Website", date: "Thursday, April 25, 2024" },
    { title: "We Are On Steam", desc: "After going back and forth with Steam Support for 2 week, I finally managed to get the Steam page accepted. Read more to see the link.", postLink: "/updates/We-Are-On-Steam", date: "Tuesday, March 26, 2024" },
    { title: "New Name: Headshot Interactive", desc: "As of now, our Development team will be known as 'Headshot Interactive'. We have grown much in the past few months and we couldn't keep developing without having a group name.", postLink: "/updates/New-Name-Headshot-Interactive", date: "Friday, Feb 23, 2024" },
  ]

  return (
    <>
      <Updates updates={updates} />
    </>
  )
};

export default UpdatesPage;
