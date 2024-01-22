import Header from "./components/Header";
import Origins from "./components/Origins";

function App() {
  return (
    <>
      <main className="main">
        <div className="content">
          <Header />
          <section className="chapters">
            <Origins></Origins>
          </section>
          <footer className="footer"></footer>
        </div>
      </main>
      <nav></nav>
    </>
  );
}

export default App;
