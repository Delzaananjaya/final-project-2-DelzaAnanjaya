import Image from 'next/image';
import { useRouter } from 'next/router';
import { FaTrash } from 'react-icons/fa';
import { useProductContext } from '../../context/product-context';
import { REMOVE_CART, SET_ACTIONS, SET_MESSAGE } from '../../reducers/actions';
import { trimmingText } from '../../utils/helper';
import { Button } from '../ui';
import QuantityButton from './quantity-button';

function CartItem({ id, title, price, image, quantity, isFailed }) {
  const router = useRouter();
  const { dispatch } = useProductContext();

  const removeItem = () => {
    dispatch({ type: SET_MESSAGE, payload: 'Are you sure want to remove this item?' });
    dispatch({ type: SET_ACTIONS, payload: () => dispatch({ type: REMOVE_CART, payload: id }) });
  };

  const goToProduct = () => router.push(`/products/${id}`);

  return (
    <div>
      <article className="flex w-full p-3 shadow-lg bg-dark">
        <div
          className="w-3/12 bg-white cursor-pointer md:w-2/12 lg:w-1/12"
          role="button"
          onClick={goToProduct}
          tabIndex="0"
        >
          <div className="relative bg-white aspect-h-4 aspect-w-4">
            <Image
              alt={title}
              src={image}
              layout="fill"
              className="scale-90 md:scale-75"
              objectFit="contain"
              blurDataURL="https://via.placeholder.com/653x879.webp"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="w-9/12 pl-3.5 relative flex flex-col text-white md:flex-row md:items-center md:justify-between md:w-10/12 md:px-4 lg:w-11/12">
          <h3
            className="w-11/12 overflow-hidden text-lg font-bold leading-none md:text-base md:w-4/12 overflow-ellipsis"
            role="button"
            onClick={goToProduct}
          >
            {trimmingText(title, 40)}
          </h3>
          <p className="text-xl md:text-lg md:w-1/5 md:text-center after:content-['$']">{price}</p>
          <QuantityButton
            id={id}
            className="md:w-auto"
            value={quantity}
            dispatch={dispatch}
            dark
          />
          <Button
            className="!min-h-[35px] rounded-full p-1.5 bg-white !min-w-[35px] absolute top-0 right-0 md:static"
            eventHandler={removeItem}
          >
            <FaTrash className="text-dark" />
          </Button>
        </div>
      </article>
      <small className="text-lg font-semibold text-red-500">
        {isFailed && 'Sorry, quantity not met'}
      </small>
    </div>
  );
}

export default CartItem;
