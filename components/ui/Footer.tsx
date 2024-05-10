import * as React from 'react';
import logo from '../../public/imgs/logo.png';
import Image from 'next/image';
import instagram from '../../public/imgs/icons/instagram.svg';
import youtube from '../../public/imgs/icons/YouTube.svg';
import tiktok from '../../public/imgs/icons/TikTok.svg';
import linkedin from '../../public/imgs/icons/Linkedin.svg';
import Link from 'next/link';
import arrow from '../../public/imgs/icons/arrow-up-right.svg';

export function Footer() {
  return (
    <div className="flex flex-col bg-white px-20 py-16 max-md:px-5">
      <Image
        loading="lazy"
        src={logo.src}
        className="aspect-[3.85] w-36 max-w-full"
        alt="thankupet logo"
        width={144}
        height={47}
      />
      <div className="mt-6 flex gap-4 self-start">
        <button>
          <Link href={'#'}>
            <Image
              loading="lazy"
              src={tiktok}
              className="aspect-square w-6 shrink-0"
              alt="tiktok logo"
              width={24}
              height={24}
            />
          </Link>
        </button>
        <button>
          <Link href={'#'}>
            <Image
              loading="lazy"
              src={instagram}
              className="aspect-square w-6 shrink-0"
              alt="instagram logo"
              width={24}
              height={24}
            />
          </Link>
        </button>
        <button>
          <Link href={'#'}>
            <Image
              loading="lazy"
              src={youtube}
              className="aspect-square w-6 shrink-0"
              alt="youtube logo"
              width={24}
              height={24}
            />
          </Link>
        </button>
        <button>
          <Link href={'#'}>
            <Image
              loading="lazy"
              src={linkedin}
              className="aspect-square w-6 shrink-0"
              alt="linkedin logo"
              width={24}
              height={24}
            />
          </Link>
        </button>
      </div>
      <div className="mt-8 h-px shrink-0 bg-neutral-200 max-md:max-w-full" />
      <div className="mt-16 flex gap-5 pr-20 text-xs leading-4 text-zinc-600 max-md:mt-10 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
        <div className="flex flex-1 flex-col py-0.5">
          <div className="text-sm font-medium leading-5 text-neutral-900">About</div>
          <Link href={'#'}>
            <div className="mt-5">About Us</div>
          </Link>
          <Link href={'#'}>
            <div className="mt-5">Work at ThankUPet</div>
          </Link>
          <Link href={'#'}>
            <div className="mt-5">Partners</div>
          </Link>
          <Link href={'#'}>
            <div className="mt-5">Get our App</div>
          </Link>
        </div>
        <div className="flex flex-1 flex-col pb-9">
          <div className="text-sm font-medium leading-5 text-neutral-900">Support</div>
          <Link href={'#'}>
            <div className="mt-5">Contact</div>
          </Link>
          <div className="mt-4 flex gap-2 rounded py-1 pr-8 max-md:pr-5">
            <Link href={'#'}>
              <div>Help Center</div>
            </Link>
            <Image
              loading="lazy"
              src={arrow}
              className="aspect-square w-4 shrink-0"
              alt="arrow"
              width={16}
              height={16}
            />
          </div>
          <div className="mt-3 flex gap-2 rounded py-1 pr-3">
            <Link href={'#'}>
              <div>ThankUPet Pawtection</div>
            </Link>
            <Image
              loading="lazy"
              src={arrow}
              className="aspect-square w-4 shrink-0"
              alt="arrow"
              width={16}
              height={16}
            />
          </div>
        </div>
      </div>
      <div className="mt-16 flex w-full justify-between gap-5 text-xs leading-4 max-md:mt-10 max-md:max-w-full max-md:flex-wrap">
        <div className="flex justify-center gap-4 whitespace-nowrap px-4">
          <div className="my-auto h-1 w-1 shrink-0 rounded-2xl bg-zinc-600" />
          <Link href={'#'}>
            <div className="text-zinc-600">Privacy</div>
          </Link>
          <div className="my-auto h-1 w-1 shrink-0 rounded-2xl bg-zinc-600" />
          <Link href={'#'}>
            <div className="text-zinc-600">Terms</div>
          </Link>
        </div>
        <div className="text-zinc-400">© 2024 ThankUPet. All Rights Reserved.</div>
      </div>
    </div>
  );
}
