import * as motion from "motion/react-client";
import { listVariants, iconItemVariants } from "@/utils/animationVariants";

interface StepsIconProps {
  variant: "blue" | "beige";
  className?: string;
}

export default function StepsIconMob({
  variant,
  className = "",
}: StepsIconProps) {
  return (
    <motion.svg
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.4 }}
      variants={listVariants({ staggerChildren: 0.5, delayChildren: 0 })}
      width="114"
      height="263"
      viewBox="0 0 114 263"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="steps icon"
      className={className}
    >
      <path
        d="M78.2232 23.957C43.0647 48.9347 20.1523 89.811 20.1523 135.999C20.1523 182.187 43.0647 223.063 78.2232 248.041"
        stroke="url(#paint0_linear_14_405)"
        strokeWidth="1.34752"
      />
      <path
        d="M63.4424 209.827C77.9535 209.827 89.708 221.502 89.708 235.894C89.7078 250.285 77.9534 261.959 63.4424 261.959C48.9313 261.959 37.1759 250.285 37.1758 235.894C37.1758 221.502 48.9312 209.827 63.4424 209.827Z"
        fill="white"
        stroke="url(#paint1_linear_14_405)"
        strokeWidth="1.34752"
      />

      <path
        d="M86.4287 1.41895C100.94 1.41913 112.694 13.0942 112.694 27.4854C112.694 41.8763 100.94 53.5506 86.4287 53.5508C71.9176 53.5508 60.1623 41.8764 60.1621 27.4854C60.1621 13.0941 71.9175 1.41895 86.4287 1.41895Z"
        fill="white"
        stroke="url(#paint2_linear_14_405)"
        strokeWidth="1.34752"
      />

      <path
        d="M26.9404 106.93C41.4515 106.93 53.2061 118.605 53.2061 132.996C53.2059 147.387 41.4514 159.061 26.9404 159.062C12.4293 159.062 0.673986 147.387 0.673828 132.996C0.673828 118.605 12.4292 106.93 26.9404 106.93Z"
        fill="white"
        stroke="url(#paint3_linear_14_405)"
        strokeWidth="1.34752"
      />
      <motion.path
        viewport={{ once: true, amount: 0.2 }}
        variants={iconItemVariants}
        d="M86.3846 36.3145V20.1865H83.3606V18.5785H88.1366V36.3145H86.3846Z"
        fill="#1E1E1E"
      />
      <motion.path
        viewport={{ once: true, amount: 0.2 }}
        variants={iconItemVariants}
        d="M20.9443 141.825V140.217L27.1603 134.217C28.7443 132.705 28.7443 132.705 29.2723 132.057C30.1363 131.049 30.5203 130.137 30.5203 129.081C30.5203 126.921 28.9123 125.385 26.6803 125.385C25.1203 125.385 23.8483 126.177 23.2483 127.473C22.9603 128.097 22.8403 128.769 22.8403 129.825H21.0883C21.0883 128.577 21.1603 128.073 21.4723 127.233C22.2883 125.073 24.2323 123.777 26.7043 123.777C29.9443 123.777 32.2963 126.033 32.2963 129.177C32.2963 131.073 31.5283 132.393 29.0323 134.769L23.3443 140.217H32.2003V141.825H20.9443Z"
        fill="#1E1E1E"
      />
      <motion.path
        viewport={{ once: true, amount: 0.2 }}
        variants={iconItemVariants}
        d="M60.3743 231.403H58.6223C58.7183 228.499 60.4463 226.675 63.1103 226.675C65.7503 226.675 67.5743 228.523 67.5743 231.163C67.5743 232.627 66.9983 233.707 65.7503 234.571C67.7423 235.579 68.7503 237.211 68.7503 239.347C68.7503 242.539 66.3023 245.035 63.2063 245.035C60.9983 245.035 59.1023 243.931 58.1423 242.131C57.6863 241.267 57.4943 240.403 57.4463 239.179H59.1983C59.2943 240.475 59.4863 241.123 59.9663 241.795C60.6863 242.827 61.8383 243.427 63.1343 243.427C65.3183 243.427 66.9743 241.699 66.9743 239.443C66.9743 237.571 65.7503 235.987 63.9743 235.555C63.4943 235.459 63.0863 235.435 61.9103 235.411V233.827C62.6063 233.875 62.6303 233.875 62.7743 233.875C64.6223 233.875 65.7983 232.795 65.7983 231.067C65.7983 229.435 64.6943 228.283 63.1103 228.283C61.3823 228.283 60.3983 229.411 60.3743 231.403Z"
        fill="#1E1E1E"
      />
      <defs>
        <linearGradient
          id="paint0_linear_14_405"
          x1="49.1878"
          y1="23.957"
          x2="49.1878"
          y2="248.041"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={`${variant === "blue" ? "#2080C0" : "#DDAD80"}`} />
          <stop
            offset="0.447115"
            stopColor={`${variant === "blue" ? "#8BBCDD" : "#FADFC6"}`}
          />
          <stop
            offset="1"
            stopColor={`${variant === "blue" ? "#2080C0" : "#DDAD80"}`}
          />
        </linearGradient>
        <linearGradient
          id="paint1_linear_14_405"
          x1="63.442"
          y1="209.153"
          x2="63.442"
          y2="262.633"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={`${variant === "blue" ? "#2080C0" : "#DDAD80"}`} />
          <stop
            offset="0.447115"
            stopColor={`${variant === "blue" ? "#8BBCDD" : "#FADFC6"}`}
          />
          <stop
            offset="1"
            stopColor={`${variant === "blue" ? "#2080C0" : "#DDAD80"}`}
          />
        </linearGradient>
        <linearGradient
          id="paint2_linear_14_405"
          x1="86.4284"
          y1="0.745117"
          x2="86.4284"
          y2="54.225"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={`${variant === "blue" ? "#2080C0" : "#DDAD80"}`} />
          <stop
            offset="0.447115"
            stopColor={`${variant === "blue" ? "#8BBCDD" : "#FADFC6"}`}
          />
          <stop
            offset="1"
            stopColor={`${variant === "blue" ? "#2080C0" : "#DDAD80"}`}
          />
        </linearGradient>
        <linearGradient
          id="paint3_linear_14_405"
          x1="26.9401"
          y1="106.256"
          x2="26.9401"
          y2="159.736"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={`${variant === "blue" ? "#2080C0" : "#DDAD80"}`} />
          <stop
            offset="0.447115"
            stopColor={`${variant === "blue" ? "#8BBCDD" : "#FADFC6"}`}
          />
          <stop
            offset="1"
            stopColor={`${variant === "blue" ? "#2080C0" : "#DDAD80"}`}
          />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
