import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface Props {
  children: JSX.Element;
  id: string;
  viewWidth: number;
}

const Timeline = ({ children, id, viewWidth }: Props) => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${id}`,
        pin: true,
        start: "center center",
        end: "+=3000",
        scrub: 1,
      },
    });

    if (id === "origins--timeline") {
      tl.to(
        `.${id}_wheel`,
        {
          rotation: 3600,
          transformOrigin: "50% 50%",
          duration: 1.2,
        },
        0
      );
    }

    if (id === "travelling-post-men--timeline") {
      tl.to(
        `.${id}_jumping`,
        {
          y: -15,
          duration: 0.05,
          ease: "power4.out",
          stagger: 0.01,
        },
        0.5
      );

      tl.to(
        `.${id}_jumping`,
        {
          y: 0,
          duration: 0.05,
          ease: "power4.in",
          stagger: 0.01,
          delay: 0.05,
        },
        "<"
      );
    }

    tl.from(
      `#${id}_train`,
      {
        x: -1640,
      },
      0
    )
      .to(
        `#${id}_foreground-1`,
        {
          x: -10000,
        },
        ">"
      )
      .to(
        `#${id}_tracks`,
        {
          x: -8360,
        },
        "<"
      )
      .to(
        `#${id}_background-4`,
        {
          x: -546,
        },
        "<"
      )
      .to(
        `#${id}_background-3`,
        {
          x: -1640,
        },
        "<"
      )
      .to(
        `#${id}_background-2`,
        {
          x: -3280,
        },
        "<"
      )
      .to(
        `#${id}_background-1`,
        {
          x: -4920,
        },
        "<"
      )
      .to(
        `#${id}_train`,
        {
          x: 1640,
        },
        ">"
      );
  });

  return (
    <div className="w-screen max-w-[1640px] mb-60 laptop:mb-120">
      <svg
        className={`${id} stroke-2 laptop:stroke-1`}
        viewBox={`${viewWidth > 400 ? "0" : "375"} 0 ${
          viewWidth > 400 ? "1640" : "750"
        } 750`}
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <defs>
          <style>
            {`
              .stroke-width-2 {
                stroke-width: 2;
              }

               .stroke-miter-limit-10 {
                stroke-miterlimit: 10;
              }

              .stroke-width-0 {
                stroke-width: 0;
              }

              .stroke-width-6 {
                stroke-width: 6;
              }
            `}
          </style>
          <linearGradient id="left-to-right">
            <stop offset="0%" stopColor="#E5DBC6" stopOpacity={100} />
            <stop offset="10%" stopColor="#E5DBC6" stopOpacity={100} />
            <stop offset="45%" stopColor="#E5DBC6" stopOpacity={50} />
            <stop offset="100%" stopColor="#E5DBC6" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="right-to-left">
            <stop offset="0%" stopColor="#E5DBC6" stopOpacity={0} />
            <stop offset="45%" stopColor="#E5DBC6" stopOpacity={50} />
            <stop offset="90%" stopColor="#E5DBC6" stopOpacity={100} />
            <stop offset="100%" stopColor="#E5DBC6" stopOpacity={100} />
          </linearGradient>
        </defs>
        {children}
      </svg>
    </div>
  );
};

export default Timeline;
