//import Link from 'next/link';
//import { useTranslation } from '../i18n';
import backgroundLarge from '../public/imgs/pet_owner_hero_large.png';
import logo from '../public/imgs/logo.png';
import Link from 'next/link';
import React, { lazy } from 'react';
import { Modal } from '@/components/ui/Modal';
import Image from 'next/image';
import { DiscountMarquee } from '@/components/ui/DiscountMarquee';
//import yellowOvalXL from '../../public/imgs/illustrations/yellowOvalXL.png';
import About from '../public/imgs/icons/About.png';
import Done from '../public/imgs/icons/Done.png';
import Health from '../public/imgs/icons/Health.png';
import ImageFile from '../public/imgs/icons/ImageFile.png';
import Lock from '../public/imgs/icons/Lock.png';
import Share from '../public/imgs/icons/Share.png';
//import WhyChooseCard from '@/components/ui/landingPage/WhyChooseCard';
import Card1svg from '../public/imgs/cards/svgs/Card_Phone_Background_Check.svg';
import Card2svg from '../public/imgs/cards/svgs/Card_Phone_Petsitter_qualifications.svg';
import Card3svg from '../public/imgs/cards/svgs/Card_Phone_Interview.svg';
import Card4svg from '../public/imgs/cards/svgs/Card_Phone_Pre-service_training_and_testing.svg';
//import ServicesCard from '@/components/ui/landingPage/ServicesCard';
import Daycare from '../public/imgs/icons/daycare.svg';
import Grooming from '../public/imgs/icons/grooming.svg';
import Insurance from '../public/imgs/icons/insurance.svg';
import Sitting from '../public/imgs/icons/sitting.svg';
import SpecialCare from '../public/imgs/icons/specialCare.svg';
import Training from '../public/imgs/icons/training.svg';
import Walking from '../public/imgs/icons/walking.svg';
import Signup from '../public/imgs/buttons/SignupButton.svg';
import Works from '../public/imgs/cards/GirlandCat.svg';
import Add from '../public/imgs/icons/Icon_Add.svg';
import Click from '../public/imgs/icons/Icon_Click.png';
import Event from '../public/imgs/icons/Icon_Event.svg';
import Match from '../public/imgs/icons/Icon_Match.svg';
//import HowItWorks from '@/components/ui/landingPage/HowItWorks';
import { Footer } from '@/components/ui/Footer';

export interface PageProps {
  params: {
    lng: string;
  };
  searchParams: Record<string, string> | null | undefined;
}

const WhyChooseCardC = lazy(() => import('@/components/ui/landingPage/WhyChooseCard'));
const ServicesCardC = lazy(() => import('@/components/ui/landingPage/ServicesCard'));
const HowItWorksC = lazy(() => import('@/components/ui/landingPage/HowItWorks'));

