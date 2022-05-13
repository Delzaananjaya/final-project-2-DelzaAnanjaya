import Image from 'next/image';
import { trimmingText } from '../../utils/helper';

function ItemName({ title, image, category }) {
  return (
    <td className="w-2/6">
      <div className="hidden relative w-1/3 h-20 md:inline-block bg-white align-middle scale-[0.8] lg:h-32">
        <Image
          className="w-20 scale-90"
          src={image}
          alt={title}
          layout="fill"
          objectFit="contain"
          blurDataURL="https://via.placeholder.com/653x879.webp"
          placeholder="blur"
        />
      </div>
      <div className="inline-block w-2/3 pl-2 text-left align-middle">
        <h3 className="font-semibold">{trimmingText(title)}</h3>
        <p className="capitalize">{category}</p>
      </div>
    </td>
  );
}

export default ItemName;
