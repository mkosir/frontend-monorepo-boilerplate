import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Version } from 'ui-tailwind';
import { getVersionInfo } from 'utils-version';

import 'common/styles/global.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Monorepo Boilerplate - App (Tailwind)</title>
        <meta name="description" content="Monorepo Boilerplate - App (Tailwind)." />
        <meta name="version" content={getVersionInfo()} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mb-5 mt-3 text-center">
        <div className="text-lg font-medium">Monorepo Boilerplate - App (Tailwind)</div>
        <Version version={getVersionInfo()} />
      </div>
      {<Component {...pageProps} />}
    </>
  );
};

export default App;
