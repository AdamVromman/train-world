import EndOfAnEra from "./components/End-of-an-era";
import Header from "./components/Header";
import Origins from "./components/Origins";
import PostByAPT from "./components/Post-by-APT";
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
            <EndOfAnEra />
          </section>
          <footer className="footer"></footer>
        </div>
      </main>
      <nav></nav>
    </>
  );
}

export default App;
