/* eslint-disable linebreak-style */
import '../styles/globals.css';
import NProgress from 'nprogress';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ToastProvider } from 'react-toast-notifications';
import { useEffect } from 'react';
import { Footer, Navbar } from '../components/layout';
import { ProductProvider } from '../context/product-context';
import { storePathValues } from '../utils/helper';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleStop = () => NProgress.done();

    NProgress.configure({ showSpinner: false });
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  useEffect(() => storePathValues, [router.asPath]);

  return (
    <ToastProvider
      autoDismiss
      autoDismissTimeout={3000}
      placement="bottom-right"
    >
      <ProductProvider>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          />
        </Head>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ProductProvider>
    </ToastProvider>
  );
}

export default MyApp;
