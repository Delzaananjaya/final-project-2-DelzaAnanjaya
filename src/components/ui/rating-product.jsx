import { createRatingStars } from '../../utils/helper';

function RatingProduct({ rate }) {
  return (
    <div className="flex items-center justify-center">
      <span className="flex space-x-0.5 md:space-x-1.5 text-yellow-400">
        {createRatingStars(rate)}
      </span>
      <p className="inline-block ml-1.5 md:ml-3.5 text-base text-gray-500">
        {rate}
      </p>
    </div>
  );
}

export default RatingProduct;
