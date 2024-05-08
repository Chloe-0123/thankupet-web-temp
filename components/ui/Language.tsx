import React from 'react';
import Link from 'next/link';
/*import { Trans } from 'react-i18next/TransWithoutContext';
import { languages } from '../../app/i18n/settings';
import { useTranslation } from '../../app/i18n';
import { PageProps } from '@/app/[lng]/page';*/

interface LanguageProps {
  key: number;
  language: string;
}

export async function Language({ language }: LanguageProps) {
  //const { t } = await useTranslation(lng, 'footer');

  return (
    <div className="mb-[5px] w-[50%]">
      <Link href={'/'}>
        <p className="text-[1.1rem] font-light">{language}</p>
      </Link>
    </div>
  );
}
