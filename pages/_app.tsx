import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import cacheInit from '../lib/airtableCache'

const overrides = {
  colors: {
    brand: {
      primary: '#213c4c',
      secondary: '#169BD5',
    },
    text: {
      secondary: '#4a5568',
    },
  },
}
const theme = extendTheme(overrides)

function MyApp({ Component, pageProps }: AppProps) {
  cacheInit()

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
