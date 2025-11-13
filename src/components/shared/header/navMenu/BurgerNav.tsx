import Link from 'next/link';

interface BurgerNavProps {
  pagesNavList: { title: string; link: string }[];
  anchorsNavList: { title: string; link: string }[];
  className?: string;
  onClick?: () => void;
}

export default function BurgerNav({
  pagesNavList,
  anchorsNavList,
  className = '',
  onClick,
}: BurgerNavProps) {
  return (
    <nav className={className}>
      <ol className="text-white [counter-reset:section]">
        {pagesNavList.map(({ title, link }, index) => (
          <li
            key={link}
            className="border-t border-opacity-50 border-[#FFFFFF80]"
          >
            <Link
              onClick={onClick}
              href={link}
              className="relative block py-[15px] text-[100%] font-normal leading-[20px] uppercase active:text-beige focus-visible:text-beige transition duration-300 ease-in-out [counter-increment:section] before:content-['0'_counter(section)] before:text-white before:opacity-50 before:text-[14px] before:font-semibold before:leading-[100%] before:tracking-[-0.05em] before:uppercase before:absolute before:right-0 before:top-[50%] before:translate-y-[-50%]"
            >
              {title}
            </Link>
            {index === 0 && (
              <ul className="pl-[20px]">
                {anchorsNavList.map(({ title, link }) => (
                  <li
                    key={link}
                    className="border-t border-opacity-15 border-[#FFFFFF26]"
                  >
                    <Link
                      onClick={onClick}
                      href={link}
                      className="block py-[15px] text-[13px] font-normal leading-[110%] tracking-[-0.05em] uppercase active:text-beige xl:hover:text-beige focus-visible:text-beige transition duration-300 ease-in-out"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
