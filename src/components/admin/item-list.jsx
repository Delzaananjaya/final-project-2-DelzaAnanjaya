import { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { MdSystemUpdateAlt } from 'react-icons/md';
import { useProductContext } from '../../context/product-context';
import { UPDATE_STOCK } from '../../reducers/actions';
import { messageNotifications } from '../../utils/constant';
import { Button } from '../ui';
import ItemName from './item-name';

function ItemList({ id, title, image, category }) {
  const { UPDATE_STOCK_SUCCESS } = messageNotifications;
  const { state, dispatch } = useProductContext();
  const { addToast } = useToasts();
  const stock = state.stock[id - 1];
  const [total, setTotal] = useState(stock);

  const updateStock = () => {
    dispatch({ type: UPDATE_STOCK, payload: { total, id } });
    addToast(UPDATE_STOCK_SUCCESS.message, UPDATE_STOCK_SUCCESS.status);
  };

  return (
    <tr className="odd:bg-white">
      <ItemName title={title} image={image} category={category} />
      <td className="w-1/6">
        <input
          className="max-w-[30px] lg:max-w-[45px] text-center border-dark border md:p-1 lg:p-0"
          type="number"
          min={0}
          max={20}
          value={total}
          onChange={(e) => setTotal(e.target.value)}
        />
      </td>
      <td className="w-1/6">
        <Button eventHandler={updateStock}>
          <MdSystemUpdateAlt className="min-w-[25px] min-h-[25px]" />
        </Button>
      </td>
    </tr>
  );
}

export default ItemList;
