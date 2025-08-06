// src/components/Projects.tsx
import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects'; // Correctly import the data

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">My Standout Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}