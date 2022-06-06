import Head from 'next/head';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <Head>
        <title>Prem Sagar</title>
        <meta
          name="portfolio"
          content="Portfolio website which showcases all the projects and skills"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <NavBar />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Technologies />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
