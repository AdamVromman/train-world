import { Suspense, lazy } from "react";
import Loading from "../../../components/Loading";

const Fill = lazy(() => import("../Fill"));
const Background1 = lazy(() => import("./Background1"));
const Background2 = lazy(() => import("./Background2"));
const Background3_a = lazy(() => import("./Background3-a"));
const Background3_b = lazy(() => import("./Background3-b"));
const Background4 = lazy(() => import("./Background4"));
const Tracks = lazy(() => import("../Tracks"));
const TrainLeft = lazy(() => import("./Train-left"));
const TrainRight = lazy(() => import("./Train-right"));
const Foreground1 = lazy(() => import("./Foreground1"));
const GradientBars = lazy(() => import("../GradientBars"));

export const MailByAPTTimeline = (
  <Suspense fallback={<Loading />}>
    <Fill />
    <Background4 />
    <g id="mail-by-APT--timeline_background-3">
      <Background3_a />
      <Background3_b />
    </g>

    <Background2 />
    <Background1 />
    <Tracks id="mail-by-APT--timeline" />
    <g id="mail-by-APT--timeline_train">
      <TrainLeft />
      <TrainRight />
    </g>
    <Foreground1 />
    <GradientBars />
  </Suspense>
);
