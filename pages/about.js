// pages/about.js
import Head from 'next/head'
import Link from 'next/link';


export default function About() {

    return (
    
    <div>
      <Head>
        <title>About Us - My Next.js App</title>
        <meta name="description" content="About Us Learn more about us and what we do at My Next.js App. Discover our mission and vision." />
        <link rel="canonical" href="https://nextjstested.netlify.app/about" />
      </Head>
      <h1>About Us</h1>
      <Link  href="/">Go to Home Page</Link>

    </div>
  ) ;
  }
  