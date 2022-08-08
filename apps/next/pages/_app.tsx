import React from 'react'
import Head from 'next/head'
import { Provider } from 'app/provider'
import { Header } from 'app/components'

import type { SolitoAppProps } from 'solito'
import 'raf/polyfill'

function MyApp({ Component, pageProps }: SolitoAppProps) {
  return (
    <>
      <Head>
        <title>Solito Example App</title>
        <meta
          name="description"
          content="Expo + Next.js with Solito. By Fernando Rojo."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
