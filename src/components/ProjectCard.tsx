// src/components/ProjectCard.tsx
"use client"; // We need this for hooks and event handlers

import React, { useRef } from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    features: string[];
    stack: string[];
    githubUrl: string;
    liveUrl: string;
    caseStudyUrl?: string;
    image?: string;
    video?: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className="bg-gray-800 rounded-lg shadow-xl p-6 flex flex-col transition-transform hover:scale-105 duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full mb-4 rounded-lg overflow-hidden aspect-video">
        {project.video ? (
          <video
            ref={videoRef}
            src={project.video}
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        ) : (
          project.image && (
            <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
          )
        )}
      </div>

      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
      
      <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
      
      <ul className="list-disc list-inside text-gray-400 mb-4">
        {project.features.map((feature, index) => (
          <li key={index} className="text-sm">{feature}</li>
        ))}
      </ul>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((tech, index) => (
          <span key={index} className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-auto">
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-green-600 transition-colors">
          Live Demo
        </a>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-gray-600 transition-colors">
          GitHub
        </a>
        {project.caseStudyUrl !== '#' && (
          <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer" className="text-white py-2 px-4 rounded-full text-sm font-semibold border border-white hover:bg-white hover:text-gray-800 transition-colors">
            Case Study
          </a>
        )}
      </div>
    </div>
  );
}