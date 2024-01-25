import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { Hero } from "../assets/SVGs/hero";

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
      <div className="hero--text text">
        <h1 className="mb-30 text-red">At your posts, folks!</h1>
        <h2 className="mb-120">Traversing history on Belgiums postal trains</h2>
        <p className="laptop:text-right">
          Discover the magical history of the travelling post men and the postal
          trains of Belgium. Their history is written down, illustrated and
          transformed into fun games, all for you! What are you still waiting
          for?!
        </p>
      </div>
      <div className="absolute top-0 left-0 w-full z-10">
        <svg
          id="hero"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1640 1000"
        >
          <defs>
            <style>
              {`.cls-1, .cls-2 {
        stroke-linecap: round;
      }

      .cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7, .cls-8, .cls-9, .cls-10 {
        stroke: #de2216;
      }

      .cls-1, .cls-2, .cls-4, .cls-5, .cls-9, .cls-10 {
        stroke-linejoin: round;
      }

      .cls-1, .cls-6, .cls-9, .cls-11 {
        fill: #e5dbc6;
      }

      .cls-2, .cls-3, .cls-4, .cls-5, .cls-7, .cls-8 {
        fill: none;
      }

      .cls-3 {
        stroke-width: 1.5px;
      }

      .cls-3, .cls-6, .cls-7, .cls-8 {
        stroke-miterlimit: 10;
      }

      .cls-5 {
        stroke-width: 6px;
      }

      .cls-7 {
        stroke-width: 2px;
      }

      .cls-10, .cls-12 {
        fill: #de2216;
      }

      .cls-12, .cls-11 {
        stroke-width: 0px;
      }`}
            </style>
          </defs>
          {Hero}
        </svg>
      </div>
    </header>
  );
};

export default Header;
