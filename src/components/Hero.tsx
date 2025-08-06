// src/components/Hero.tsx
"use client";

import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4">
        I’m Shan, a <span className="text-blue-400">
          <TypeAnimation
            sequence={[
              'full-Stack Dev',
              2000, // Increased wait to 2s
              'Student',
              2000, // Increased wait to 2s
              'Competitive Coder',
              2000, // Increased wait to 2s
              'DSA Enthusiast',
              2000, // Increased wait to 2s
            ]}
            repeat={Infinity}
            speed={30} // Decreased speed for a slower typing effect
          />
        </span>
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mb-8">
        Full-stack engineer specializing in Next.js + Nest.js, building production-ready apps with AI integration.
      </p>

      <a href="#projects" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg">
        See My Work
      </a>
    </section>
  );
}