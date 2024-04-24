"use client"
import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";
import AWS_Cloud from "../../public/AWS_Cloud.jpg";
import Full_Stack from "../../public/Full_Stack.png";
import NodeCourse from "../../public/NodeCourse.jpg";
import Image from "next/image";
const MyCourses = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [selectedProjectDialogbox, setSelectedProjectDialogbox] = useState(false);

  const products = [
    {
      _id: 1,
      title: "Full Stack Course",
      src: Full_Stack.src,
      description: "React.js,Node.js,SQL,AWS",
      content:
        "Welcome to our channel. Joining a Full Stack Development course with us  essential skills in HTML, CSS, JavaScript, MongoDB ,React this comprehensive program ensures proficiency in building scalable and dynamic solutions for companies. Here you can learn web designing, UI/UX designing, html, css animations and css effects, javascript tutorials and related so on. ",
      price: 14999,
      colors: ["red", "black", "crimson", "teal"],
      count: 1,
      Industies_Key: [
        {
          id: 1,
          Title: "Focused curriculum",
          content: "Modern Industry Standards-Based Curriculum",
        },
        {
          id: 2,
          Title: "Industry Mentors",
          content: "Expert Mentorship: Live Training for Real-World Skills",
        },
        {
          id: 3,
          Title: "Career Support",
          content: "Holistic Career Guidance: Expert Tips for Success",
        },
        {
          id: 4,
          Title: "Experiential Learning",
          content: "Experiential Learning: Hands-On Skill Polishing",
        },
      ],
      Duration: "1 Month",
      StartCourse: "25th april 2024",
      hour: "40hr",
      deliveryMode: "Offline",
    },
    {
      _id: 2,
      title: "Backend Development Course",
      src: NodeCourse.src,
      description: "UI/UX designing, html css tutorials",
      content:
        "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
      price: 11999,
      Industies_Key: [
        {
          id: 1,
          Title: "Focused curriculum",
          content: "Modern Industry Standards-Based Curriculum",
        },
        {
          id: 2,
          Title: "Industry Mentors",
          content: "Expert Mentorship: Live Training for Real-World Skills",
        },
        {
          id: 3,
          Title: "Career Support",
          content: "Holistic Career Guidance: Expert Tips for Success",
        },
        {
          id: 4,
          Title: "Experiential Learning",
          content: "Experiential Learning: Hands-On Skill Polishing",
        },
      ],
      Duration: "6 Month",
      StartCourse: "25th april 2024",
      hour: "100hr",
      deliveryMode: "Offline",
      colors: ["red", "black", "crimson", "teal"],
      count: 2,
    },
    {
      _id: 3,
      title: "AWS Course",
      src: AWS_Cloud.src,
      description:
        "the core principles of software development and operations. Gain hands-on experience in automation, collaboration, and CI/CD pipelines",
      content:
        "Discover the transformative potential of DevOps with our advanced DevOps and Cloud Computing Course! Dive deep into the world of continuous integration, deployment, and delivery as you master essential tools like Docker, Kubernetes, and Jenkins. You'll develop expertise in infrastructure as code using Terraform, configuration management with Ansible, and monitoring with Prometheus and Grafana.",
      price: 8999,
      Industies_Key: [
        {
          id: 1,
          Title: "Focused curriculum",
          content: "Modern Industry Standards-Based Curriculum",
        },
        {
          id: 2,
          Title: "Industry Mentors",
          content: "Expert Mentorship: Live Training for Real-World Skills",
        },
        {
          id: 3,
          Title: "Career Support",
          content: "Holistic Career Guidance: Expert Tips for Success",
        },
        {
          id: 4,
          Title: "Experiential Learning",
          content: "Experiential Learning: Hands-On Skill Polishing",
        },
      ],
      Duration: "6 Month",
      StartCourse: "25th april 2024",
      hour: "100hr",
      deliveryMode: "Offline",
      colors: ["red", "black", "crimson", "teal"],
      count: 2,
    },
  ];

  const handleClick = (id:number ) => {
    console.log("onClick",id)
    if (selectedProject === id) {
      setSelectedProject(0);
    } else {
      setSelectedProject(id);
      setSelectedProjectDialogbox(true)
    }
  };

  return (
    <div className="flex flex-col ourCourseContainer items-center justify-center py-20" id="projects">
    <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
      Our Courses
    </h1>
    <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
      {products.map((item) => (
        <div onClick={() => handleClick(item._id)} key={item._id} className="courseCard relative cursor-pointer overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] md:w-1/3">
          <Image
            src={item.src}
            alt={item.title}
            width={1000}
            height={1000}
            className="w-full object-cover"
          />
          <div className="relative p-4">
            <h1 className="text-2xl font-semibold text-white">{item.title}</h1>
            <p className="mt-2 text-gray-300">{item.description}</p>
          </div>
        </div>
      ))}
    </div>

    {products.map((item) => (
      <div
        key={item._id}
        className={`details ${selectedProject === item._id ? 'show' : ''}`}
        style={selectedProject === item._id ? { border: "0px solid red", marginTop: "20px" } : {}}
      >
        {selectedProject === item._id && (
          <>
            <div className="big-img">
              <img src={item.src} alt={item.title} className="w-full object-cover" />
            </div>
            <div className="box">
              <div className="row">
                <h1>{item.title}</h1>
                <span>{item.price}</span>
              </div>
              <p style={{ fontSize: "15px" }}>{item.description}</p>
              <p style={{ fontSize: "15px" }}>{item.content}</p>
            </div>
            <div className="app-layout">
              <div className="Industies_Key tweets">
                Duration<div className="inner">{item.Duration}</div>
              </div>
              <div className="Industies_Key replies">
                Commencement of Course<div className="inner">{item.StartCourse}</div>
              </div>
              <div className="Industies_Key search">
                Hours of Learning:<div className="inner">{item.hour}</div>
              </div>
              <div className="Industies_Key messages">
                Delivery Mode:<div className="inner">{item?.deliveryMode}</div>
              </div>
            </div>
          </>
        )}
      </div>
    ))}
  </div>
);
};

export default MyCourses;

