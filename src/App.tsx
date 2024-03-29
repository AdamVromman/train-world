import { useState, useEffect, lazy, Suspense } from "react";
import LetterInteraction from "./components/Letter-interaction";
import RobbersInteraction from "./components/Robbers-interaction";
import Loading from "./components/Loading";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  const [viewWidth, setViewWidth] = useState(0);

  const Origins = lazy(() => import("./components/Origins"));
  const TheTravellingPostMen = lazy(
    () => import("./components/The-travelling-post-men")
  );
  const PostByAPT = lazy(() => import("./components/Post-by-APT"));
  const EndOfAnEra = lazy(() => import("./components/End-of-an-era"));

  const Header = lazy(() => import("./components/Header"));

  useEffect(() => {
    if (window) {
      window.addEventListener("resize", () => {
        setViewWidth(window.innerWidth);
      });
      setViewWidth(window.innerWidth);
    }
  }, [viewWidth]);

  useGSAP(() => {
    ScrollTrigger.config({ limitCallbacks: true });
  });

  return (
    <>
      <Suspense fallback={<Loading />}>
        <main className="main">
          <div className="content">
            <Header viewWidth={viewWidth} />
            <section className="chapters">
              <Origins viewWidth={viewWidth} />
              <TheTravellingPostMen viewWidth={viewWidth} />
              <RobbersInteraction viewWidth={viewWidth} />
              <PostByAPT viewWidth={viewWidth} />
              <EndOfAnEra viewWidth={viewWidth} />
              <LetterInteraction />
            </section>
            <Footer />
          </div>
        </main>
        <Nav />
      </Suspense>
    </>
  );
}

export default App;
