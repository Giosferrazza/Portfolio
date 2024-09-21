"use client";

import Head from 'next/head';
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer';


import './index.css';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Giovanni Sferrazza</title>
      </Head>
      <Header />
      <Main className="flex-grow" />
      <Footer />
    </div>
  );
}