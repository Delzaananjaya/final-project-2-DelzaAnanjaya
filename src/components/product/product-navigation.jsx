import { GiSettingsKnobs } from 'react-icons/gi';
import SortProduct from './sort-product';
import { Button } from '../ui';

function ProductNavigation({ eventHandler }) {
  return (
    <div className="flex items-center justify-between !mt-2 md:inline-block md:text-right md:w-6/12">
      <Button className="min-w-[35px] min-h-[35px] md:hidden" eventHandler={eventHandler}>
        <GiSettingsKnobs className="min-w-[35px] min-h-[35px]" />
      </Button>
      <SortProduct />
    </div>
  );
}

export default ProductNavigation;
