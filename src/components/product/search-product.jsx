import { useEffect, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useProductContext } from '../../context/product-context';
import { SET_QUERY } from '../../reducers/actions';
import { Button } from '../ui';

function SearchBar({ totalProduct }) {
  const { dispatch } = useProductContext();
  const [item, setItem] = useState('');
  const searchInput = useRef(null);

  useEffect(() => {
    searchInput.current.focus();
  }, []);

  const searchHandler = (event) => {
    if (event.key === 'Enter' || event?.type === 'click') {
      dispatch({ type: SET_QUERY, payload: item });
    }
  };

  return (
    <>
      <div className="relative">
        <input
          className="w-full px-12 py-1.5 text-lg bg-white rounded-full shadow-sm"
          type="text"
          placeholder="Search your item here..."
          ref={searchInput}
          value={item}
          onKeyPress={searchHandler}
          onChange={(e) => setItem(e.target.value)}
        />
        <Button
          className="absolute left-4 top-2  min-h-[20px] min-w-[20px]"
          eventHandler={searchHandler}
          tabIndex="0"
        >
          <FaSearch className="text-lg lg:text-xl" />
        </Button>
      </div>
      <p className="my-2 ml-2 md:pl-2 md:ml-0 md:inline-block md:w-6/12">
        {totalProduct}
        {' '}
        Products found
      </p>
    </>
  );
}

export default SearchBar;
