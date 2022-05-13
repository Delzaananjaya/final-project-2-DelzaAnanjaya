import { useRouter } from 'next/router';
import { useProductContext } from '../../context/product-context';
import { CHECKOUT, SET_ACTIONS, SET_MESSAGE } from '../../reducers/actions';
import { Button } from '../ui';
import CartInfo from './cart-info';

function CartFooter() {
  const router = useRouter();
  const { state: { price, carts }, dispatch } = useProductContext();
  const totalPrice = (price + carts.length).toFixed(2);

  const checkout = () => {
    dispatch({ type: SET_MESSAGE, payload: 'Do you want to continue?' });
    dispatch({ type: SET_ACTIONS, payload: actions });
  };

  const actions = () => {
    dispatch({ type: CHECKOUT });
    router.replace('/');
  };

  return (
    <section className="p-5 bg-white shadow-md mt-9 md:mx-16 lg:mx-0 lg:w-4/12 lg:ml-auto">
      <CartInfo text="Subtotal" amount={price.toFixed(2)} />
      <CartInfo text="Shipping Fee" amount={carts.length} />
      <hr className="mt-1 mb-3 border border-black border-opacity-70" />
      <CartInfo text="Total Order" amount={totalPrice} header />
      <div className="flex justify-end space-x-5 mt-7">
        <Button
          className="px-5 duration-300 ease-in-out border-2 border-dark hover:bg-dark hover:text-white"
          text="Cancel"
        />
        <Button
          className="px-5 text-white duration-300 ease-in-out bg-dark hover:shadow-md"
          text="Checkout"
          eventHandler={checkout}
        />
      </div>
    </section>
  );
}

export default CartFooter;
