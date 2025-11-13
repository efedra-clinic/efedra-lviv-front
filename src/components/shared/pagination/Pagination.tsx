'use client';
import { useState, useEffect, ReactNode, RefObject } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import ArrowIconFilled from '../icons/ArrowIconFilled';
import clsx from 'clsx';

interface PaginationProps<T> {
  items: T[];
  renderItems: (items: T[]) => ReactNode;
  useItemsPerPage: () => number;
  scrollTargetRef: RefObject<HTMLElement | null>;
  className?: string;
}

export default function Pagination<T>({
  items,
  renderItems,
  useItemsPerPage,
  scrollTargetRef,
  className = '',
}: PaginationProps<T>) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const [currentPage, setCurrentPage] = useState(page);
  const itemsPerPage = useItemsPerPage();
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(parseInt(searchParams.get('page') || '1', 10));
  }, [searchParams]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    requestAnimationFrame(() => {
      scrollTargetRef.current?.scrollIntoView({
        block: 'start',
      });
    });

    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      <div key={currentPage} className={`${className}`}>
        {renderItems(currentItems)}
      </div>
      <div
        className={`${totalPages > 1 ? 'flex' : 'hidden'} justify-center items-center gap-[15px] mt-9 lg:mt-15 mx-auto`}
      >
        <button
          aria-label="left"
          className={clsx(
            `enabled:cursor-pointer w-[30px] h-[30px] lg:w-[54px] lg:h-[54px] rounded-[10px] flex items-center justify-center pointer-events-auto transition-filter 
          duration-300 xl:enabled:hover:brightness-[1.25] bg-green disabled:bg-white disabled:border disabled:border-green disabled:text-green`
          )}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={page === 1}
        >
          <ArrowIconFilled
            className={clsx(
              'w-[10px] h-[10px] lg:w-[22px] lg:h-[22px] rotate-180',
              page === 1 ? 'text-green' : 'text-white'
            )}
          />
        </button>

        <p className="text-[15px] font-normal leading-[133%]">
          {currentPage}/{totalPages}
        </p>

        <button
          aria-label="right"
          className={clsx(
            `enabled:cursor-pointer w-[30px] h-[30px] lg:w-[54px] lg:h-[54px] rounded-[10px] flex items-center justify-center pointer-events-auto transition-filter 
          duration-300 xl:enabled:hover:brightness-[1.25] bg-green disabled:bg-white disabled:border disabled:border-green disabled:text-green`
          )}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={page === totalPages}
        >
          <ArrowIconFilled
            className={clsx(
              'w-[10px] h-[10px] lg:w-[22px] lg:h-[22px]',
              page === totalPages ? 'text-green' : 'text-white'
            )}
          />
        </button>
      </div>
    </>
  );
}
