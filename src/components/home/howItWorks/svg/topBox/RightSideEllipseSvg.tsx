const RightSideEllipseSvg = () => {
  return (
    <svg
      width={74}
      height={74}
      viewBox="0 0 74 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_0_94)">
        <circle cx={37} cy={33} r={12} fill="url(#paint0_linear_0_94)" />
      </g>
      <defs>
        <filter
          id="filter0_d_0_94"
          x={0}
          y={0}
          width={74}
          height={74}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={12.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.156863 0 0 0 0 0.878431 0 0 0 0 0.698039 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_94"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_94"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_0_94"
          x1={25}
          y1={45}
          x2={49}
          y2={21}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#28E0B2" />
          <stop offset={1} stopColor="#28E0B2" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default RightSideEllipseSvg;
