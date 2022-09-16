import type { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Turborepo Boilerplate - App MUI</title>
        <meta name="description" content="Minimal Turborepo boilerplate." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ textAlign: 'center', margin: '15px 0 30px' }}>
        <div style={{ fontSize: '22px', fontWeight: 'bold' }}>Turborepo Boilerplate - App MUI</div>
      </div>
      {<Component {...pageProps} />}
    </>
  );
};

export default App;
