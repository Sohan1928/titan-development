const TopBoxSvg = () => {
  return (
    <svg
      width={374}
      height={116}
      viewBox="0 0 374 116"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <foreignObject x={-175} y={-175} width={724} height={466}>
        <div
          style={{
            backdropFilter: "blur(87.5px)",
            clipPath: "url(#bgblur_0_0_23_clip_path)",
            height: "100%",
            width: "100%",
          }}
        />
      </foreignObject>
      <rect
        data-figma-bg-blur-radius={175}
        x={0.5}
        y={0.5}
        width={373}
        height={115}
        rx={9.5}
        fill="url(#paint0_linear_0_23)"
        stroke="url(#paint1_linear_0_23)"
      />
      <defs>
        <clipPath id="bgblur_0_0_23_clip_path" transform="translate(175 175)">
          <rect x={0.5} y={0.5} width={373} height={115} rx={9.5} />
        </clipPath>
        <linearGradient
          id="paint0_linear_0_23"
          x1={0.00000541678}
          y1={116}
          x2={224.079}
          y2={-132.134}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#28E0B2" stopOpacity={0.09} />
          <stop offset={1} stopColor="#28E0B2" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_0_23"
          x1={374}
          y1={116}
          x2={-6.45294}
          y2={88.149}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#28E0B2" stopOpacity={0} />
          <stop offset={1} stopColor="#28E0B2" stopOpacity={0.3} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default TopBoxSvg;
