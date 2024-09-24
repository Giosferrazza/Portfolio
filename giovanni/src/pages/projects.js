import Head from 'next/head';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import '../styles/globals.css';
import '../styles/project.module.css';

import React from 'react';

function Projects() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Head>
        <title>Giovanni Sferrazza</title>
      </Head>
      <Header />
      <Footer />
    </div>
  );
}

export default Projects;