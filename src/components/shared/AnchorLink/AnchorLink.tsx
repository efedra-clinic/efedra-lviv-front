'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export const AnchorLink = ({
  href,
  children,
  closeDropdown,
  offset = 90,
}: any) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent) => {
    if (href.startsWith('#') && pathname === '/') {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
    closeDropdown?.();
  };

  return (
    <>
      {pathname === '/' ? (
        <a href={href} onClick={handleClick}>
          {children}
        </a>
      ) : (
        <Link href={`/${href}`} onClick={handleClick}>
          {children}
        </Link>
      )}
    </>
  );
};
