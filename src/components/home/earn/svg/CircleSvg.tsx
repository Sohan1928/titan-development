const CircleSvg = () => {
  return (
    <svg
      width={1600}
      height={2219}
      viewBox="0 0 1600 2219"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity={0.5} filter="url(#filter0_f_0_18)">
        <circle
          cx={799.5}
          cy={1109.5}
          r={345.5}
          fill="url(#paint0_linear_0_18)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_0_18"
          x={-310}
          y={0}
          width={2219}
          height={2219}
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
            stdDeviation={382}
            result="effect1_foregroundBlur_0_18"
          />
        </filter>
        <linearGradient
          id="paint0_linear_0_18"
          x1={454}
          y1={1455}
          x2={1145}
          y2={764}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#28E0B2" />
          <stop offset={1} stopColor="#28B4E0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CircleSvg;
