import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { Hero } from "../assets/SVGs/Hero/Hero";

interface Props {
  viewWidth: number;
}

const Header = ({ viewWidth }: Props) => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
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
  });

  return (
    <header id="start" className="hero">
      <div className="absolute z-20 m-15">
        <img className="w-[50px] laptop:w-[100px]" src="./Images/logo.png" />
      </div>
      <div className="w-full relative z-10">
        <svg
          id="hero"
          viewBox={`${viewWidth > 768 ? "0" : "375"} 0 ${
            viewWidth > 768 ? "1640" : "900"
          } 1000`}
        >
          {Hero}
        </svg>
      </div>
      <div className=" hero--text text">
        <h1 className="mb-120 laptop:mb-30 text-red">To my dearest..</h1>
        <h2 className="mb-30 laptop:mb-120">
          A love-letter to our postal trains.
        </h2>
        <p className="font-brix text-18 laptop:text-right laptop:font-nitti-cameo laptop:text-28 leading-normal max-w-[600px]">
          Discover the magic of the travelling post men and the postal trains of
          Belgium. Their history is written down and illustrated just for you.
        </p>
      </div>
    </header>
  );
};

export default Header;
