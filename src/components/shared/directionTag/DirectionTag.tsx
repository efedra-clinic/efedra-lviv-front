import Image from "next/image";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface DirectionTagProps {
  direction: string;
  className?: string;
}

export default function DirectionTag({
  direction,
  className = "",
}: DirectionTagProps) {
  return (
    <div
      className={twMerge(
        clsx(
          `flex items-center gap-[5px] shrink-0 w-fit text-[10px] xl:text-[12px] font-normal leading-[120%]`,
          className
        )
      )}
    >
      <Image
        src="/images/icons/price-tag.svg"
        alt="price-tag"
        width="11"
        height="11"
      />
      <p>{direction === "aesthetic" ? "Естетична медицина" : "Стоматологія"}</p>
    </div>
  );
}
