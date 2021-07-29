/*Import next Components */
import Head from 'next/head';

/*Import styles */
import '../styles/index.css'

function MyApp({ Component, pageProps }) {


  return(
    <div>
      <Head>
        <title>Space-Y</title>
        <meta name="description" content="Space Y, a YEMA challenge" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet"></link>

        <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon-32x32.png"></link>
      </Head>
      <Component {...pageProps} />
    </div>
  )

}

export default MyApp
