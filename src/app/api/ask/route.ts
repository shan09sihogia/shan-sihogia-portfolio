// src/app/api/ask/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { query } = await request.json();

  // Your resume content.
  const resumeContent = `
    Shan Sihogia
    Sonepat, India | +91 8877948691 | sihogia09shan@gmail.com
    LinkedIn: https://www.linkedin.com/in/shan-sihogia-30a708262
    GitHub: https://github.com/shan09sihogia

    EDUCATION:
    Indian Institute of Information Technology, B.Tech in Information Technology (Avg. GPA: 7.5)

    TECHNICAL SKILLS:
    Languages: C++, Java, JavaScript, Python, TypeScript
    Frontend: React.js, Next.js, TailwindCSS, grid, flexbox, Flutter
    Backend: Express.js, Node.js, Nest.js
    Databases: MongoDB, PostgreSQL
    DevOps: Docker, Kubernetes
    Data Science: Scikit-learn, Numpy, Pandas, OpenCV

    PROJECTS:
    Collaborative - Whiteboard:
      - Built a full-stack real-time application using React, Node.js, and Socket.IO for seamless client-server communication.
      - Developed a collaborative canvas that synchronizes drawing actions instantly across multiple users via WebSockets.
      - Engineered a clean and responsive UI with TailwindCSS and managed application state using core React hooks.

    Multi-Agent Backend System:
      - Built two intelligent backend agents (SupportAgent & DashboardAgent) using CrewAI for query handling and analytics.
      - Integrated MongoDB and external APIs to manage clients, orders, payments, and services.
      - Implemented natural language support for operations like order creation, status checks, and metric reports.
      - Added analytics like revenue tracking, enrollment trends, and attendance reports for dashboards.
      - Designed scalable API endpoints and integrated RAG techniques for enhanced retrieval.

    ACHIEVEMENTS:
    - Solved 400+ coding problems across multiple competitive programming platforms, including LeetCode, CodeForces, and CodeChef.
    - Qualified JEE Advanced 2022 (rank 12891).
  `;

  try {
    const prompt = `Based on the following resume content, answer the user's query. If the information is not explicitly in the resume, state that you cannot find the information.
    
    Resume Content:
    ${resumeContent}

    User Query: "${query}"
    `;

    const chatHistory = [];
    chatHistory.push({ role: "user", parts: [{ text: prompt }] });

    const payload = { contents: chatHistory };
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { answer: 'Gemini API key is missing. Please set it in your .env.local file.' },
        { status: 500 }
      );
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

    let response;
    let retries = 0;
    const maxRetries = 5;
    const baseDelay = 1000;

    while (retries < maxRetries) {
      try {
        response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (response.ok) {
          break;
        } else if (response.status === 429) {
          const delay = baseDelay * Math.pow(2, retries) + Math.random() * 1000;
          console.warn(`Rate limit hit. Retrying in ${delay / 1000} seconds...`);
          await new Promise(resolve => setTimeout(resolve, delay));
          retries++;
        } else {
          throw new Error(`API responded with status ${response.status}: ${response.statusText}`);
        }
      } catch (error) {
        if (retries === maxRetries - 1) {
          throw error;
        }
        const delay = baseDelay * Math.pow(2, retries) + Math.random() * 1000;
        console.warn(`Fetch error: ${error}. Retrying in ${delay / 1000} seconds...`);
        await new Promise(resolve => setTimeout(resolve, delay));
        retries++;
      }
    }

    if (!response || !response.ok) {
      throw new Error("Failed to get a successful response from the Gemini API after multiple retries.");
    }

    const result = await response.json();

    let answer = "I couldn't find a direct answer in the resume content provided.";

    if (result.candidates && result.candidates.length > 0 &&
        result.candidates[0].content && result.candidates[0].content.parts &&
        result.candidates[0].content.parts.length > 0) {
      answer = result.candidates[0].content.parts[0].text;
    } else {
      console.error("Unexpected Gemini API response structure:", result);
      answer = "I received an unexpected response from the AI. Please try a different query.";
    }

    return NextResponse.json({ answer });

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return NextResponse.json(
      { answer: "Sorry, I'm having trouble processing your request right now. Please try again later." },
      { status: 500 }
    );
  }
}