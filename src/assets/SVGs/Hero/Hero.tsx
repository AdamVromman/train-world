import { lazy } from "react";

const Clouds = lazy(() => import("./Clouds"));
const Mountains = lazy(() => import("./Mountains"));
const Tracks = lazy(() => import("./Tracks"));
const Train = lazy(() => import("./Train"));

export const Hero = (
  <>
    <rect
      id="hero_fill"
      className="cls-11 fill-white stroke-width-0"
      width="3280"
      height="1000"
    />
    {Clouds}
    {Mountains}
    {Tracks}
    {Train}
    <g className="timeline--gradient-bars">
      <rect
        className="cls-6 stroke-width-0 fill-white"
        width="100"
        height="1000"
      />
      <rect
        className="cls-6 stroke-width-0 fill-white"
        x="1540"
        width="100"
        height="1000"
      />
    </g>
  </>
);
