import Image from 'next/image';
import wavingHand from '../../public/imgs/wavingHand.png';
import React from 'react';

export function Hand() {
  return (
    <Image src={wavingHand} alt="waving hand png" className="mr-[10px] h-[20px] w-[20px]"></Image>
  );
}
