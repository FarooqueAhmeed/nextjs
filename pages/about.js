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
        <title>about</title>
        <meta name="description" content="This is my page description about" />
      </Head>
      <h1>About Us</h1>
      <button onClick={goToHome}>Go to Home Page</button>

    </div>
  ) ;
  }
  