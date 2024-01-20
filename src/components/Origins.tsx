import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Timeline1Desktop } from "../assets/SVGs/Timeline-1-desktop";

const Origins = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#Cloud-2", {
      x: -1000,
      scrollTrigger: {
        trigger: ".timeline",
        pin: true,
        end: "+=10000", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
    });
  });

  return (
    <article className="chapter">
      <div className="text">
        <h2>Origins.</h2>
      </div>

      <svg
        className="timeline"
        width="1640"
        height="750"
        viewBox="0 0 1640 750"
        fill="none"
      >
        <defs>
          <style>
            {`
            .cls-1, .cls-2 {
        stroke-linecap: round;
        stroke-linejoin: round;
      }

      .cls-1, .cls-2, .cls-3, .cls-4, .cls-5 {
        stroke: #cb352c;
      }

      .cls-1, .cls-3, .cls-4, .cls-6 {
        fill: #e5dbc6;
      }

      .cls-2, .cls-5 {
        fill: none;
      }

      .cls-3 {
        stroke-width: 2px;
      }

      .cls-3, .cls-4, .cls-5 {
        stroke-miterlimit: 10;
      }

      .cls-7 {
        fill: #cb352c;
      }

      .cls-7, .cls-6 {
        stroke-width: 0px;
      }
      `}
          </style>
        </defs>
        {Timeline1Desktop}
      </svg>
    </article>
  );
};

export default Origins;
