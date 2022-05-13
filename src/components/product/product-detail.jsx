import Link from 'next/link';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import { useToasts } from 'react-toast-notifications';
import { GiShoppingCart } from 'react-icons/gi';
import { QuantityButton } from '../cart';
import { Button, RatingProduct } from '../ui';
import { useProductContext } from '../../context/product-context';
import { ADD_CART } from '../../reducers/actions';
import { messageNotifications } from '../../utils/constant';

function DetailProduct({
  id,
  title,
  image,
  category,
  rating,
  description,
  price,
}) {
  const { addToast } = useToasts();
  const router = useRouter();
  const { state, dispatch } = useProductContext();
  const inputWrapper = useRef(null);
  const { CART_FAILED, CART_SUCCESS, LOGIN_FIRST } = messageNotifications;
  const stock = state.stock[id - 1];
  const stockLeft = `Stock: ${stock} left`;

  const isStockAvailable = (product, quantity) => {
    if (stock - quantity < 0) {
      addToast(CART_FAILED.message, CART_FAILED.status);
    } else {
      dispatch({ type: ADD_CART, payload: { cart: product, quantity } });
      addToast(CART_SUCCESS.message, CART_SUCCESS.status);
    }
  };

  const addToCart = () => {
    if (state?.user?.token) {
      const quantity = parseInt(inputWrapper.current.value, 10);
      const product = { id, title, price, image, category, quantity };
      isStockAvailable(product, quantity);
    } else {
      addToast(LOGIN_FIRST.message, LOGIN_FIRST.status);
      router.push('/login');
    }
  };

  return (
    <section className="py-5 lg:w-3/5">
      <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
      <div className="divide-gray-500 space-x-3 md:space-x-4 flex divide-x mt-1.5 group">
        <RatingProduct rate={rating.rate} />
        <Link href={`/products?category=${category}`}>
          <a className="pl-3 text-lg font-semibold capitalize md:pl-4 md:text-xl group-hover:underline">
            {category}
          </a>
        </Link>
      </div>
      <p className="mt-3 mb-5 text-gray-500 md:text-lg">{description}</p>
      <small className="text-base md:text-lg">Harga:</small>
      <h3 className="-mt-1.5 text-2xl font-bold lining-nums tabular-nums md:text-3xl lg:mt-auto after:content-['$']">
        {price}
      </h3>
      <div className="flex items-center w-full my-3">
        <QuantityButton
          className="md:w-3/12 lg:w-3/12"
          container={inputWrapper}
        />
        <p className="font-semibold underline">{stockLeft}</p>
      </div>
      <Button
        className="w-full py-2.5 px-12 mt-3 text-xl hover:text-white rounded-sm hover:bg-dark border-2 border-dark flex items-center md:max-w-xs md:px-20 duration-300 ease-in-out"
        text="Add to Cart"
        eventHandler={addToCart}
      >
        <GiShoppingCart className="text-3xl" />
      </Button>
    </section>
  );
}

export default DetailProduct;
