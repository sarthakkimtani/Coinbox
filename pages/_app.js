import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Coinbox - Cryptocurrency Tracker</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Coinbox - Cryptocurrency Tracker" />
        <link rel="icon" href="/logo.png" type="image/icon type" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
