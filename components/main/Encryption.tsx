"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import { SliderComp } from "../sub/slider";

const Encryption = () => {
  const data = [
    {
      title: "3+",
      description: "Courses To Become Best developer",
      image:
        "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/ia_0444_city-header_milan_marianna-tomaselli-768x432.jpg",
    },
    {
      title: "Frontend Course",
      description: "Course To Become Best UI developer",
      image:
        "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/ia_0378_hong-kong_jisu-choi_final_header-1-768x512.jpg",
    },
    {
      title: "Backend Course",
      description: "Course To Become Best Node.JS developer",
      image:
        "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/location-page-header-prague-greta-samuel-768x512.jpg",
    },
    {
      title: "AWS Course",
      description: "Course To Become Best Cloud developer",
      image:
        "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/ia_0440_florence_giordano-poloni_final_header-768x512.jpg",
    },
    {
      title: "Full Stack Course",
      description: "Course To Become Full Stack Developer",
      image:
        "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/ia_0449_venice_marianna-tomaselli_final_header-768x432.jpg",
    },
    {
      title: "3+",
      description: "Courses To Become Best developer",
      image:
        "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/ia_0444_city-header_milan_marianna-tomaselli-768x432.jpg",
    },
    {
      title: "Frontend Course",
      description: "Course To Become Best UI developer",
      image:
        "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/ia_0378_hong-kong_jisu-choi_final_header-1-768x512.jpg",
    },
    {
      title: "Backend Course",
      description: "Course To Become Best Node.JS developer",
      image:
        "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/location-page-header-prague-greta-samuel-768x512.jpg",
    },
    {
      title: "AWS Course",
      description: "Course To Become Best Cloud developer",
      image:
        "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/ia_0440_florence_giordano-poloni_final_header-768x512.jpg",
    },
    {
      title: "Full Stack Course",
      description: "Course To Become Full Stack Developer",
      image:
        "https://cdn.theculturetrip.com/wp-content/uploads/2019/04/ia_0449_venice_marianna-tomaselli_final_header-768x432.jpg",
    },
  ];
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
    
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Security
        </motion.div>
      </div>
{/* {isClient && ( */}

   {/* ) } */}
      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className=" z-10"
          />
        </div>

        <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="Welcome-text text-[12px]">Encryption</h1>
        </div>
      </div>
      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm/"
        />
      </div>
    </div>
  );
};

export default Encryption;
