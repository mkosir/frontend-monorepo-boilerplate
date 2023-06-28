import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline, Box, Typography } from '@mui/material';
import { theme } from 'config-mui';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Version } from 'ui-mui';
import { createEmotionCache } from 'utils-mui';
import { getVersionInfo } from 'utils-version';

const clientSideEmotionCache = createEmotionCache();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Turborepo Boilerplate - App</title>
        <meta name="description" content="Turborepo boilerplate." />
        <meta name="version" content={getVersionInfo()} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CacheProvider value={clientSideEmotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box textAlign="center" mt={3} mb={5}>
            <Typography variant="title1">Turborepo Boilerplate - App (Material UI)</Typography>
            <Version version={getVersionInfo()} />
          </Box>
          {<Component {...pageProps} />}
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default App;
