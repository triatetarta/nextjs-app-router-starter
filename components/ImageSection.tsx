'use client';

import Image from 'next/image';

const ImageSection = ({ image }) => {
  return <Image src={image} width={300} height={300} alt={image} />;
};

export default ImageSection;
