// src/components/Contact.tsx
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-900">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Get in Touch</h2>
        <div className="flex flex-col md:flex-row justify-center gap-12">

          {/* Social Links and Resume Download */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold text-white mb-4">Find Me Online</h3>
            <div className="flex gap-6 mb-8">
              <a 
                href="https://www.linkedin.com/in/shan-sihogia-30a708262" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={48} />
              </a>
              <a 
                href="https://github.com/shan09sihogia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub size={48} />
              </a>
            </div>

            <a 
              href="/My_Resume_2.pdf" // Make sure this path matches the name of your resume file in the public folder
              download 
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Download Resume
            </a>
          </div>

          {/* Contact Form Placeholder */}
          <div className="flex flex-col items-center w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Form</h3>
            <form className="w-full max-w-sm flex flex-col gap-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="p-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="p-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea 
                placeholder="Your message..." 
                rows={4} 
                className="p-3 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit" 
                className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}