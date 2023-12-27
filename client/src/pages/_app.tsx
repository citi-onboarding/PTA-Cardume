import isPropValid from "@emotion/is-prop-valid";
import { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "../styles/global";
import theme from "../styles/theme";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import localFont from 'next/font/local';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const gothamBlack = localFont({
  src: "../assets/gotham-black/Gotham Black Regular.ttf"
})

const gothamMedium = localFont({
  src: "../assets/gotham-medium/Gotham Medium Regular.ttf"
})

function App({ Component, pageProps }: AppProps) {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ThemeProvider theme={theme}>
        <Head>
          <title> Monitore Sua Marca | Cardume</title>
          <link
            rel="shortcut icon"
            href="/img/vector.svg"
            type="image/x-icon"
          />
          <link rel="apple-touch-icon" href="/vector.svg" />
          <link rel="manifest" href="/manifest.json" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta name="theme-color" content="#06092B" />
          <meta name="description" content="Garanta a segurança de sua marca registrada para sempre!" />
        </Head>
        <GlobalStyles />
        <Component {...pageProps}/>
      </ThemeProvider>
    </StyleSheetManager>
  );
}

export default App;