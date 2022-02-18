import NextImage from 'next/image';

const gumletLoader = ({ src, width, quality }) => {
  return `https://hendon.gumlet.io/${src}?w=${width}&q=${quality || 75}`;
};

function Image(props) {
  return <NextImage loader={gumletLoader} {...props} />;
}

export default Image;
