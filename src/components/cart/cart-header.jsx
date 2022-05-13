function CartHeader() {
  return (
    <header className="items-center hidden p-3 text-lg font-bold md:flex text-dark">
      <h2 className="w-9/12 lg:w-11/12">Product</h2>
      <h2 className="w-1/3 pl-16 lg:pl-20">Price</h2>
      <h2 className="w-1/2 pl-8 lg:pl-24">Quantity</h2>
    </header>
  );
}

export default CartHeader;
