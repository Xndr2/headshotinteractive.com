import React from "react";
import Updates from "../components/update/updates";

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
