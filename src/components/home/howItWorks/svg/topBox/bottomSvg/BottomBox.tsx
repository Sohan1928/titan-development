const BottomBox = () => {
  return (
    <svg
      // width={264}
      // height={133}
      viewBox="0 0 264 133"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <foreignObject x={-175} y={-175} width={614} height={483}>
        <div
          style={{
            backdropFilter: "blur(87.5px)",
            clipPath: "url(#bgblur_0_0_137_clip_path)",
            height: "100%",
            width: "100%",
          }}
        />
      </foreignObject>
      <rect
        data-figma-bg-blur-radius={175}
        x={0.5}
        y={0.5}
        width={263}
        height={132}
        rx={9.5}
        fill="url(#paint0_linear_0_137)"
        stroke="url(#paint1_linear_0_137)"
      />
      <defs>
        <clipPath id="bgblur_0_0_137_clip_path" transform="translate(175 175)">
          <rect x={0.5} y={0.5} width={263} height={132} rx={9.5} />
        </clipPath>
        <linearGradient
          id="paint0_linear_0_137"
          x1={0.00000382361}
          y1={133}
          x2={240.398}
          y2={-30.891}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#28E0B2" stopOpacity={0.09} />
          <stop offset={1} stopColor="#28E0B2" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_0_137"
          x1={264}
          y1={133}
          x2={-5.44688}
          y2={120.856}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#28E0B2" stopOpacity={0} />
          <stop offset={1} stopColor="#28E0B2" stopOpacity={0.3} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BottomBox;
