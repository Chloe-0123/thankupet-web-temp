import Marquee from 'react-fast-marquee';
import { Hand } from './Hand';
import React from 'react';

export function DiscountMarquee() {
  return (
    <Marquee className="h-[100px] bg-black text-white" autoFill={true}>
      <p className="mr-[10px]">Securely Vetted Pet Sitters</p>
      <Hand />
      <p className="mr-[10px]">Pawtection Guarantee</p>
      <Hand />
      <p className="mr-[10px]">15% Off First Booking</p>
      <Hand />
    </Marquee>
  );
}
