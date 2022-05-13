import ProductImage from './product-image';

function ProductHeader({ product }) {
  return (
    <header className="lg:w-2/5">
      <ProductImage
        {...product}
        className="relative bg-white shadow h-72 md:h-96"
        priority
      />
      <div className="relative flex mt-4 space-x-4">
        <ProductImage
          {...product}
          className="relative w-full h-24 bg-white shadow md:h-48"
        />
        <ProductImage
          {...product}
          className="relative w-full h-24 bg-white shadow md:h-48"
        />
        <ProductImage
          {...product}
          className="relative w-full h-24 bg-white shadow md:h-48"
        />
      </div>
    </header>
  );
}

export default ProductHeader;
