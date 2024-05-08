import Link from 'next/link';
import React from 'react';
import logo from '../../public/imgs/logo.png';
import Image from 'next/image';
import { Language } from './Language';

export function Modal({ lng }: { lng: string }) {
  const languageArray = [
    'English',
    'Afrikaans',
    'العربية',
    'Azeri',
    'Български',
    'বাংলা',
    'Bosanski',
    'Català',
    'Čeština',
    'Dansk',
    'Deutsch',
    'Ελληνικά',
    'English (Austrailia)',
    'English (UK)',
    'Español',
    'Español (Argentina)',
    'Español (España)',
    'Eesti keel',
    'Euskera',
    'Suomi',
    'Français (France)',
    'Français (Canada)',
    'Galego',
    'עברית',
    'हिन्दी',
    'Hrvatski',
    'Magyar',
    'Bahasa Indonesia',
    'Italiano',
    '日本語',
    'ქართული ენა',
    'қазақ тілі',
    'ខ្មែរ',
    '한국어',
    'Lietuvių',
    'Latviešu',
    'Македонски',
    'Bahasa Melayu',
    'Norsk (bokmål)',
    'Nederlands',
    'Polski',
    'Português (Brasil)',
    'Português (Portugal)',
    'Română',
    'Русский',
    'Slovenčina',
    'Slovenščina',
    'Srpski',
    'Svenska',
    'தமிழ்',
    'తెలుగు',
    'ภาษาไทย',
    'Filipino',
    'Türkçe',
    'Українська',
    'Tiếng Việt',
    '中文 (简体)',
    '中文 (繁体)',
  ];

  return (
    <div className="fixed inset-0 flex w-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50">
      <div className="h-full w-full overflow-scroll rounded-md border bg-white px-[20px]">
        <div className="flex flex-col items-center text-center">
          <div className="flex justify-center text-2xl font-bold text-gray-900">
            <Image src={logo} alt="logo" className="w-[40%] pt-[20px]"></Image>
            {/* Navigates back to the base URL - closing the modal */}
            <Link
              href={`/`}
              className="absolute right-0 top-0 rounded-full bg-transparent p-[25px] font-[1.5rem] text-black hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300">
              ✕
            </Link>
          </div>
        </div>
        <div className="border-b-[1px] border-solid border-slate-300 pb-[10px] pt-[30px]">
          <p className="text-lg">Choose a language</p>
          <p>{lng}</p>
        </div>
        <div className="languages mt-[20px] flex flex-wrap">
          {languageArray.map((language, index) => (
            <Language key={index} language={language} />
          ))}
        </div>
      </div>
    </div>
  );
}
