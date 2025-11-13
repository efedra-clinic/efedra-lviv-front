import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { calculateReadingTime } from '@/utils/calculateReadingTime';
import { Post } from '@/types/post';
import ClockIcon from '@/components/shared/icons/ClockIcon';

interface EstimatedReadingTimeProps {
  post: Post;
  className?: string;
}

export default function EstimatedReadingTime({
  post,
  className = '',
}: EstimatedReadingTimeProps) {
  const readingTime = calculateReadingTime(post);

  return (
    <div
      className={twMerge(
        clsx(
          `flex items-center gap-[5px] shrink-0 w-fit text-[10px] xl:text-[12px] font-normal leading-[120%]`,
          className
        )
      )}
    >
      <ClockIcon />

      <p>{readingTime} хв</p>
    </div>
  );
}
