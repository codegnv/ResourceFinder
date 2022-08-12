import { css, Global } from '@emotion/react'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { ThemeProvider } from '@emotion/react'
import { Provider } from 'react-redux'
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
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Pontano+Sans&display=swap');

          html {
            font-family: 'Inter';
            font-size: 14px;
            line-height: 22px;
            color: ${theme.colors.base};
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
        `}
      />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default MyApp
