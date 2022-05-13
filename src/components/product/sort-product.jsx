import { useRouter } from 'next/router';
import { useState } from 'react';

function SortProduct() {
  const router = useRouter();
  const [sort] = useState(router.query?.sort || 'asc');

  const isAlreadySort = (url) => {
    const regex = /[?|&]sort=(asc|desc)/gi;

    return url.match('sort') ? url.replace(regex, '') : url;
  };

  const eventHandler = (e) => {
    const { value } = e.target;
    const currentUrl = isAlreadySort(router.asPath);
    const symbol = currentUrl.includes('?') ? '&' : '?';

    router.push(`${currentUrl}${symbol}sort=${value}`);
  };

  return (
    <div className="flex items-center justify-end">
      <small>Sort by Id</small>
      <select
        className="px-1.5 py-1 rounded-full border-dark border ml-2 text-center"
        onChange={eventHandler}
        defaultValue={sort}
      >
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
      </select>
    </div>
  );
}

export default SortProduct;
