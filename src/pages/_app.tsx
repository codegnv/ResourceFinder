import { css, Global, ThemeProvider } from '@emotion/react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { Header } from '../components/Header'
import Layout from '../components/Layout'
import { store } from '../services/store'

export const theme = {
  colors: {
    primary: '#676cc8',
    secondary: '#1dc2ae',
    base: '#0f191c',
    baseLight: '#ffffff',
    baseDark: '#333333',
    coolMint: '#E0F7F6',
    ltGray: '#F1F3F6',
    gray: '#707070',
  },
}

// TODO: Add fonts to theme and provide fallbacks
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Pontano+Sans&display=swap');

          body,
          html {
            font-family: 'Inter';
            font-size: 14px;
            line-height: 22px;
            color: ${theme.colors.base};
            margin: 0;
          }

          *,
          *::after,
          *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
          }

          h1,
          h2,
          h3,
          h4 {
            font-family: 'Pontano Sans';
            font-weight: 400;
          }

          h2 {
            font-size: 20px;
            line-height: 24px;
          }

          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
          }
        `}
      />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Header />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </>
  )
}
