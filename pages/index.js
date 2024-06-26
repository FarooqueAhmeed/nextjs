// pages/index.js
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'


export default function Home() {

  return (
    <div>
      <Head>
        <title>Home page - My Next.js App</title>
        <meta name="description" content="Home page  Learn more Home page  and what we do at My Next.js App. Discover our mission and vision." />
        <link rel="canonical" href="https://nextjstested.netlify.app/" />
      </Head>
      <h1>Welcome to the Home Page</h1>
      <Link href="/about">Go to About Page</Link>

      <div className="container">
      <h2>Welcome to Next.js</h2>
      <Image src="/images/Sample.png" alt="Logo" width={200} height={200} />
    </div>

    </div>
  );
}
