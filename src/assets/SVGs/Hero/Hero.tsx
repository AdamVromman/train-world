import { Clouds } from "./Clouds";
import { Mountains } from "./Mountains";
import { Tracks } from "./Tracks";
import { Train } from "./Train";

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
  </>
);
