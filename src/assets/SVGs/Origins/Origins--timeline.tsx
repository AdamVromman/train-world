import { Fill } from "../Fill";
import { GradientBars } from "../GradientBars";
import { Background1 } from "./Background1";
import { Background2 } from "./Background2";
import { Background3 } from "./Background3";
import { Background4 } from "./Background4";
import { Foreground1 } from "./Foregrond1";
import { Train } from "./Train";
import Tracks from "../Tracks";

export const OriginsTimeline = (
  <>
    {Fill}
    {Background4}
    {Background3}
    {Background2}
    {Background1}
    <Tracks id="origins--timeline" />
    {Train}
    {Foreground1}
    {GradientBars}
  </>
);
