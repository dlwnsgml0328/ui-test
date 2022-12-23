import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import ThemeProvider from '@eazelui/system.theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider disableBaseline={false}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
