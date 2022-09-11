import type { AppProps } from 'next/app';
import Head from 'next/head';

import 'ui-tailwind/src/styles.css';

// import { Breadcrumbs, Progress } from 'common/components';
// import { usePageLoading } from 'common/utils/usePageLoading';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Turborepo Boilerplate - App Tailwind</title>
        <meta name="description" content="Minimal Turborepo boilerplate." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ textAlign: 'center', margin: '15px 0 30px' }}>
        <div style={{ fontSize: '22px', fontWeight: 'bold' }}>Turborepo Boilerplate - App Tailwind</div>
      </div>
      {/* <div style={{ display: "flex" }}>
        <Breadcrumbs />
      </div> */}
      {<Component {...pageProps} />}
    </>
  );
};

export default App;
