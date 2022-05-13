import { Button } from '../ui';
import { categoriesList } from '../../utils/constant';

const PATH = 'products?category=';

function Categories() {
  return (
    <section className="mx-10 lg:mx-48">
      <h2 className="mb-5 text-4xl font-bold text-center md:text-5xl">
        Kategori
      </h2>
      <div className="flex justify-between overflow-hidden rounded-lg shadow-md">
        {categoriesList.map(({ icon, params }) => (
          <Button
            className="p-2.5 w-1/4 text-6xl md:flex text-dark md:capitalize md:flex-col md:items-center bg-white hover:bg-dark hover:text-white first-of-type:bg-dark first-of-type:text-white duration-200 ease-in-out"
            key={params}
            to={PATH + params}
          >
            {icon}
            <span className="hidden md:block md:text-lg lg:text-xl">
              {params}
            </span>
          </Button>
        ))}
      </div>
    </section>
  );
}

export default Categories;
