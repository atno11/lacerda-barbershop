import { cn } from '@repo/ui/lib/utils';
import Link from 'next/link';

function TransparentLink({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      {...props}
      className={cn(
        'px-4 h-10 flex items-center justify-between gap-3',
        'uppercase text-sm font-semibold tracking-wide',
        'cursor-pointer transition-all border border-white/10',
        'hover:border-white/20 hover:bg-white/5',
        'active:border-white/20 active:bg-white/5',
        className,
      )}>
      {children}
    </Link>
  );
}

export default TransparentLink;
