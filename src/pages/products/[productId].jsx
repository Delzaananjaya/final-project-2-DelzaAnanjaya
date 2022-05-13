import Head from 'next/head';
import { DetailProduct, ProductHeader } from '../../components/product';
import { Breadcrumb } from '../../components/ui';
import { getData } from '../../utils/helper';

export default function DetailProductPage({ product }) {
  const { title, description, category } = product;
  const headerTitle = `${title} | TOKO IJO.`;

  return (
    <>
      <Head>
        <title>{headerTitle}</title>
        <meta name="description" content={description} />
      </Head>
      <main className="p-10">
        <Breadcrumb routes={['products', category]} />
        <div className="relative lg:flex lg:space-x-7">
          <ProductHeader product={product} />
          <DetailProduct {...product} />
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const products = await getData('products');

  const paths = products.map((product) => ({
    params: { productId: product.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { productId } }) {
  const product = await getData(`products/${productId}`);

  return { props: { product } };
}
