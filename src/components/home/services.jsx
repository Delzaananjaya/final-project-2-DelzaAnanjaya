import Benefits from './benefits';
import { servicesList } from '../../utils/constant';

function Services() {
  return (
    <section className="p-10 bg-white">
      <h2 className="text-4xl font-bold text-center mb-7 md:text-5xl md:px-5 lg:mb-16">
        Manfaat Menggunakan Layanan Kami
      </h2>
      <div className="grid divide-y-2 gap-y-10 lg:grid-cols-3 lg:divide-y-0 lg:gap-y-0 lg:divide-x-2">
        {servicesList.map((item) => (
          <Benefits {...item} key={item.text} />
        ))}
      </div>
    </section>
  );
}

export default Services;
