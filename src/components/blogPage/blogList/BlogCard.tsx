import MainButton from '@/components/shared/buttons/MainButton';
import DirectionTag from '@/components/shared/directionTag/DirectionTag';
import EstimatedReadingTime from '@/components/shared/estReadingTime/estimatedReadingTime';
import { Post } from '@/types/post';
import Image from 'next/image';
import Link from 'next/link';
import FormattedDate from '@/components/shared/formattedDate/FormattedDate';
import { urlFor } from '@/utils/getUrlForSanityImage';

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  const { title, image, direction, slug, description, createdAt } = post;

  return (
    <Link
      href={`/blog/${slug}`}
      className="flex flex-col h-full rounded-[20px] border overflow-hidden"
    >
      <div className="relative w-full h-[223px] lg:h-[245px]">
        <Image
          src={urlFor(image).fit('crop').url()}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow py-4 px-2">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <EstimatedReadingTime post={post} />
            <FormattedDate createdAt={createdAt} />
            <DirectionTag direction={direction} />
          </div>
          <h2 className="mb-2 text-[16px] font-normal leading-[133%] uppercase">
            {title}
          </h2>
        </div>
        <div>
          <p className="mb-5 text-[12px] font-normal leading-[120%] line-clamp-4">
            {description}
          </p>
          <MainButton className="h-[42px] text-[14px] font-medium bg-green-light-2 text-white">
            Читаті далі
          </MainButton>
        </div>
      </div>
    </Link>
  );
}
