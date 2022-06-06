import Head from 'next/head';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="mx-auto mt-10 max-w-6xl ">
      <Head>
        <title>Prem Sagar</title>
        <meta
          name="portfolio"
          content="Portfolio website which showcases all the projects and skills"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="my-14">
        <NavBar />
      </section>
      <section className="my-14">
        <Hero />
      </section>
      <section className="my-14">
        <Projects />
      </section>
      <section className="my-14">
        <Technologies />
      </section>
      <section className="my-14">
        <Footer />
      </section>
    </div>
  );
}
