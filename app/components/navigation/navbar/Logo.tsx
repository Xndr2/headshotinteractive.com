"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Image
        src="/HI_Logo.png"
        alt="Logo"
        width={500}
        height={500}
        className="h-auto w-8 md:w-16"
      />
    </>
  );
};

export default Logo;
