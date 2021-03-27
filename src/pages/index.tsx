import Main from '../components/Main'
import Header from '../components/Header'

import { ThemeProvider } from 'styled-components'
import colorsThem from '../styles/thems/thems'

export default function Home() {
  return (
    <>
      <ThemeProvider theme={colorsThem}>
        <Header />
        <Main />
      </ThemeProvider>
    </>
  )
}
