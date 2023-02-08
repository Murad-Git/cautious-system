import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import '@/styles/globals.scss';

import { Layout } from '@/components/ui/Layout';

import { store } from '@/store/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
