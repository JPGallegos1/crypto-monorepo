import type { SolitoAppProps } from 'solito'

import React from 'react'
import Head from 'next/head'

import { Provider } from 'app/provider'
import { Header } from 'app/components'

import 'raf/polyfill'

function MyApp({ Component, pageProps }: SolitoAppProps) {
  return (
    <>
      <Head>
        <title>NE Crypto</title>
        <meta name="description" content="NE Crypto" />
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
