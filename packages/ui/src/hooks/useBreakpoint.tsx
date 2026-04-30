import { useMediaQuery } from '@repo/ui/hooks/useMediaQuery';

export function useBreakpoint() {
  const sm = useMediaQuery('(min-width: 640px)');
  const md = useMediaQuery('(min-width: 768px)');
  const lg = useMediaQuery('(min-width: 1024px)');
  const xl = useMediaQuery('(min-width: 1280px)');
  const xxl = useMediaQuery('(min-width: 1536px)');

  return {
    sm,
    md,
    lg,
    xl,
    '2xl': xxl,
    isMobile: !sm,
    isTablet: sm && !lg,
    isDesktop: lg,
  } as const;
}
