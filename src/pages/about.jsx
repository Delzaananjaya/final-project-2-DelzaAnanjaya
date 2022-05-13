import Head from 'next/head';
import Image from 'next/image';
import { Breadcrumb } from '../components/ui';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | TOKO BIRU.</title>
        <meta
          name="description"
          content="Shoply merupakan web e-commerce yang dibuat oleh Muhammad Raihan S dan Muhammad Rian. Tujuan dibuatnya web ini untuk penilaian final project kedua kami."
        />
      </Head>
      <main className="p-10">
        <Breadcrumb routes={['about']} />
        <div className="relative w-full md:flex md:space-x-7">
          <div className="relative w-full md:w-2/5 h-60 lg:h-72">
            <Image
              className="rounded-md md:!object-cover object-top"
              src="/images/about.png"
              alt="Author"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="https://via.placeholder.com/653x879.webp"
              priority
            />
          </div>
          <section className="relative w-full md:w-3/5">
            <div className="relative my-5 md:mt-0">
              <h2 className="text-xl font-bold uppercase md:text-2xl after:left-0 after:border-dark after:border-solid after:-bottom-1 after:absolute after:border-b-4 after:w-1/6">
                Tentang Kami
              </h2>
            </div>
            <p className="text-justify md:text-base lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, laborum similique dicta aliquam libero, cumque iusto
              quod temporibus dolorum sequi nisi exercitationem nam adipisci
              maxime ducimus veniam molestiae delectus, reiciendis ratione fugit
              consectetur dolores! Blanditiis, exercitationem voluptatem,
              expedita velit veniam odio laudantium, non magnam est minima
              corporis magni enim assumenda.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
