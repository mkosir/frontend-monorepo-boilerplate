import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline, Box, Typography } from '@mui/material';
import { theme } from 'config-mui';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import { Version } from 'ui-mui';
import { createEmotionCache } from 'utils-mui';
import { getVersionInfo } from 'utils-version';

const clientSideEmotionCache = createEmotionCache();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Monorepo Boilerplate - Website (Nextjs/Material UI)</title>
        <meta name="description" content="Monorepo boilerplate - Website (Material UI)." />
        <meta name="version" content={getVersionInfo()} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CacheProvider value={clientSideEmotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box textAlign="center" mt={3} mb={5}>
            <Typography variant="h6">Monorepo Boilerplate - Website (Nextjs/Material UI)</Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
            </Box>
            <Version version={getVersionInfo()} />
          </Box>
          {<Component {...pageProps} />}
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default App;
