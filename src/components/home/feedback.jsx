import Image from 'next/image';

function Feedback() {
  return (
    <section className="relative p-10 bg-white">
      <h2 className="text-4xl font-bold text-center mb-7 md:text-5xl lg:mb-10">
        Apa Kata Pelanggan Kami
      </h2>
      <figure className="text-center">
        <div className="relative mx-auto my-5 border-4 rounded-full h-36 w-36 md:w-40 md:h-40 lg:w-44 lg:h-44 border-dark lg:border-8">
          <Image
            src="/images/customer.webp"
            objectFit="cover"
            alt="Customers profile"
            objectPosition="top"
            className="rounded-full"
            layout="fill"
            blurDataURL="https://via.placeholder.com/653x879.webp"
            placeholder="blur"
            priority
          />
        </div>
        <figcaption className="italic leading-5 md:text-lg md:px-12 lg:text-xl lg:px-32">
          &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          consectetur, purus id tincidunt feugiat, metus orci sagittis elit,
          quis tempor orci elit id arcu. Proin egestas bibendum efficitur.&quot;
        </figcaption>
        <h3 className="text-lg font-bold md:text-xl md:mt-1 lg:text-2xl">
          DELZA ANANJAYA
        </h3>
        <p className="text-base md:text-lg lg:text-xl">Client</p>
      </figure>
    </section>
  );
}

export default Feedback;
