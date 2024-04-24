"use client"
import { Socials } from "@/constants";
import Image from "next/image";

import React, { useState } from "react";
import EnquireForm from "./EnquireForm";


const Navbar = () => {

  const [showForm, setShowForm]=useState(false)

  console.log("onClose",showForm)
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          {/* <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          /> */}

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            CodeGuild
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between  sm=w-32 md:hidden lg:hidden">
          <div className="flex items-center justify-between w-full h-auto px-[20px] py-[10px]  text-gray-100">
            {/* <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a> */}
            <a href="#projects" className="cursor-pointer">
              CodeGuild
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {/* {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}  */}
          <button
            style={{ backgroundColor: "#D2614B" }}
            className=" text-white font-bold py-2 px-4 rounded"
            onClick={()=>setShowForm(true)}
          >
            Enquire Form
          </button>
        </div>
      </div>
      {showForm && <EnquireForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default Navbar;
