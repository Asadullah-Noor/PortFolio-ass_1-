import React from 'react'
const About = () => {
  return (
    <div className='grid grid-cols-2 bg-black min-h-screen p-10 gap-20 items-center'>
      <div className='text-white rounded-2xl font-bold text-lg flex flex-col gap-5'>
        <p>
          I’m a Software Engineering student and MERN Stack Developer passionate about building scalable and user-focused web applications.
          Currently working on a multi-tenant Ticket Management System and the Yardzai Garage Selling App, while expanding my skills in Python, Machine Learning, and leadership development.
        </p>
      </div>
      <div>        <img 
        src='/asad.JPG'
        alt='Asadullah'
        className='rounded-2xl'/>
      </div>
    </div>
  )
}

export default About
