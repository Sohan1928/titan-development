const LeftSideBoxCircle = () => {
  return (
    <svg
      width={283}
      height={283}
      viewBox="0 0 283 283"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_0_2675)">
        <path
          d="M141.854 164C129.969 163.99 118.543 159.415 109.935 151.221C101.327 143.027 96.1959 131.839 95.6009 119.97C95.0059 108.1 98.9928 96.4559 106.738 87.442C114.483 78.4281 125.395 72.7336 137.218 71.5349V90.2606C132.191 91.1112 127.494 93.329 123.643 96.6711C119.792 100.013 116.935 104.351 115.385 109.209C113.835 114.066 113.652 119.257 114.855 124.212C116.059 129.167 118.603 133.695 122.209 137.301C125.815 140.906 130.343 143.45 135.299 144.652C140.254 145.855 145.444 145.671 150.302 144.121C155.16 142.57 159.497 139.712 162.838 135.861C166.18 132.009 168.397 127.312 169.247 122.284H187.968C186.804 133.711 181.444 144.301 172.926 152.006C164.408 159.711 153.335 163.985 141.849 164H141.854ZM187.973 113.014H169.247C168.284 107.328 165.576 102.083 161.498 98.006C157.42 93.9288 152.175 91.2218 146.489 90.2606V71.5349C157.119 72.6222 167.049 77.3409 174.605 84.8958C182.162 92.4507 186.883 102.38 187.973 113.01V113.014Z"
          fill="url(#paint0_linear_0_2675)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_0_2675"
          x={0.542725}
          y={0.534912}
          width={282.43}
          height={282.465}
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
          <feOffset dy={24} />
          <feGaussianBlur stdDeviation={47.5} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.156863 0 0 0 0 0.878431 0 0 0 0 0.698039 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_2675"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_2675"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_0_2675"
          x1={95.5427}
          y1={164}
          x2={188.008}
          y2={71.5702}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#28E0B2" />
          <stop offset={1} stopColor="#28E0B2" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LeftSideBoxCircle;
