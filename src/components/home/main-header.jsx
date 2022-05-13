import { Button } from '../ui';

function MainHeader() {
  return (
    <header className="px-10 py-16 my-5 bg-white md:bg-hero md:bg-no-repeat md:bg-right-top lg:py-20">
      <h1 className="text-6xl text-blue-500 font-bold leading-8 uppercase md:text-8xl">
        TOKO BIRU
      </h1>
      <p className="w-8/12 mt-2.5 md:text-xl mb-10 leading-normal text-gray-500 lg:text-2xl">
        Situs Jual Beli Online Terlengkap, Murah & Aman
      </p>
      <Button
        className="w-full text-lg duration-300 ease-in-out border-2 rounded-sm text-dark border-dark md:w-1/4 lg:max-w-lg hover:text-white hover:bg-dark"
        to="products"
        text="Belanja Sekarang"
      />
    </header>
  );
}

export default MainHeader;
