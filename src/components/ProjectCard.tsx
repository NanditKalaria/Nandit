import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Project {
  category: string;
  title: string;
  image: string;
  description: string;
  href: string;
}

const ProjectCard: React.FC<Project> = ({ category, title, image, description, href }) => {
  return (
    <div className="relative w-full max-w-3xl mx-auto group cursor-pointer">
      <div className="aspect-[16/10] overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      
      <div className="absolute bottom-0 right-0 translate-y-1/3 w-2/3 rounded-lg dark:bg-gray-900/95 bg-white/95 backdrop-blur-sm p-6 shadow-xl transform transition-transform duration-500 group-hover:translate-y-1/4">
        <p className="bg-gradient-to-r from-[rgba(177,108,234,1)] to-[rgba(255,94,105,1)] inline-block px-3 py-1 rounded-full mb-4 text-sm font-medium text-white">
          {category}
        </p>
        <h2 className="text-xl font-bold mb-3 transform transition-transform duration-500 group-hover:translate-x-2 dark:text-white text-gray-900">
          {title}
        </h2>
        <p className="dark:text-gray-300 text-gray-600 text-sm mb-4">
          {description}
        </p>
        <a 
          href={href}
          target="_blank"
          rel="noopener noreferrer" 
          className="inline-flex items-center dark:text-gray-300 text-gray-600 hover:text-[rgba(255,94,105,1)] transition-all duration-300"
        >
          View Project 
          <ArrowRight className="ml-2 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-2" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;