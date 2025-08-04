const PortfolioGreenCircleSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
    >
      <g filter="url(#filter0_d_0_210)">
        <circle cx="35" cy="31" r="10" fill="url(#paint0_linear_0_210)" />
      </g>
      <defs>
        <filter
          id="filter0_d_0_210"
          x="0"
          y="0"
          width="70"
          height="70"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_0_210"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_210"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_0_210"
          x1="25"
          y1="41"
          x2="45"
          y2="21"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#28E0B2" />
          <stop offset="1" stop-color="#28E0B2" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default PortfolioGreenCircleSvg;
