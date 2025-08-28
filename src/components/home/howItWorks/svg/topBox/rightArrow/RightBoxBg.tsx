const RightBoxBg = () => {
  return (
    <svg
      // width={560}
      // height={414}
      viewBox="0 0 560 414"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity={0.1} filter="url(#filter0_f_0_46)">
        <rect
          width={360}
          height={214}
          transform="matrix(-1 0 0 1 460 100)"
          fill="url(#paint0_linear_0_46)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_0_46"
          x={0}
          y={0}
          width={560}
          height={414}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation={50}
            result="effect1_foregroundBlur_0_46"
          />
        </filter>
        <linearGradient
          id="paint0_linear_0_46"
          x1={-0.0000013411}
          y1={214}
          x2={187.992}
          y2={-102.249}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#28E0B2" />
          <stop offset={1} stopColor="#28B4E0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default RightBoxBg;
