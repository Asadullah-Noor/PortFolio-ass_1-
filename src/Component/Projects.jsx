import React from 'react';
import ProjectCard from './ProjectCard.jsx';

const Projects = () => {
  const projects = [
    {
      title: "TickFlo",
      description: "A multi-tenant ticket management system designed to streamline issue tracking and resolution for businesses of all sizes...",
      techStack: ["NodeJS","Express","Swagger","MongoDB","Postman"],
      URL: "https://tickflo-fe-production.up.railway.app/auth/login",
      image: "/image.png"
    },
    {
      title: "Yard Sale Application",
      description: "A MERN-based yard sale platform where users can buy and sell pre-owned items locally...",
      techStack: ["MongoDB","Express","React","NodeJS","TailwindCSS"],
      URL: "https://yardze-web-production.up.railway.app/",
      image: "/yard.png"
    },
    {
      title: "InvoZone",
      description: "A responsive and visually engaging landing page built for InvoZone...",
      techStack: ["React","TailwindCSS","JavaScript","HTML","CSS"],
      URL: "https://github.com/Asadullah-Noor/InvoZone.git",
      image: "/invo.png"
    },
    {
      title: "XhaffeXhop",
      description: "An e-commerce website prototype named XhaffeXhop, developed using React and Tailwind CSS...",
      techStack: ["React","TailwindCSS","JavaScript","HTML","CSS"],
      URL: "https://xhafeexhop.vercel.app/",
      image: "/shop.png"
    },
    {
      title: "Awfera LLM Learning Platform(clone)",
      description: "A learning platform dedicated to educating users about Large Language Models (LLMs)...",
      techStack: ["React","TailwindCSS","HTML","NodeJS","Express","MongoDB"],
      URL: "https://github.com/Asadullah-Noor/Awfra.git",
      image: "/llm.png"
    },
    {
      title: "My Portfolio",
      description: "A personal portfolio website built to showcase my skills, projects, and experience as a full-stack developer...",
      techStack: ["React","TailwindCSS","JavaScript","HTML"],
      URL: "https://mrxhafii.vercel.app/",
      image: "/port.png"
    }
  ];
  return (
    <div>
          <h1 className='text-4xl font-bold items-center justify-center flex 
          bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text
           text-transparent'>What's I've done</h1>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-5 p-5 mt-10 bg-black'>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            URL={project.URL}
            image={project.image}
            techStack={project.techStack}
           
          />
        ))}
      </section>
    </div>
  );
};

export default Projects;
