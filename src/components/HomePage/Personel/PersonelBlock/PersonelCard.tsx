import Image from 'next/image';

interface PersonelCardProps {
  name: string;
  position: string;
  photoUrl: string;
}

export const PersonelCard = ({
  name,
  position,
  photoUrl,
}: PersonelCardProps) => {
  return (
    <div className="relative p-[10px] lg:p-[20px] w-[256px] h-[319px] lg:w-[380px] lg:h-[474px] flex items-end rounded-[10px] lg:rounded-[20px] overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-[-10]">
        <Image src={photoUrl} alt={name} fill className="object-cover" />
      </div>
      <div className="w-full p-[15px] bg-white rounded-[10px] lg:rounded-[15px]">
        <p className="text-[16px] lg:text-[25px] leading-[100%] tracking-[-0.03em] text-black font-semibold uppercase lg:mb-[5px]">
          {name}
        </p>
        <p className="text-[13px] lg:text-[14px] leading-[120%] tracking-[-0.03em] text-black/50 font-medium">
          {position}
        </p>
      </div>
    </div>
  );
};
