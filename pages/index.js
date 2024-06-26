// pages/index.js
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head'


export default function Home() {
  const router = useRouter();

  const goToAbout = () => {
    router.push('/about');
  };

  return (
    <div>
       <Head>
        <title>My page title home</title>
        <meta name="description" content="This is my page description" />
      </Head>
      <h1>Welcome to the Home Page</h1>
      <button onClick={goToAbout}>Go to About Page</button>

      <div className="container">
      <h1>Welcome to Next.js</h1>
      <Image src="/images/Sample.png" alt="Logo" width={200} height={200} />
    </div>

    </div>
  );
}
