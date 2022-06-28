import { css, Global } from '@emotion/react'
import emotionReset from 'emotion-reset'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { ThemeProvider } from '@emotion/react'

const theme = {
  colors: {
    primary: '#1dc2ae',
    secondary: '#676cc8',
    base: '#0f191c',
    baseLight: '#ffffff',
    baseDark: '#333333',
    coolMint: '#E0F7F6',
    ltGray: '#F1F3F6',
    gray: '#707070',
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Inter&family=Pontano+Sans&display=swap');
          ${emotionReset}

          html {
            font-family: 'Inter';
            color: ${theme.colors.base};
          }

          *,
          *::after,
          *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }
        `}
      />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
