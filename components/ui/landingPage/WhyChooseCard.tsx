import { StaticImageData } from 'next/image';
import React from 'react';
import Image from 'next/image';

interface CardProps {
  src: StaticImageData;
  alt: string;
  desc: string;
}

export default function WhyChooseCard({ src, alt, desc }: CardProps) {
  return (
    <div className="flex w-[50%] flex-col items-center gap-[20px] pb-[40px] lg:w-[30%] lg:pb-[60px]">
      <div className="image">
        <Image src={src} alt={alt} className="w-[90px]"></Image>
      </div>
      <div className="desc w-[68%] font-bold">
        <p className="text-center text-[12px] md:text-[15px]">{desc}</p>
      </div>
    </div>
  );
}
