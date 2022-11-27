import '../styles/globals.css'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
  <>
        <Head>
          <title>SeedtoScale clone</title>
          <meta name="description" content="Cloned website" />
          <link rel="icon" href="/sts.png" />
        </Head>

  <Component {...pageProps} />
  </>
  )
}

export default MyApp
