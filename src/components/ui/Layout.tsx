import Image from 'next/image';

import { Filter } from '../filter/Filter';

import { Children } from '@/types/main';

export const Layout = ({ children }: Children) => {
  return (
    <div className='bg-neutral-bg h-full relative'>
      <Filter />
      <header className='bg-primary'>
        <Image
          src='./images/bg-header-desktop.svg'
          alt='background'
          className='object-cover h-40 w-screen'
          width={500}
          height={500}
        />
      </header>
      <main>{children}</main>
    </div>
  );
};
