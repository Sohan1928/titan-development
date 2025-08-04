const BoxSvg = () => {
  return (
    <svg
      width={360}
      height={142}
      viewBox="0 0 360 142"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <foreignObject x={-175} y={-175} width={710} height={492}>
        <div
          style={{
            backdropFilter: "blur(87.5px)",
            clipPath: "url(#bgblur_0_0_113_clip_path)",
            height: "100%",
            width: "100%",
          }}
        />
      </foreignObject>
      <rect
        data-figma-bg-blur-radius={175}
        x={0.5}
        y={0.5}
        width={359}
        height={141}
        rx={9.5}
        fill="url(#paint0_linear_0_113)"
        stroke="url(#paint1_linear_0_113)"
      />
      <defs>
        <clipPath id="bgblur_0_0_113_clip_path" transform="translate(175 175)">
          <rect x={0.5} y={0.5} width={359} height={141} rx={9.5} />
        </clipPath>
        <linearGradient
          id="paint0_linear_0_113"
          x1={0.00000521401}
          y1={142}
          x2={273.111}
          y2={-95.8071}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#28E0B2" stopOpacity={0.09} />
          <stop offset={1} stopColor="#28E0B2" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_0_113"
          x1={360}
          y1={142}
          x2={-6.958}
          y2={120.877}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#28E0B2" stopOpacity={0} />
          <stop offset={1} stopColor="#28E0B2" stopOpacity={0.3} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BoxSvg;
