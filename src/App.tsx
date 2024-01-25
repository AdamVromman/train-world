import { useState, useEffect } from "react";
import EndOfAnEra from "./components/End-of-an-era";
import Header from "./components/Header";
import LetterInteraction from "./components/Letter-interaction";
import Origins from "./components/Origins";
import PostByAPT from "./components/Post-by-APT";
import RobbersInteraction from "./components/Robbers-interaction";
import TheTravellingPostMen from "./components/The-travelling-post-men";

function App() {
  const [viewWidth, setViewWidth] = useState(0);

  useEffect(() => {
    if (window) {
      window.addEventListener("resize", () => {
        setViewWidth(window.innerWidth);
      });
      setViewWidth(window.innerWidth);
    }
  }, [viewWidth]);

  return (
    <>
      <main className="main">
        <div className="content">
          <Header />
          <section className="chapters">
            <Origins viewWidth={viewWidth} />
            <TheTravellingPostMen viewWidth={viewWidth} />
            <PostByAPT viewWidth={viewWidth} />
            <RobbersInteraction />
            <EndOfAnEra viewWidth={viewWidth} />
            <LetterInteraction />
          </section>
          <footer className="footer"></footer>
        </div>
      </main>
      <nav></nav>
    </>
  );
}

export default App;
