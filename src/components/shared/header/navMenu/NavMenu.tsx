'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { ArrowDownIcon } from '@/components/shared/icons/IconDownIcon';
import { AnchorLink } from '../../AnchorLink/AnchorLink';
import { twMerge } from 'tailwind-merge';
import { usePathname } from 'next/navigation';

interface NavMenuProps {
  navList: { title: string; link: string }[];
  anchorsNavList: { title: string; link: string }[];
  className?: string;
}

export default function NavMenu({
  navList,
  anchorsNavList,
  className = '',
}: NavMenuProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className={twMerge('relative', className)}>
      <ul className="flex flex-row items-center">
        {navList.map(({ title, link }) => (
          <li key={link}>
            <Link
              href={link}
              className={twMerge(
                'block px-[40px] py-[12px] w-full h-full text-[16px] font-normal leading-[16px] rounded-full xl:hover:bg-green-light-2/50 focus-visible:bg-green-light-2/50 transition duration-300 ease-in-out',
                pathname === link ? 'bg-green-light-2' : ''
              )}
            >
              {title}
              {link === '/' && (
                <button
                  onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                  type="button"
                  className="ml-[10px]"
                >
                  <ArrowDownIcon
                    className={`cursor-pointer ${isDropdownOpen && 'rotate-180'}`}
                  />
                </button>
              )}
            </Link>
          </li>
        ))}
      </ul>
      {isDropdownOpen && (
        <ul className="absolute top-full mt-2 left-0 flex flex-col gap-[12px] bg-green-light-2/90 rounded-[10px] p-4 z-10 max-w-[1000px]">
          {anchorsNavList.map(({ title, link }) => (
            <li
              key={link}
              className="w-full px-[10px] py-[6px] text-[16px] font-normal leading-[16px] text-white xl:hover:bg-green-light-2/50 focus-visible:bg-green-light-2/50 transition duration-300 ease-in-out"
            >
              <AnchorLink href={link} closeDropdown={closeDropdown} offset={80}>
                {title}
              </AnchorLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