export default async function Page({ params, searchParams }: PageProps) {
  /*const lng = (params as { lng: string }).lng;
  const { t } = await useTranslation(lng)!;*/
  const show = searchParams?.show;
  //test
  return (
    <div>
      <div
        className="flex h-screen flex-col items-center bg-cover bg-[bottom_left_-250px] bg-no-repeat md:bg-[0] md:bg-center lg:bg-bottom"
        style={{
          backgroundImage: `url(${backgroundLarge.src})`,
        }}>
        <div className="logo flex w-full justify-center pt-[20px]">
          <Link href={`/`}>
            <Image src={logo} alt={''} height={10} width={140} className="lg:pt-[10px]"></Image>
          </Link>
        </div>
        <div className="text flex flex-col justify-center md:pt-[30vh]">
          <div className="row1 md:flex md:flex-row">
            <h2 className="pt-[30vh] text-center text-[3vh] font-extrabold md:pt-0">
              Match with
            </h2>
            <h2 className="text-center text-[3vh] font-extrabold">Trustworthy</h2>
          </div>
          <div className="row2">
            <h2 className="text-center text-[3vh] font-extrabold">Pet Sitters At One Click</h2>
          </div>
        </div>
        <Link href={`/?show=true`}>
          <button className="mt-[20vh] flex items-center justify-between gap-5 rounded-[44px] border border-[0.5px] border-solid border-black px-[20px] text-base font-bold leading-[10px] text-black md:w-[350px]">
            <div className="justify-center py-4 text-[2vh]">Choose Your Language</div>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.7018 23.3692C20.8319 23.3692 23.3694 20.8317 23.3694 17.7015C23.3694 14.5714 20.8319 12.0339 17.7018 12.0339C14.5717 12.0339 12.0342 14.5714 12.0342 17.7015C12.0342 20.8317 14.5717 23.3692 17.7018 23.3692Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M23.9661 23.9656L22.7729 22.7725"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Link>
        {show && <Modal lng={''}/>}
        <div className="matchButton">
          <button className="mt-[5vh] flex w-[180px] items-center justify-around rounded-full bg-black px-[20px] py-[13px]">
            <p className="text-[2vh] text-white">Match Now</p>
            <svg
              className=""
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.5 14.8335L16.5 9.00016M16.5 9.00016L11.5 3.16683M16.5 9.00016L1.5 9.00016"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="marquee">
        <DiscountMarquee />
      </div>
      <div className="why bg-[#FFFBEF]">
        <div className="h2 pt-[50px] md:flex md:justify-center md:gap-[8px]">
          <h2 className="text-center text-[25px] font-bold lg:text-[40px]">Why choose</h2>
          <div className="relative">
            {/*<Image src={yellowOvalXL} alt="yellow circle" className=""></Image>*/}
            <h2 className="text-center text-[25px] font-bold lg:text-[40px]">ThankUPet?</h2>
          </div>
        </div>
        <div className="whycard flex flex-wrap px-[20px] py-[50px] md:px-[90px] lg:justify-center lg:px-0">
          <WhyChooseCardC src={Health} alt="health icon" desc="Increased Trust and Security" />
          <WhyChooseCardC src={Share} alt="share icon" desc="Diverse Pet Care" />
          <WhyChooseCardC src={About} alt="about icon" desc="Specialized Attention" />
          <WhyChooseCardC src={ImageFile} alt="image icon" desc="Certified Professionals" />
          <WhyChooseCardC src={Lock} alt="lock icon" desc="Booking  Protection" />
          <WhyChooseCardC src={Done} alt="done icon" desc="Free insurance Coverage" />
        </div>
      </div>
      <div className="who flex flex-col items-center">
        <div className="h2 w-[65%] pt-[50px]">
          <h2 className="text-center text-[25px] font-bold lg:text-[40px]">Who can be our pet sitters ?</h2>
        </div>
        <div className="cards flex w-full flex-col items-center gap-[40px] px-[20px] md:flex-row md:flex-wrap md:justify-center lg:px-[300px]">
          <Image
            src={Card1svg}
            alt="background check image"
            className="mb-[20px] ml-[43px] w-[90%] md:ml-0 md:w-[39%] lg:w-[25%]"></Image>
          <Image src={Card2svg} alt="qualification image" className="w-[80%] md:w-[35%]  lg:w-[25%]"></Image>
          <Image
            src={Card3svg}
            alt="interview image"
            className="mr-[38px] w-[93%] md:w-[40%] lg:w-[25%]"></Image>
          <Image src={Card4svg} alt="training image" className="w-[80%] md:w-[35%] lg:w-[25%]"></Image>
        </div>
        <div className="p w-[70%] pb-[130px] pt-[60px]">
          <p className="text-center text-[20px] font-medium">We&apos;re highly selective!</p>
          <p className="text-center text-[20px] font-medium">
            ThankUPet accepts only <span className="text-[20px] font-bold">10%</span> of pet sitter
            applications
          </p>
        </div>
      </div>
      <div className="services bg-[#FFFBEF]">
        <div className="w-full pt-[50px] md:flex md:justify-center md:gap-[8px]">
          <h2 className="text-center text-[25px] font-bold lg:text-[40px]">Services Tailored</h2>
          <h2 className="text-center text-[25px] font-bold lg:text-[40px]"> for your </h2>
          <h2 className="text-center text-[25px] font-bold lg:text-[40px]">family members</h2>
        </div>
        <div className="servicescard flex flex-wrap py-[60px] md:justify-center md:px-[90px] lg:justify-center lg:px-0">
          <ServicesCardC
            src={Daycare}
            alt="daycare image"
            desc="Day Care"
            p="We provide a comfortable and secure home where your pet is cared for while you're away."
            notFirstRow={false}
          />
          <ServicesCardC
            src={Sitting}
            alt="sitting image"
            desc="Sitting"
            p="Your pet sitter take care of your pet in your home."
            notFirstRow={false}
          />
          <ServicesCardC
            src={Walking}
            alt="walking image"
            desc="Walking"
            p="Your dog walker offers personalized walking plans tailored to your dog's needs and preferences."
            notFirstRow={false}
          />
          <ServicesCardC
            src={SpecialCare}
            alt="special care image"
            desc="Special Care"
            p="The services include specialized care such as administering medication, changing dressings, providing rehabilitation therapy, and accompanying pets to medical appointments, etc."
            notFirstRow={true}
          />
          <ServicesCardC
            src={Grooming}
            alt="grooming image"
            desc="Grooming Care"
            p="A certified groomer will provide bathing, brushing, nail trimming, and grooming services for your pet at your home."
            notFirstRow={true}
          />
          <ServicesCardC
            src={Training}
            alt="training image"
            desc="Training Care"
            p="Expert trainers offer sessions at your home or their facility to teach your pet essential skills and behaviors."
            notFirstRow={true}
          />
          <ServicesCardC
            src={Insurance}
            alt="insurance image"
            desc="Insurance Care"
            p="ThankUPet Insurance not only provides peace of mind for your pets but also shields your wallet from unforeseen veterinary costs."
            notFirstRow={true}
          />
        </div>
        <div className="signup flex w-full justify-center pb-[60px]">
          <button className="flex h-[30px] gap-[5px]">
            <Image
              src={Signup}
              className="h-[21px] w-[21px] self-center"
              alt="signup button"></Image>
            <p className=" self-center text-[12px] uppercase lg:text-[16px] [@media(max-width:300px)]:text-[8px]">
              Sign up now to find your perfect pet sitter 💡
            </p>
          </button>
        </div>
      </div>
      <div className={`works flex flex-col`}>
        <div className="h2 w-full pt-[50px]">
          <h2 className="text-center text-[25px] font-bold lg:text-[45px]">How It Works</h2>
        </div>
        <div className="smallbg hidden">
          <Image
            src={Works}
            className="!important z-0 ml-[-200px] mt-[-100px] h-[2000px] !w-[7000px]"
            width={7000}
            height={2000}
            alt="how it works"></Image>
        </div>
        <div className="flex lg:px-[200px] lg:pt-[100px]">
          <div className="cardImage w-[50%] pt-[80px] md:pt-0 lg:mt-[-50px] lg:h-full [@media(max-width:640px)]:hidden">
            <Image src={Works} alt="how it works image" className=""></Image>
          </div>

          <div className="flex w-full flex-col px-[40px] pt-[60px] md:w-[50%]">
            <HowItWorksC src={Add} alt="add" desc="Add your pet" />
            <HowItWorksC src={Click} alt="add" desc="Book a service" />
            <HowItWorksC src={Match} alt="add" desc="Match with sitters" />
            <HowItWorksC src={Event} alt="add" desc="Book with confidence" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
