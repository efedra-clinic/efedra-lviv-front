import Image from "next/image";
import { formatDate } from "@/utils/formatDate";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface FormattedDateProps {
  createdAt: string;
  className?: string;
}

export default function FormattedDate({
  createdAt,
  className = "",
}: FormattedDateProps) {
  const formattedDate = formatDate(createdAt);

  return (
    <div
      className={twMerge(
        clsx(
          `flex items-center gap-1.5 text-[10px] xl:text-[12px] font-normal leading-none`,
          className
        )
      )}
    >
      <Image
        src="/images/icons/calendar.svg"
        alt="clock"
        width="12"
        height="12"
        className="mb-[1px]"
      />
      <p>{formattedDate}</p>
    </div>
  );
}
