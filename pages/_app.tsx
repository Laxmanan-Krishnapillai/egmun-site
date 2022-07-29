import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { UserProvider } from '../lib/userContext';
import { SSRProvider } from 'react-aria';
import { Layout } from '../components/layouts/main';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <SSRProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SSRProvider>
    </UserProvider>
  );
}

export default MyApp;
