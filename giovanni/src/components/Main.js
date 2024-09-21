import React, { useEffect } from 'react';
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';

function Main() {

  return (
    <main className="flex items-start justify-center min-h-screen p-4 font-mono">
      <section className="flex flex-col md:flex-row items-center mt-20">
        <img
          src="/me.jpg"
          alt="Profile"
          className="w-75 h-80 rounded-lg mx-auto mb-4 md:mb-0 md:mr-8 mt-40"
        />
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">Hey, I'm Giovanni.</h2>
          <p className="text-lg mb-4">
            A passionate developer with experience in building web applications.
          </p>
          <div className="flex flex-col items-center md:items-start space-y-4">
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:text-blue-700">
              <FaLinkedin size={30} />
              <span className="ml-2 text-white">LinkedIn</span>
            </a>
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-800 hover:text-gray-600">
              <FaGithub size={30} />
              <span className="ml-2 text-white">GitHub</span>
            </a>
            <a href="/path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-800 hover:text-gray-600">
              <FaFileAlt size={30} />
              <span className="ml-2 text-white">Resume</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;