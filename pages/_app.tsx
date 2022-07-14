import '../styles/globals.css'
import { AppProps } from 'next/app'

// apollo clientをプロジェクト内で使用できるようにする
import { ApolloProvider } from '@apollo/client'
import { initializeApollo } from '../lib/apolloClient'

function MyApp({ Component, pageProps }: AppProps) {
  const client = initializeApollo()

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
