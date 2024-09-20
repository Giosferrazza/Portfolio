"use client";

import Head from 'next/head';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Giovanni Sferrazza</title>
      </Head>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}