const Nav = () => {
  return (
    <nav id="nav" className="nav">
      <div className="max-w-[1640px] flex flex-row justify-between">
        <button className="nav--language">EN</button>
        <div className="nav--timeline">
          <a href="#start">Start</a>
          <hr />
          <a href="#origins">Origins.</a>
          <hr />
          <a href="#travelling-post-men">The Travelling post men.</a>
          <hr />
          <a href="#post-by-apt">Post by APT.</a>
          <hr />
          <a href="#end-of-an-era">End of an era.</a>
          <hr />
          <a href="#end">End</a>
        </div>
        <div></div>
      </div>
    </nav>
  );
};

export default Nav;
