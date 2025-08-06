// src/components/TechStack.tsx
import React from 'react';
import { techStackData } from '@/data/techStack';

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-white mb-12">My Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {techStackData.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center p-4 rounded-lg transition-transform transform hover:scale-110 duration-300"
            >
              <tech.icon size={50} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
              <span className="mt-2 text-sm text-gray-400 group-hover:text-white transition-colors">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}