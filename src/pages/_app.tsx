import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from '../styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DevFinance$</title>
        <link rel="shortcut icon" href="/img/money.ico" />
        <link rel="apple touch-icon" href="/img/money.ico" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
