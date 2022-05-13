import { useEffect } from 'react';
import { CALCULATE_CART } from '../../reducers/actions';

function Motification({ total, dispatch }) {
  useEffect(() => {
    dispatch({ type: CALCULATE_CART });
  }, [total, dispatch]);

  const spanStyle = `${total === 0 ? 'hidden' : 'inline-block'} absolute text-sm tracking-[-.08em] tabular-nums rounded-full w-[20px] h-[20px] text-center bg-white text-dark font-bold top-0 -right-1 m-auto`;

  return <span className={spanStyle}>{total}</span>;
}

export default Motification;
