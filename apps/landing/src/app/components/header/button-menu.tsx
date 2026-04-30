import {
  Drawer,
  DrawerPanel,
  DrawerPopup,
  DrawerTrigger,
} from '@repo/ui/components/drawer';
import { useBreakpoint } from '@repo/ui/hooks/useBreakpoint';
import { Facebook } from '@repo/ui/icons/facebook';
import { Instagram } from '@repo/ui/icons/instagram';
import { cn } from '@repo/ui/lib/utils';
import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const institucional = [
  { children: 'Home', href: '/' },
  { children: 'Unidade', href: '/unidade', disabled: true },
  { children: 'Cultura', href: '/cultura', disabled: true },
  { children: 'Trabalhe Conosco', href: '/trabalhe-conosco', disabled: true },
] as const;

const produtos_servicos = [
  { children: 'Serviços', href: '/servicos', disabled: true },
  { children: 'O Clube', href: '/o-clube', disabled: true },
  { children: 'Vigagismo', href: '/vigagismo', disabled: true },
  { children: 'Dia do Noivo', href: '/dia-do-noivo', disabled: true },
  { children: 'Corporativo', href: '/corporativo', disabled: true },
] as const;

function MenuButton() {
  const { isMobile } = useBreakpoint();
  return (
    <Drawer position={isMobile ? 'left' : 'top'}>
      <DrawerTrigger
        className={cn(
          'h-10 px-4 flex items-center justify-between gap-3',
          'uppercase text-sm font-semibold tracking-wide',
          'cursor-pointer transition-all bg-[#9a5c31] text-white border-2',
          'border-2 border-b-4 border-[#734524]',
          'hover:brightness-110 hover:-translate-y-px hover:border-b-6',
          'active:border-b-2 active:brightness-90 active:translate-y-0.5',
        )}>
        <MenuIcon />
        Menu
      </DrawerTrigger>
      <DrawerPopup className='bg-[#0D1216]'>
        <DrawerPanel
          className={cn(
            'mx-auto max-w-3xl grid',
            isMobile ? 'grid-rows-4' : 'grid-cols-[1fr_1fr_1.5fr_1.1fr]',
          )}>
          <Link
            href='/'
            className=''>
            <Image
              alt='Menu Logo Image'
              src='/images/menu-logo.png'
              width={200}
              height={80}
              className='h-36 sm:h-26 w-auto'
            />
          </Link>
          <ul className='flex flex-col gap-0.5'>
            <span className='text-primary tracking-wider text-2xl italic font-styled cursor-default pointer-events-none'>
              Institucional
            </span>
            {institucional.map((item) => (
              <Link
                className='tracking-wide font-mono hover:scale-105 transition-all'
                key={item.href}
                href={item.href}>
                {item.children}
              </Link>
            ))}
          </ul>
          <ul className='flex flex-col gap-0.5'>
            <span className='text-primary tracking-wider text-2xl italic font-styled cursor-default pointer-events-none'>
              Produtos e Serviços
            </span>
            {produtos_servicos.map((item) => (
              <Link
                className='tracking-wide font-mono hover:scale-105 transition-all'
                key={item.href}
                href={item.href}>
                {item.children}
              </Link>
            ))}
          </ul>
          <ul>
            <span className='text-primary tracking-wider text-2xl italic font-styled cursor-default pointer-events-none'>
              Redes Sociais
            </span>
            <ul className='flex flex-row gap-2 mt-2'>
              <Link
                className='hover:scale-105 transition-all'
                target='_blank'
                href='https://www.facebook.com/felipeelacerdaa/'
                rel='noreferrer'>
                <Facebook />
              </Link>
              <Link
                className='hover:scale-105 transition-all'
                target='_blank'
                href='https://www.instagram.com/lacerda_barbershopp/'
                rel='noreferrer'>
                <Instagram />
              </Link>
            </ul>
          </ul>
        </DrawerPanel>
      </DrawerPopup>
    </Drawer>
  );
}

export default MenuButton;
