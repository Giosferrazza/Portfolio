"use client";

import Head from 'next/head';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import '../styles/globals.css';  

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Giovanni Sferrazza</title>
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}