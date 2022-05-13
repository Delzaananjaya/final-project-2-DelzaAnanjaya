import CartItem from './cart-item';

function CartBody({ carts }) {
  return (
    <section className="space-y-9">
      {carts.map((cart) => (
        <CartItem {...cart} key={cart.id} />
      ))}
    </section>
  );
}

export default CartBody;
