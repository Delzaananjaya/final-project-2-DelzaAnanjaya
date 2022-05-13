import { FiArrowRight } from 'react-icons/fi';
import { Button, CardItem } from '../ui';

function MainProduct({ products }) {
  const jewelryProducts = products.filter((product) => product.category === 'jewelery');

  return (
    <>
      <div className="mx-10">
        <h2 className="my-5 text-4xl font-bold text-center md:text-5xl">
          Produk
        </h2>
        <section className="grid gap-y-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-4">
          {jewelryProducts.map((item) => (
            <CardItem {...item} key={item.id} />
          ))}
        </section>
      </div>
      <Button
        className="px-8 my-12 py-0.5 mx-auto hover:text-white rounded-sm border-2 border-dark hover:bg-dark flex items-center duration-300 ease-in-out"
        text="Semua Produk"
        to="products"
      >
        <FiArrowRight className="text-2xl" />
      </Button>
    </>
  );
}

export default MainProduct;
