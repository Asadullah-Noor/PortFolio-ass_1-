import React from 'react';

const ProjectCard = ({ title, description, URL, image, techStack }) => {
  return (
    <>

    <div className="bg-white rounded-lg shadow-lg overflow-hidden ">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-cyan-400">{title}</h2>
        <p className="text-black mb-4">{description}</p>
        <p className="text-black mb-4">
          <strong>Tech Stack:</strong> {techStack ? techStack.join(', ') : 'N/A'}
        </p>
        <a
          href={URL}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
    </>
  );
};

export default ProjectCard;
