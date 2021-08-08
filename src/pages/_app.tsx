
import Header from 'components/Header'
import type { AppProps } from 'next/app'
import { GlobalStyle } from 'styles/_global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
