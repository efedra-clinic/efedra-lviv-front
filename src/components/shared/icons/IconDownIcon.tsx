interface IconDownIconProps {
  className?: string;
}

export const ArrowDownIcon = ({ className }: IconDownIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="9"
      viewBox="0 0 13 9"
      className={className}
    >
      <path
        d="M1.06 0.932456L1.90735e-06 1.99346L5.777 7.77246C5.86957 7.86561 5.97965 7.93954 6.1009 7.98999C6.22215 8.04043 6.35218 8.06641 6.4835 8.06641C6.61483 8.06641 6.74486 8.04043 6.86611 7.98999C6.98736 7.93954 7.09743 7.86561 7.19 7.77246L12.97 1.99346L11.91 0.933456L6.485 6.35746L1.06 0.932456Z"
        fill="currentColor"
      />
    </svg>
  );
};
