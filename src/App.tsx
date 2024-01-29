import { useState, useEffect, lazy, Suspense } from "react";
import LetterInteraction from "./components/Letter-interaction";
import RobbersInteraction from "./components/Robbers-interaction";
import Loading from "./components/Loading";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./components/Button";

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
            <footer className="footer">
              <div className="text">
                <h2>Liked what you heard?</h2>
                <div className="split-paragraph">
                  <p className="text-white">
                    The Postal Trains is just one of the many stories of Train
                    world! Every month a new story is put in the spotlight. Next
                    months story: The Orient express.
                  </p>
                  <svg
                    width="2"
                    viewBox="0 0 2 115"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="split-paragraph--divider"
                  >
                    <path
                      d="M1 1L1 13L1 18M1 113.022L1 32M1 23L1 27"
                      stroke="#E5DBC6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p className="text-white">
                    Do you want to see a real postal train? Maybe walk around in
                    one and discover how the travelling post men worked? All
                    this, and much more, awaits you in Train World!
                  </p>
                </div>
                <Button
                  viewWidth={viewWidth}
                  textcolor="black"
                  text="Discover the museum"
                  color="white"
                ></Button>
              </div>
            </footer>
            <Header viewWidth={viewWidth} />
            <section className="chapters">
              <Origins viewWidth={viewWidth} />
              <TheTravellingPostMen viewWidth={viewWidth} />
              <RobbersInteraction />
              <PostByAPT viewWidth={viewWidth} />
              <EndOfAnEra viewWidth={viewWidth} />
              <LetterInteraction />
            </section>
          </div>
        </main>
        <nav></nav>
      </Suspense>
    </>
  );
}

export default App;
