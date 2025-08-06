// src/components/AboutMeInteractive.tsx
"use client";

import React, { useState } from 'react';

export default function AboutMeInteractive() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();
      setResponse(data.answer);
    } catch (error) {
      setResponse("Sorry, I'm having trouble connecting to the agent. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Submit on Enter key press without the Shift key
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent);
    }
  };

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-white mb-8">Ask Me Anything</h2>
        <p className="text-center text-gray-400 mb-8">
          This feature is powered by my Multi-Agent Backend System, which processes queries about my resume.
        </p>
        
        {/* The AI response is now placed at the top */}
        {response && (
          <div className="mt-8 p-6 rounded-lg bg-gray-700 text-white mb-8">
            <h3 className="font-bold text-lg mb-2">AI Response:</h3>
            <p>{response}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <textarea
            className="w-full p-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="e.g., What technologies did you use for the Collaborative Whiteboard project?"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 hover:bg-blue-700 disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            {loading ? "Thinking..." : "Get Answer"}
          </button>
        </form>
      </div>
    </section>
  );
}