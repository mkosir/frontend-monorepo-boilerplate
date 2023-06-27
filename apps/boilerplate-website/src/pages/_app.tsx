import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Version } from 'ui-tailwind';
import { getVersionInfo } from 'utils-version';

// import 'ui-tailwind/index.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Turborepo Boilerplate - Website</title>
        <meta name="description" content="Turborepo boilerplate." />
        <meta name="version" content={getVersionInfo()} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mb-5 mt-3 text-center">
        <div className="text-lg font-medium">Turborepo Boilerplate - Website</div>
        <Version version={getVersionInfo()} />
      </div>
      {<Component {...pageProps} />}
    </>
  );
};

export default App;
