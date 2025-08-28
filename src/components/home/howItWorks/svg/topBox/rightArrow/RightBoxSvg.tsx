const RightBoxSvg = () => {
  return (
    <svg
      // width={360}
      // height={214}
      viewBox="0 0 360 214"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <foreignObject x={-175} y={-175} width={710} height={564}>
        <div
          style={{
            backdropFilter: "blur(87.5px)",
            clipPath: "url(#bgblur_0_0_45_clip_path)",
            height: "100%",
            width: "100%",
          }}
        />
      </foreignObject>
      <rect
        data-figma-bg-blur-radius={175}
        x={-0.5}
        y={0.5}
        width={359}
        height={213}
        rx={9.5}
        transform="matrix(-1 0 0 1 359 0)"
        fill="url(#paint0_linear_0_45)"
        stroke="url(#paint1_linear_0_45)"
      />
      <defs>
        <clipPath id="bgblur_0_0_45_clip_path" transform="translate(175 175)">
          <rect
            x={-0.5}
            y={0.5}
            width={359}
            height={213}
            rx={9.5}
            transform="matrix(-1 0 0 1 359 0)"
          />
        </clipPath>
        <linearGradient
          id="paint0_linear_0_45"
          x1={0.00000521401}
          y1={214}
          x2={360}
          y2={6}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#28E0B2" stopOpacity={0.09} />
          <stop offset={1} stopColor="#28E0B2" stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_0_45"
          x1={360}
          y1={214}
          x2={-7.63754}
          y2={199.958}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#28E0B2" stopOpacity={0} />
          <stop offset={1} stopColor="#28E0B2" stopOpacity={0.3} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default RightBoxSvg;
