import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactMe from '../components/ContactMe';
import '../styles/globals.css';
import '../styles/project.module.css';

import React from 'react';

function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Head>
        <title>Giovanni Sferrazza</title>
      </Head>
      <Header />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default Contact;