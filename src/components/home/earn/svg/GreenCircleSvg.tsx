const GreenCircleSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="79"
      height="79"
      viewBox="0 0 79 79"
      fill="none"
    >
      <g filter="url(#filter0_d_0_96)">
        <circle
          cx="14.5"
          cy="14.5"
          r="14.5"
          transform="matrix(-1 0 0 1 54 21)"
          fill="url(#paint0_linear_0_96)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_0_96"
          x="0"
          y="0"
          width="79"
          height="79"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="12.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.156863 0 0 0 0 0.878431 0 0 0 0 0.698039 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_96"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_96"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_0_96"
          x1="-1.08033e-07"
          y1="29"
          x2="29"
          y2="-1.08033e-07"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#28E0B2" />
          <stop offset="1" stopColor="#28E0B2" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GreenCircleSvg;
