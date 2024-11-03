import React from "react";
import Updates from "../components/update/updates";

// top post is newest
const UpdatesPage = () => {
  let updates = [
    { title: "Work In Progress Video", desc: "Here is a little work in progress video of things I've been working on.", postLink: "/updates/Work-In-Progress-Video", date: "Monday, October 21, 2024" },
    { title: "A little update v2", desc: "We know it's been a bit quiet around here, and you're probably wondering what's going on with the game. Just wanted to give you a quick update.", postLink: "/updates/A-Little-Update-2", date: "Wednesday, October 16, 2024" },
    { title: "We hit 150 wishlists on Steam!", desc: "Here is a little sneak peek to our work in progress tutorial area, the shooting range.", postLink: "/updates/150-Wishlists", date: "Saterday, September 7, 2024" },
    { title: "A little update", desc: "We recently held a meeting about Abandoned and concluded that the story didn't seem right.", postLink: "/updates/A-Little-Update", date: "Monday, July 15, 2024" },
    { title: "Happy 2 Years !!", desc: "As of today, the idea for Abandoned exists 2 years! Thank you all so much for all the support! Click here to read about what we've been up to and what out plans are.", postLink: "/updates/Happy-2-Years", date: "Tuesday, May 7, 2024" },
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
