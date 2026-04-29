import '@repo/ui/globals.css';
import type { Metadata } from 'next';
import { DM_Sans, Pattaya } from 'next/font/google';
import localFont from 'next/font/local';

const sans = DM_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
});

const pattaya = Pattaya({
  variable: '--font-styled',
  subsets: ['latin'],
  weight: '400',
});

const mono = localFont({
  src: [
    {
      path: '../fonts/Akzentica4FLight.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/Akzentica4FLight-Italic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../fonts/Akzentica4F.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Akzentica4F-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/Akzentica4FMedium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Akzentica4FMedium-Italic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../fonts/Akzentica4FSemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/Akzentica4FSemiBold-Italic.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../fonts/Akzentica4F-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Akzentica4F-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../fonts/Akzentica4FExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Lacerda Barbershop',
  description: 'Página Inicial',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={` ${pattaya.variable} ${mono.variable} ${sans.variable}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
