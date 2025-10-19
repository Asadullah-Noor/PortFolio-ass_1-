import React from 'react'
import asad from '../assets/asad.jpg';
import { LiaToolsSolid } from "react-icons/lia";
const Home = () => {
const colorClass = [
  "text-orange-400",
  "text-blue-400",
  "text-yellow-400",
  "text-cyan-400",
  "text-green-400",
  "text-gray-400",
  "text-emerald-400",
  "text-sky-400",
  "text-red-400",
  "text-indigo-400",
  "text-lime-400",
  "text-pink-400",
  "text-purple-400"
];

  return (
    <div>
      
      <div className='flex flex-col justify-center items-center h-full'>
      {/* This is your circular profile card */}
      <div className="group relative w-[300px] h-[300px] bg-blue-950 rounded-full overflow-hidden flex justify-center items-center shadow-lg transition-all duration-300 hover:shadow-2xl">
        {/* Make sure no mt-30 ms-120 here */}
        <div className="absolute inset-y-[-10px] inset-x-[100px]
                         bg-gradient-to-br from-gradient-start to-gradient-end
                         transition-all duration-75
                         animate-spin-slow
                         group-hover:inset-y-[-20px] group-hover:inset-x-0">
        </div>
        <div className="absolute inset-[10px] rounded-full z-10"></div>
        <div className="absolute inset-[30px] border-[2px] border-light-peach z-30 rounded-full flex justify-center items-center overflow-hidden flex-col">
          <img
            src={asad}

                    alt="Profile of AsadUllah"
            className="absolute top-0 left-0 h-full w-full object-cover
                       transition-opacity duration-500 pointer-events-none z-40
                       group-hover:opacity-0"
          />
          <h2 className="relative text-center text-[15px] font-semibold tracking-widest uppercase text-white
                         py-2.5 z-20 opacity-0 transition-opacity duration-300 delay-150
                         group-hover:opacity-100">
            AsadUllah
            <span className="block font-light text-[13px] py-1.5">Software Developer</span>
          </h2>
        </div>
      </div>

      {/* This is your AnimatedText component, now placed below the card */}
      <div className="mt-8">
      
      <h1 className="text-4xl font-bold text-cyan-500 text-center">Hi I'm Asadullah Noor </h1>
      <h2 className='text-black'>FULL STACK DEVELOPER || MERN STACK DEVELOPER</h2>
      </div>
      <div className="flex flex-col justify-center items-center h-screen ">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent">Every great code begins with <br/>an even better story</h1>
        <p className="mt-15 text-lg text-black ms-4 me-4">
          My pursuit of a software engineering career began in 10th grade. After high school,
           I gained foundational skills in HTML and CSS through FreeCodeCamp. This foundation 
           led to an internship at CYRANIX LLC, where I contributed to a multi-tenant ticket 
           
          management system. Currently, I am a Node.js Developer building a yard sale application.
          My broader expertise includes React, JavaScript, Bootstrap, back-end technologies, and 
            Tailwind CSS, and my current learning focus is on mastering AI</p>
        </div>
        <div>
          <div className='flex font-bold text-4xl bg-gradient-to-r from-blue-400 to-green-600 
       bg-clip-text text-transparent'>
       <h1>Tools </h1><LiaToolsSolid  className='p-2 text-green-700 text-5xl'/>
     </div>
    
    </div>
    
    </div>
    <ul className="grid grid-cols-4 gap-4 p-4">
  {([
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "Postman",
    "Git",
    "Git Desktop",
    "Swagger",
    // "Python",
    // "GraphQL", 
    // "Machine Learning", 
  ]).map((skill, index) => (
    <li
      key={index}
      className={`${colorClass[index]} text-lg bg-gradient-to-r from-cyan-600 to-black rounded px-4 py-2 text-center 
        hover:scale-105 transition-transform duration-300 font-bold`}>
      {skill}
    </li>
  ))}
</ul>
     
    </div>
  )
}
export default Home;