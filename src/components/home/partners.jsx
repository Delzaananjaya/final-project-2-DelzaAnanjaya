/* eslint-disable linebreak-style */
import Image from 'next/image';
import { partnerLogos } from '../../utils/constant';

function Partners() {
  return (
    <section className="p-10">
      <h2 className="mb-10 text-4xl font-bold text-center md:text-5xl lg:mb-16">
        Partner Kami
      </h2>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {partnerLogos.map(({ src, name }) => (
          <section className="relative h-7" key={src}>
            <Image src={src} layout="fill" alt={name} objectFit="contain" />
          </section>
        ))}
      </div>
    </section>
  );
}

export default Partners;
