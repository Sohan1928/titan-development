const RoundCircleSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="100"
      // height="100"
      viewBox="0 0 100 100"
      fill="none"
    >
      <foreignObject x="-274" y="-274" width="648" height="648">
        <div
          style={{
            backdropFilter: "blur(137px)",
            clipPath: "url(#bgblur_0_0_127_clip_path)",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </foreignObject>
      <circle
        data-figma-bg-blur-radius="274"
        cx="50"
        cy="50"
        r="49.5"
        fill="url(#paint0_linear_0_127)"
        stroke="url(#paint1_linear_0_127)"
      />
      <defs>
        <clipPath id="bgblur_0_0_127_clip_path" transform="translate(274 274)">
          <circle cx="50" cy="50" r="49.5" />
        </clipPath>
        <linearGradient
          id="paint0_linear_0_127"
          x1="1.44834e-06"
          y1="100"
          x2="119.309"
          y2="59.0226"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#28E0B2" stopOpacity="0.09" />
          <stop offset="1" stopColor="#28E0B2" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_0_127"
          x1="100"
          y1="100"
          x2="-2.21783"
          y2="97.6791"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#28E0B2" stopOpacity="0" />
          <stop offset="1" stopColor="#28E0B2" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default RoundCircleSvg;
