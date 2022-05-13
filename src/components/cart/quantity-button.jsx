import { useState } from 'react';
import { TOGGLE_CART } from '../../reducers/actions';
import { Button } from '../ui';

function QuantityButton({
  id,
  className,
  container,
  dispatch,
  value = 1,
  dark,
}) {
  const theme = dark ? 'text-dark bg-white' : 'text-white bg-dark';
  const border = dark ? 'border-l-2 border-r-2' : 'border-t-2 border-b-2';

  const [quantity, setQuantity] = useState(value);

  const quantityToggler = (event) => {
    const symbol = event.target.innerText;

    const cartCounter = (fx) => {
      if (dispatch) {
        dispatch({
          type: TOGGLE_CART,
          payload: { id, quantity: fx },
        });
      }
    };

    setQuantity((qty) => {
      if (symbol.includes('+')) {
        cartCounter(qty + 1);
        return qty + 1;
      }
      if (qty <= 1) {
        return qty;
      }
      cartCounter(qty - 1);
      return qty - 1;
    });
  };

  return (
    <div className={`flex w-1/2 ${className}`}>
      <Button
        className={`!max-w-[52px] text-3xl ${theme}`}
        text="-"
        eventHandler={quantityToggler}
      />
      <input
        className={`!max-w-[55px] text-xl font-bold text-dark text-center self-stretch border-dark lg:pl-3 ${border}`}
        value={quantity}
        type="number"
        min={0}
        ref={container}
        readOnly
      />
      <Button
        className={`!max-w-[52px] text-3xl ${theme}`}
        text="+"
        eventHandler={quantityToggler}
      />
    </div>
  );
}

export default QuantityButton;
