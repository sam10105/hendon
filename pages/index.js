import Image from 'next/image';
import { Button } from '@components/ui';

const apartments = [
  {
    id: 1,
    title: 'West Complex',
    subtitle: 'From 120 m2',
    imageUrl:
      'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/h1-apart-feature-1.jpg',
  },
  {
    id: 2,
    title: 'Apartment Block',
    subtitle: 'From 120 m2',
    imageUrl:
      'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/h1-apart-feature-2.jpg',
  },
  {
    id: 3,
    title: 'East Complex',
    subtitle: 'From 120 m2',
    imageUrl:
      'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/h1-apart-feature-3.jpg',
  },
  {
    id: 4,
    title: 'Modern Studio ',
    subtitle: 'From 120 m2',
    imageUrl:
      'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/h1-apart-feature-4.jpg',
  },
  {
    id: 5,
    title: 'South Complex',
    subtitle: 'From 120 m2',
    imageUrl:
      'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/h1-apart-feature-5.jpg',
  },
  {
    id: 6,
    title: 'Modern Suite',
    subtitle: 'From 120 m2',
    imageUrl:
      'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/h1-apart-feature-6.jpg',
  },
];

export default function Home() {
  return (
    <section className="py-16 lg:py-32 px-8 lg:px-16 text-center uppercase">
      <div className="mb-8">
        <h2 className="font-serif text-4xl lg:text-6xl tracking-[0.15em] mb-3.5">
          Choose an Apartment
        </h2>
        <p className="font-medium text-sm leading-7 tracking-[0.6em] text-[#c28562]">
          At vero eos et accusamus et iusto odio
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8 gap-y-9 lg:gap-y-12 mb-8">
        {apartments.map(({ id, title, subtitle, imageUrl }) => (
          <article className="font-medium break-words" key={id}>
            <div className="aspect-w-4 aspect-h-3 mb-7">
              <Image layout="fill" objectFit="cover" src={imageUrl} alt="" />
            </div>
            <h5 className="mb-1.5 font-serif text-2xl tracking-widest">
              {title}
            </h5>
            <h6 className="text-sm tracking-[0.6em] text-[#d7926b]">
              {subtitle}
            </h6>
          </article>
        ))}
      </div>
      <Button>Request</Button>
    </section>
  );
}
