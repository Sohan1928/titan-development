const RightSideCircleSvg = () => {
  return (
    <svg
      width={972}
      height={2019}
      viewBox="0 0 972 2219"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity={0.4} filter="url(#filter0_f_0_250)">
        <circle
          cx={1109.5}
          cy={1109.5}
          r={345.5}
          fill="url(#paint0_linear_0_250)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_0_250"
          x={0}
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
            result="effect1_foregroundBlur_0_250"
          />
        </filter>
        <linearGradient
          id="paint0_linear_0_250"
          x1={764}
          y1={1455}
          x2={1455}
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

export default RightSideCircleSvg;
