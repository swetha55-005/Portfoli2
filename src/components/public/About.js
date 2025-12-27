import React from "react";

export const About = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
          About Me
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          I’m <span className="font-semibold text-indigo-600">Swetha</span>, a passionate and dedicated 
          Web Developer with a strong interest in front-end development. I love 
          transforming ideas into clean, responsive, and user-friendly interfaces.
          I’m currently learning <span className="font-semibold">JavaScript</span>, 
          <span className="font-semibold"> ReactJS</span>, and building real-time 
          projects to strengthen my skills.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          I am also interested in freelancing, especially in 
          <span className="font-semibold"> Data Entry</span> and beginner-friendly 
          online projects. I’m actively building my portfolio to document my 
          learning journey, progress, and hands-on experience.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          My Goals
        </h2>

        <ul className="space-y-3 text-lg text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-indigo-600 text-xl">•</span>
            Become a skilled full-stack developer
          </li>

          <li className="flex items-start gap-3">
            <span className="text-indigo-600 text-xl">•</span>
            Build more real-world, impactful projects
          </li>

          <li className="flex items-start gap-3">
            <span className="text-indigo-600 text-xl">•</span>
            Start freelancing with confidence
          </li>

          <li className="flex items-start gap-3">
            <span className="text-indigo-600 text-xl">•</span>
            Continuously improve my technical and professional skills
          </li>
        </ul>
      </div>
    </div>
  );
};
