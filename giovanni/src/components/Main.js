import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';


function Main() {
  return (
    <main className="flex items-start justify-center min-h-screen p-4 font-mono">
      <section className="mt-80">
        <h2 className="text-2xl font-bold mb-4">Hey, I'm Giovanni.</h2>
        <p className="text-lg">
          A passionate developer with experience in building web applications.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
            <FaGithub size={30} />
          </a>
        </div>
      </section>
    </main>
  );
}

export default Main;