import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';
import { CartBody, CartFooter, CartHeader } from '../components/cart';
import { Breadcrumb, Modal } from '../components/ui';
import { useProductContext } from '../context/product-context';
import { messageNotifications } from '../utils/constant';

export default function CheckoutPage() {
  const { state } = useProductContext();
  const router = useRouter();
  const { addToast } = useToasts();
  const { LOGIN_FIRST } = messageNotifications;

  const hasUserLoggedIn = useCallback(() => {
    if (!state?.user?.token) {
      router.push('/login');
      addToast(LOGIN_FIRST.message, LOGIN_FIRST.status);
    }
  }, [LOGIN_FIRST.message, LOGIN_FIRST.status, addToast, router, state?.user?.token]);

  useEffect(() => hasUserLoggedIn, [hasUserLoggedIn]);

  const cartNotFound = (
    <p className="min-h-screen text-lg text-center">
      You haven&apos;t selected an item. Go to
      {' '}
      <span className="font-semibold underline">
        <Link href="/products">Products</Link>
      </span>
    </p>
  );

  return (
    <>
      <Head>
        <title>Checkout | TOKO BIRU</title>
      </Head>
      <main className="p-10">
        <Breadcrumb routes={['cart']} />
        {state.carts.length === 0 ? (
          cartNotFound
        ) : (
          <>
            <CartHeader />
            <CartBody carts={state.carts} />
            <CartFooter />
          </>
        )}
        <Modal />
      </main>
    </>
  );
}
