import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { BiSad } from 'react-icons/bi';
import { useProductContext } from '../../context/product-context';
import { CardItem } from '../ui';

function ProductList() {
  const { state } = useProductContext();

  if (state.products === '') {
    return (
      <>
        <BiSad className="mx-auto mt-10 text-9xl" />
        <p className="text-3xl text-center lg:text-4xl">
          There are no items you search for.
        </p>
      </>
    );
  }

  if (state.products.length === 0) {
    return (
      <AiOutlineLoading3Quarters className="mx-auto mt-10 animate-spin text-9xl" />
    );
  }

  return (
    <section className="mt-3 space-y-7 md:grid md:grid-cols-2 md:space-y-0 md:gap-2 lg:grid-cols-4 lg:gap-4">
      {state.products.map((item) => (
        <CardItem {...item} key={item.id} />
      ))}
    </section>
  );
}

export default ProductList;
