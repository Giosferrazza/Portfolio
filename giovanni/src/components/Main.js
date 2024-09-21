"use client";

import { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import GitHub icon
import { HiDocument } from 'react-icons/hi'; // Import resume icon
import styles from '../styles/Main.module.css'; // Import CSS module

export default function MainContent() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 300); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <section className="flex flex-col md:flex-row items-center mt-20 mr-48">
        <img
          src="/me.jpg"
          alt="Profile"
          className="w-75 h-80 rounded-lg mx-auto mb-4 md:mb-0 md:mr-8 mt-40"
        />
        <div className="text-center md:text-left">
          <h2 className={`text-2xl font-bold mb-4 mt-11 ${showText ? styles.typing : ''}`}>
            Hey, I'm Giovanni.
          </h2>
          <p className="text-lg mb-4">
            A passionate developer with experience in building various applications.
          </p>
          <div className="flex flex-col items-center md:items-start space-y-4">
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:text-blue-500 ">
              <FaLinkedin size={30} />Linkedin
            </a>
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-800 hover:text-gray-600">
              <FaGithub size={30} />
            </a>
            <a href="/path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-800 hover:text-gray-700">
              <HiDocument size={30} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}