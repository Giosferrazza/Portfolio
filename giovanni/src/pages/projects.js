import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Project from '../components/Project';
import '../styles/globals.css';
import '../styles/project.module.css';
import '../styles/project.module.css';

import React from 'react';

function Projects() {
  const projectData = [
    {
      title: 'Mechcanical Horse',
      description: 'Here is a mechanical horse project',
      imageUrl: '/images/mech.jpg',
    },
    {
      title: 'Diagnostic tool',
      description: 'This is an exhibit piece made for Napa Cars',
      imageUrl: '/images/diag.jpg',
    },
    {
      title: 'Blackjack Game',
      description: 'I made a blackjack project for my cs final',
      imageUrl: '/images/bj.jpg',
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Head>
        <title>Giovanni Sferrazza</title>
      </Head>
      <Header />
      <main className="flex-grow p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Projects;