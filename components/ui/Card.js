import Image from 'next/image';

function Card({ title, subtitle, imageUrl }) {
  return (
    <article className="break-words font-medium">
      <div className="aspect-w-4 aspect-h-3 mb-7">
        <Image layout="fill" objectFit="cover" src={imageUrl} alt="" />
      </div>
      <h5 className="mb-1.5 font-serif text-2xl tracking-widest">{title}</h5>
      <h6 className="text-sm tracking-[0.6em] text-[#d7926b]">{subtitle}</h6>
    </article>
  );
}

export default Card;
