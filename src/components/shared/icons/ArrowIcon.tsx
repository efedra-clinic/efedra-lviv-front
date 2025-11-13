interface ArrowIconProps {
  className?: string;
  strokeColor?: string;
}

export default function ArrowIcon({
  className,
  strokeColor = "",
}: ArrowIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="11"
      viewBox="0 0 13 11"
      fill="none"
      aria-label="arrow icon"
      className={className}
    >
      <path
        d="M4.40067 0.643644C4.60889 0.674988 4.91004 0.720826 5.28059 0.777884C6.02155 0.891979 7.04182 1.05075 8.16274 1.22623L12.0924 1.84134L11.4758 5.78052L10.8584 9.72027L9.73543 9.54449L10.1642 6.81444L10.614 3.93602L10.67 3.57853L0.894074 10.7082L0.227718 9.79452L10.0036 2.66485L9.64614 2.60889L6.76793 2.15766L4.03766 1.73029L4.12395 1.17905C4.1538 0.987599 4.18226 0.812861 4.20399 0.685549C4.20821 0.660845 4.21182 0.637473 4.21546 0.61675C4.26485 0.624012 4.32696 0.632549 4.40067 0.643644ZM4.09051 0.59789C4.08948 0.597839 4.08862 0.59827 4.08835 0.598252L4.08641 0.597249C4.0873 0.597346 4.08871 0.597669 4.09051 0.59789Z"
        fill="currentColor"
        stroke={strokeColor}
        strokeWidth="0.3"
      />
    </svg>
  );
}
