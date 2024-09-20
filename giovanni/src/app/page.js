"use client";

import Head from 'next/head';
import Header from '../components/Header'
import './index.css';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Giovanni Sferrazza</title>
      </Head>
      <Header />
    </div>
  );
}