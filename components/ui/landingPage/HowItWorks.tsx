import { StaticImageData } from 'next/image';
import React from 'react';
import Image from 'next/image';

interface CardProps {
  src: StaticImageData;
  alt: string;
  desc: string;
}

export default function HowItWorks({ src, alt, desc }: CardProps) {
  return (
    <div
      className={`flex w-full items-center justify-center pb-[60px] md:pb-0 lg:gap-[20px] lg:pb-[60px]`}>
      <div className="image">
        <Image src={src} alt={alt} className="w-[70px]"></Image>
      </div>
      <div className="desc w-[68%] font-bold">
        <p className="text-center text-[18px] md:text-[15px]  lg:text-left lg:text-[25px]">
          {desc}
        </p>
      </div>
    </div>
  );
}
