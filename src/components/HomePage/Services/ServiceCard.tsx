import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  categoryImageUrl: string;
  number: number;
}

export const ServiceCard = ({
  title,
  categoryImageUrl,
  number,
}: ServiceCardProps) => {
  return (
    <div className="relative w-[143px] h-[117px] sm:w-[296px] sm:h-[243px] lg:w-[380px] lg:h-[293px] pt-[8px] lg:pt-[25px] pb-[6px] lg:pb-[20px] px-[6px] lg:px-[20px] flex flex-col justify-between rounded-[15px] lg:rounded-[20px] overflow-hidden">
      <div className="flex items-center gap-[8px] lg:gap-[15px]">
        <div className="text-[18px] lg:text-[30px] leading-[100%] tracking-[-0.05em] text-white font-medium">
          {`0${number}`}
        </div>
        <div className="w-full h-[1px] bg-white"></div>
      </div>
      <div className="absolute inset-0 w-full h-full z-[-10]">
        <Image
          src={categoryImageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <p className="text-[10px] lg:text-[16px] leading-[110%] tracking-[-0.05em] text-black font-medium w-full text-center py-[8px] lg:py-[15px] bg-white rounded-[10px]">
        {title}
      </p>
    </div>
  );
};
