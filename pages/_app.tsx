import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import Head from 'next/head';
import 'styles/global.scss';
import Container from 'components/layout/Container';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <Head>
          <title>오늘의 바다</title>
        </Head>
        <Container>
          <Component {...pageProps} />
        </Container>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
