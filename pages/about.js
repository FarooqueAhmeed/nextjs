// pages/about.js
import Head from 'next/head'
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();

  const goToHome = () => {
    router.push('/');
  };

    return (
    
    <div>
      <Head>
        <title>About Us - My Next.js App</title>
        <meta name="description" content="About Us Learn more about us and what we do at My Next.js App. Discover our mission and vision." />
        <link rel="canonical" href="https://nextjstested.netlify.app/" />
      </Head>
      <h1>About Us</h1>
      <button onClick={goToHome}>Go to Home Page</button>

    </div>
  ) ;
  }
  