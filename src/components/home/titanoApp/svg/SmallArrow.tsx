const SmallArrow = () => {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 1L1 13"
        stroke="url(#paint0_linear_0_151)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 1H13V11"
        stroke="url(#paint1_linear_0_151)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_0_151"
          x1={1}
          y1={13}
          x2={13}
          y2={1}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#28E0B2" />
          <stop offset={1} stopColor="#28E0B2" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_0_151"
          x1={3}
          y1={11}
          x2={13}
          y2={1}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#28E0B2" />
          <stop offset={1} stopColor="#28E0B2" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SmallArrow;
