import ItemList from './item-list';

function UpdateStock({ products }) {
  return (
    <section className="px-5 py-10 md:px-14 lg:px-20">
      <h1 className="p-5 text-3xl font-bold text-center">Product</h1>
      <table className="w-full text-center shadow-xl">
        <thead className="text-white bg-dark">
          <tr className="md:text-xl lg:text-2xl">
            <th className="py-3 md:py-5">Product</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ItemList {...product} key={product.id} />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default UpdateStock;
