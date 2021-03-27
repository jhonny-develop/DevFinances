import { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/global'

import colorsThem from '../styles/thems/thems'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={colorsThem}>
      <Head>
        <title>DevFinance$</title>
        <link rel="shortcut icon" href="/img/money.ico" />
        <link rel="apple touch-icon" href="/img/money.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,700;1,100;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
