interface HeroArrowProps {
  className?: string;
  strokeColor?: string;
}

export const HeroArrow = ({ className, strokeColor }: HeroArrowProps) => {
  return (
    <svg
      width="19"
      height="22"
      viewBox="0 0 19 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 12L9.5 20.5L18 12"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 0.999999L9.5 9.5L18 1"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
