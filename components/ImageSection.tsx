'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const ImageSection = ({ image }) => {
  return <Image src={image} width={300} height={300} alt={image} />;
};

export default ImageSection;
