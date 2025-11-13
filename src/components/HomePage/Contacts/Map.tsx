import { MAP_URL } from '@/constants/constants';
import clsx from 'clsx';

export const Map = ({
  className,
  zoom = 0.5,
}: {
  className?: string;
  zoom?: number;
}) => {
  return (
    <div
      className={clsx(
        'w-full h-full rounded-[20px] overflow-hidden',
        className
      )}
    >
      <h3 className="sr-only">Мапа</h3>
      <iframe
        src={MAP_URL}
        width="100%"
        height="100%"
        style={{ border: 0, height: '100%', zoom }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Мапа розташування Efedra"
      />
    </div>
  );
};
