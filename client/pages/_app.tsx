import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import styled from '@emotion/styled';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </QueryClientProvider>
  );
}

const Wrapper = styled.div`
  margin: 100px auto;
  max-width: 500px;
`;
