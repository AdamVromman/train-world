import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { Hero } from "../assets/SVGs/Hero/Hero";

const Header = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to("#hero_mountains", {
      x: -3280,
      repeat: -1,
      ease: "none",
      duration: 45,
    });

    tl.to(
      "#hero_tracks",
      {
        x: -3280,
        repeat: -1,
        ease: "none",
        duration: 15,
      },
      "<"
    );

    tl.to(
      "#hero_clouds",
      {
        x: -2460,
        repeat: -1,
        ease: "none",
        duration: 60,
      },
      "<"
    );
  });

  return (
    <header className="hero">
      <div className="absolute z-20 m-15">
        <img className="w-[50px] laptop:w-[100px]" src="./Images/logo.png" />
      </div>
      <div className="w-full relative z-10">
        <svg
          id="hero"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1640 1000"
        >
          {Hero}
        </svg>
      </div>
      <div className="absolute left-0 top-0 hero--text text z-20">
        <h1 className="mb-30 text-red">At your posts, folks!</h1>
        <h2 className="mb-120">Traversing history on Belgiums postal trains</h2>
        <p className="laptop:text-right">
          Discover the magical history of the travelling post men and the postal
          trains of Belgium. Their history is written down, illustrated and
          transformed into fun games, all for you! What are you still waiting
          for?!
        </p>
      </div>
    </header>
  );
};

export default Header;
