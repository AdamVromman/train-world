import EndOfAnEra from "./components/End-of-an-era";
import Header from "./components/Header";
import LetterInteraction from "./components/Letter-interaction";
import Origins from "./components/Origins";
import PostByAPT from "./components/Post-by-APT";
import RobbersInteraction from "./components/Robbers-interaction";
import TheTravellingPostMen from "./components/The-travelling-post-men";

function App() {
  return (
    <>
      <main className="main">
        <div className="content">
          <Header />
          <section className="chapters">
            <Origins />
            <TheTravellingPostMen />
            <PostByAPT />
            <RobbersInteraction />
            <EndOfAnEra />
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
