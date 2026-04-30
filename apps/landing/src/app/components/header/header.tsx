'use client';

import Image from 'next/image';
import Link from 'next/link';
import MenuButton from './button-menu';
import TransparentLink from './link-transparent';
import { getMembershipUrl, getScheduleAsGuestUrl } from './service';

function AppHeader(props: React.ComponentPropsWithoutRef<'header'>) {
  return (
    <header
      {...props}
      className='w-full border-b border-white/5 bg-[#0D1216]'>
      <div className='mx-auto flex h-25 max-w-7xl items-center justify-between px-6 lg:px-2'>
        <Link href='/'>
          <Image
            alt='Header Logo Image'
            src='/images/header-logo.png'
            width={200}
            height={80}
            quality={100}
            className='h-20 sm:h-24 w-auto'
          />
        </Link>
        <div className='flex items-center gap-4'>
          <MenuButton />
          <TransparentLink
            target='_blank'
            href={getMembershipUrl()}
            className='hidden md:flex'>
            Seja Membro
          </TransparentLink>
          <TransparentLink
            target='_blank'
            href={getScheduleAsGuestUrl()}
            className='hidden md:flex'>
            Agendar como visitante
          </TransparentLink>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
