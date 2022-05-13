function CartInfo({ text, amount, header }) {
  return (
    <h3 className={`${header && 'font-bold text-lg'} flex justify-between`}>
      <span className="w-1/3">{text}</span>
      <span className="w-1/3 text-center">:</span>
      <span className="w-1/3 text-right tabular-nums">{`$${amount}`}</span>
    </h3>
  );
}

export default CartInfo;
