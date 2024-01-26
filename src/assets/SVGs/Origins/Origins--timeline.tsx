import { Suspense, lazy } from "react";
import Loading from "../../../components/Loading";

const Fill = lazy(() => import("../Fill"));
const Background1 = lazy(() => import("./Background1"));
const Background2 = lazy(() => import("./Background2"));
const Background3 = lazy(() => import("./Background3"));
const Background4 = lazy(() => import("./Background4"));
const Tracks = lazy(() => import("../Tracks"));
const Train = lazy(() => import("./Train"));
const Foreground1 = lazy(() => import("./Foreground1"));
const GradientBars = lazy(() => import("../GradientBars"));

export const OriginsTimeline = (
  <Suspense fallback={<Loading />}>
    <Fill />
    <Background4 />
    <Background3 />
    <Background2 />
    <Background1 />
    <Tracks id="origins--timeline" />
    <Train />
    <Foreground1 />
    <GradientBars />
  </Suspense>
);
