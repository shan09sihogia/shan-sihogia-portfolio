// src/components/Achievements.tsx
import React from 'react';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 bg-gray-800">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Achievements & DSA</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-400">
          <div className="p-6 rounded-lg bg-gray-700 shadow-lg w-full">
            <h3 className="text-2xl font-bold text-white mb-2">Competitive Programming</h3>
            <p className="text-lg">Solved <strong className="text-blue-500">400+</strong> coding problems</p>
            <p className="text-sm">across LeetCode, CodeForces, and CodeChef.</p>
          </div>
          <div className="p-6 rounded-lg bg-gray-700 shadow-lg w-full">
            <h3 className="text-2xl font-bold text-white mb-2">JEE Advanced</h3>
            <p className="text-lg">Qualified JEE Advanced 2022</p>
            <p className="text-sm">with a rank of 12891.</p>
          </div>
        </div>
      </div>
    </section>
  );
}