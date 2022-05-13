import ItemName from './item-name';

function HistoryList({ title, image, category, price, quantity }) {
  const income = parseFloat(price * quantity).toFixed(2);

  return (
    <tr className="odd:bg-white">
      <ItemName title={title} image={image} category={category} />
      <td className="w-1/6 after:content-['$']">{price}</td>
      <td className="w-1/6">{quantity}</td>
      <td className="w-1/6 after:content-['$']">{income}</td>
    </tr>
  );
}

export default HistoryList;
