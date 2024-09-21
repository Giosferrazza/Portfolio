"use client";

import Head from 'next/head';
import Header from '../components/Header'
import Main from '../components/Main'

import './index.css';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Giovanni Sferrazza</title>
      </Head>
      <Header />
      <Main />
    </div>
  );
}