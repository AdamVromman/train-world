import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Timeline1Desktop } from "../assets/SVGs/Timeline-1-desktop";

const Origins = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".timeline",
        pin: true,
        end: "+=99999", // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
    });

    tl.to("#Timeline-1_tracks", {
      x: -10000,
    });

    tl.to(
      "#Timeline-1_background-3",
      {
        x: -2186,
      },
      "<"
    );

    tl.to(
      "#Timeline-1_background-2",
      {
        x: -3280,
      },
      "<"
    );

    tl.to(
      "#Timeline-1_background-1",
      {
        x: -4920,
      },
      "<"
    );
  });

  return (
    <article className="chapter">
      <div className="text">
        <h2>Origins.</h2>
        <p>
          It didn't take long for Belgium to start using its rail network to
          transport mail. Two years after the first trains started riding
          through the country, a decree was signed to allow the{" "}
          <span className="p--bold">collaboration</span> between{" "}
          <span className="p--bold">the postal services</span> and{" "}
          <span className="p--bold">the Belgian railways.</span> The first test
          run ran between Brussels and Antwerp and was held in September 1940.
          This was the first time that post was transported via train on the
          European mainland!
        </p>
        <p>
          <span className="p--bold">Special carriages</span> were attached to
          the regular trains. These carriages were especially made so that{" "}
          <span className="p--bold">the post</span> could be{" "}
          <span className="p--bold">sorted during the trip!</span> This idea
          came straight from England. They had travelling post offices since
          1838.
        </p>
      </div>
      <svg
        className="timeline"
        width="1640"
        height="300"
        viewBox="0 0 1640 1000"
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
      <p>
        The use of the post trains <span className="p--bold">kept growing</span>{" "}
        throughout the 19th century. First, a connection was made between
        Brussels and Tubeke, which was extended to Bergen only a year later.
        Then, in 1843, three new lines were added: Bergen - Quievrain, Ghent -
        Moeskroen and Luik - Verviers. A royal decree in 1850 allowed{" "}
        <span className="p--bold">the use</span> of almost{" "}
        <span className="p--bold">the whole train network</span> for the
        transportation of post.
      </p>
    </article>
  );
};

export default Origins;
