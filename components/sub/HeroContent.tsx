"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { SliderComp } from "./slider";
import FullStackCourse from "../../public/FullStackCourse.png"
import awsCourse from "../../public/awsCourse.jpeg"
import FrontendCourse from "../../public/FrontendCourse.png"
import nodeCourse from "../../public/NodeCourse.jpg"
const HeroContent = () => {
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
      image:FrontendCourse.src,
    },
    {
      title: "Backend Course",
      description: "Course To Become Best Node.JS developer",
      image:nodeCourse.src
           },
    {
      title: "AWS Course",
      description: "Course To Become Best Cloud developer",
      image:awsCourse.src,
    },
    {
      title: "Full Stack Course",
      description: "Course To Become Full Stack Developer",
      image:FullStackCourse.src,
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
      image:FrontendCourse.src,
       },
    {
      title: "Backend Course",
      description: "Course To Become Best Node.JS developer",
      image:nodeCourse.src,
      },
    {
      title: "AWS Course",
      description: "Course To Become Best Cloud developer",
      image:awsCourse.src,
    },
    {
      title: "Full Stack Course",
      description: "Course To Become Full Stack Developer",
      image:FullStackCourse.src,
    },
  ];
  return (
    <div className="flex flex-col  items-center justify-center">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
      >
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">Fullstack Developers</h1>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-4 mt-6  md:text-5xl xl:text-6xl font-bold text-white max-w-[600px] "
          >
            <span>
              Full
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                Stack development Course
              </span>
              {/* project exprience */}
            </span>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="md:text-5xl xl:text-lg text-gray-400 my-5 max-w-[600px]"
          >
            Unlock MERN stack mastery with our hands-on course. From MongoDB to
            React, delve into key technologies driving modern web applications.
            Ideal for all skill levels, this comprehensive program ensures
            proficiency in building scalable and dynamic solutions for
            companies.
          </motion.p>
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            Learn More!
          </motion.a>
        </div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full h-full flex justify-center items-center"
        >
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            height={650}
            width={650}
          />
        </motion.div>
      </motion.div>
      <SliderComp
        autoplay={true}
        autoplaySpeed={3000}
        slideNum={3}
        data={data}
        label={"Developer"}
        heading={"Places to travel to in 2022"}
        subheading={"2022 is going to be epic!"}
        height={"230px"}
      />
    </div>
  );
};

export default HeroContent;
