import Origins from "./components/Origins";

function App() {
  return (
    <>
      <main className="main">
        <div className="content">
          <header className="hero"></header>
          <section className="chapters">
            <Origins></Origins>
            <div className="h-[2000px]"></div>
          </section>
          <footer className="footer"></footer>
        </div>
      </main>
      <nav></nav>
    </>
  );
}

export default App;
