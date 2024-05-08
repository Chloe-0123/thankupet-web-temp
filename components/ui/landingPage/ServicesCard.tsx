import { StaticImageData } from 'next/image';
import React from 'react';
import Image from 'next/image';

interface CardProps {
  src: StaticImageData;
  alt: string;
  desc: string;
  p: string;
  notFirstRow: boolean;
}

export default function ServicesCard({ src, alt, desc, p, notFirstRow }: CardProps) {
  return (
    <div
      className={`flex w-[50%] flex-col items-center gap-[20px] pb-[60px] lg:pb-[60px] ${notFirstRow ? 'md:w-[40%] lg:w-[40%]' : 'md:w-[30%] lg:w-[30%]'}`}>
      <div className="image">
        <Image src={src} alt={alt} className="w-[90px]"></Image>
      </div>
      <div className="desc w-[68%] font-bold">
        <p className="text-center text-[12px] md:text-[15px]">{desc}</p>
      </div>
      <div className="p w-[75%] pl-[10px] text-[14px] lg:flex lg:flex-col lg:items-center">
        <p className="pl-[10px] text-[14px] leading-[17px] lg:w-[80%] ">{p}</p>
      </div>
    </div>
  );
}
