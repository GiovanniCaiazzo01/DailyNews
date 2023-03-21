import React from "react";

const Logo = () => {
  return (
    <svg
      width="81.19999999999999px"
      height="122px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="209.4 14 81.19999999999999 122"
      style={{ background: " rgba(114, 29, 29, 0);" }}
      preserveAspectRatio="xMidYMid"
      fontSize={"64px"}
      fontFamily={"Arial Black"}
      dominantBaseline="central"
      textAnchor="middle"
    >
      <defs>
        <filter id="editing-extrude-glow">
          <feFlood floodColor="#d8ebf9" result="flood-1"></feFlood>
          <feMorphology
            operator="erode"
            radius="1"
            in="SourceAlpha"
            result="erode"
          ></feMorphology>
          <feComposite
            operator="in"
            in="flood-1"
            in2="erode"
            result="comp1"
          ></feComposite>
          <feConvolveMatrix
            order="3,3"
            divisor="1"
            in="comp1"
            result="convolve"
            kernelMatrix="0 0 0 1 1 1 0 0 0"
          ></feConvolveMatrix>
          <feOffset dx="-3" dy="0" in="convolve" result="extrude"></feOffset>
          <feComposite
            operator="in"
            in="flood-1"
            in2="extrude"
            result="comp-extrude"
          ></feComposite>
          <feFlood floodColor="#71c2cc" result="flood-2"></feFlood>
          <feComposite
            operator="in"
            in="flood-2"
            in2="SourceAlpha"
            result="comp2"
          ></feComposite>
          <feMorphology
            operator="dilate"
            radius="1"
            in="comp2"
            result="dilate"
          ></feMorphology>
          <feOffset dx="-4.5" dy="0" in="dilate" result="offset"></feOffset>
          <feGaussianBlur
            in="offset"
            stdDeviation="5.8"
            result="blur"
          ></feGaussianBlur>
          <feComponentTransfer in="blur" result="shadow">
            <feFuncA type="linear" slope="0.8" intercept="-0.2"></feFuncA>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode in="shadow"></feMergeNode>
            <feMergeNode in="comp-extrude"></feMergeNode>
            <feMergeNode in="SourceGraphic"></feMergeNode>
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#editing-extrude-glow)">
        <g transform="translate(227.44689685106277, 96.1200008392334)">
          <path
            d="M7.68 0L0.64 0L8.32-42.24L22.08-42.24L32.06-13.18L37.38-42.24L44.48-42.18L36.67 0L22.02 0L12.80-27.97L7.68 0Z"
            fill="#ebeef0"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export { Logo };
