import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import '@/styles/globals.css';
import { Montserrat } from "next/font/google";
import Head from 'next/head';

const monserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <main className={'${monserrat.varible} font-mont bg-light dark:bg-dark w-full min-h-screen'}> {/* Removed redundant font-mont class (optional) */}
        <NavBar />
        <Component {...pageProps} />
        <Footer/>
      </main>
    </>
  );
}
