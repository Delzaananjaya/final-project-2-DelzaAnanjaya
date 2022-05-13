import Image from 'next/image';
import { useRouter } from 'next/router';
import { trimmingText } from '../../utils/helper';
import RatingProduct from './rating-product';

function CardItem({ id, title, image, rating: { rate, count }, price }) {
  const router = useRouter();

  const eventHandler = (event) => {
    event.preventDefault();
    router.push(`/products/${id}`);
  };

  return (
    <article
      className="w-full overflow-hidden shadow-sm hover:shadow-lg rounded-xl group"
      onClick={eventHandler}
      role="button"
      tabIndex="0"
    >
      <div className="relative w-full pt-6 bg-white md:hidden" />
      <div className="relative w-auto h-64 bg-white">
        <Image
          className="scale-90 md:scale-75 group-hover:scale-[0.8] duration-300 ease-in-out"
          src={image}
          alt={title}
          layout="fill"
          objectFit="contain"
          priority
          placeholder="blur"
          blurDataURL="https://via.placeholder.com/653x879.webp"
        />
      </div>
      <div className="relative w-full h-full text-center bg-white py-3.5 space-y-1.5 md:pt-0">
        <h3 className="text-lg font-bold lg:text-xl">{trimmingText(title)}</h3>
        <RatingProduct rate={rate} />
        <p className="text-gray-500 text-base !mt-0 after:content-['\0020reviews']">{count}</p>
        <h4 className="text-lg font-bold lining-nums tabular-nums after:content-['$']">{price}</h4>
      </div>
    </article>
  );
}

export default CardItem;
