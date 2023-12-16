import isPropValid from "@emotion/is-prop-valid";
import { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "../styles/global";
import theme from "../styles/theme";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import localFont from 'next/font/local';


const gothamBlack = localFont({
  src: "../assets/gotham-black/Gotham Black Regular.ttf"
})


function App({ Component, pageProps }: AppProps) {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Next.js Boilerplate</title>
          <link
            rel="shortcut icon"
            href="/img/icon-192.png"
            type="image/x-icon"
          />
          <link rel="apple-touch-icon" href="/img/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta name="theme-color" content="#06092B" />
          <meta name="description" content="A simple boilerplate for next.js" />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} className={gothamBlack.className}/>
      </ThemeProvider>
    </StyleSheetManager>
  );
}

export default App;