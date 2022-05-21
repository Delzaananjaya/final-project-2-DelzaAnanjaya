/* eslint-disable linebreak-style */
import Head from 'next/head';
import { UpdateStock } from '../components/admin';
import { useProductContext } from '../context/product-context';
import { getData } from '../utils/helper';
import {
  Categories,
  Feedback,
  MainHeader,
  Partners,
  MainProduct,
  Services,
} from '../components/home';

export default function HomePage({ products }) {
  const { state } = useProductContext();
  const isAdmin = state?.user?.level === 'admin';

  return (
    <>
      <Head>
        <title>TOKO BIRU | Situs Jual Beli Online Terlengkap, Murah & Aman</title>
        <meta
          name="description"
          content="Toko Biru merupakan web e-commerce yang dibuat oleh Delza Ananjaya. Kami berusaha mendesign dengan tema modern dan menggunakan framework Next agar pengguna dapat merasakan pengalaman yang baik."
        />
      </Head>
      {isAdmin ? (
        <UpdateStock products={products} />
      ) : (
        <>
          <MainHeader />
          <main>
            <Categories />
            <MainProduct products={products} />
            <Services />
            <Partners />
            <Feedback />
          </main>
        </>
      )}
    </>
  );
}

export async function getStaticProps() {
  const urlParams = 'products';
  const products = await getData(urlParams);
  return { props: { products } };
}
