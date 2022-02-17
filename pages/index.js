import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

import { Button, Card } from '@components/ui';

const apartments = [
  {
    id: 1,
    title: 'West Complex',
    subtitle: 'From 120 m2',
    imageUrl: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/h1-apart-feature-1.jpg',
  },
  {
    id: 2,
    title: 'Apartment Block',
    subtitle: 'From 120 m2',
    imageUrl: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/h1-apart-feature-2.jpg',
  },
  {
    id: 3,
    title: 'East Complex',
    subtitle: 'From 120 m2',
    imageUrl: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/h1-apart-feature-3.jpg',
  },
  {
    id: 4,
    title: 'Modern Studio ',
    subtitle: 'From 120 m2',
    imageUrl: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/h1-apart-feature-4.jpg',
  },
  {
    id: 5,
    title: 'South Complex',
    subtitle: 'From 120 m2',
    imageUrl: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/h1-apart-feature-5.jpg',
  },
  {
    id: 6,
    title: 'Modern Suite',
    subtitle: 'From 120 m2',
    imageUrl: 'https://hendon.qodeinteractive.com/wp-content/uploads/2020/05/h1-apart-feature-6.jpg',
  },
];

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <section className="py-16 px-8 text-center uppercase lg:py-32 lg:px-16">
      <div className="mb-8">
        {status === 'authenticated' ? (
          <>
            <p className="mb-4 text-sm font-medium leading-7 tracking-[0.6em] text-[#c28562]">
              welcome {session.user.name}
            </p>
            <Button onClick={() => signOut()}>Sign Out</Button>
          </>
        ) : (
          <Button onClick={() => signIn('github')}>Sign In</Button>
        )}
      </div>
      <div className="mb-8">
        <h2 className="mb-3.5 font-serif text-4xl tracking-[0.15em] lg:text-6xl">Choose an Apartment</h2>
        <p className="text-sm font-medium leading-7 tracking-[0.6em] text-[#c28562]">
          At vero eos et accusamus et iusto odio
        </p>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-y-9 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
        {apartments.map(({ id, ...apartment }) => (
          <Card key={id} {...apartment} />
        ))}
      </div>
      <Button>Request</Button>
    </section>
  );
}
