import '#scss/index.scss';
import '#scss/mdx.scss';
import '#scss/code.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
