import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Player } from "@lottiefiles/react-lottie-player";

interface Props {
  children: JSX.Element;
  id: string;
  viewWidth: number;
  points: { date: string; description: string }[];
  stars?: { x: number; y: number; text: string }[];
}

const Timeline = ({ children, id, viewWidth, points, stars }: Props) => {
  const largeTrainDisplacement =
    id === "mail-by-APT--timeline" || id === "end-of-an-era--timeline"
      ? 1200
      : 0;

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${id}`,
        pin: true,
        start: "center center",
        end: "+=10000",
        scrub: 1,
      },
    });

    tl.duration(7);

    if (id === "origins--timeline") {
      tl.to(
        `.${id}_wheel`,
        {
          rotation: 3600,
          transformOrigin: "50% 50%",
          duration: 7,
          ease: "none",
        },
        0
      );
    }

    if (id === "travelling-post-men--timeline") {
      tl.to(
        `.${id}_jumping`,
        {
          y: -15,
          duration: 0.5,
          ease: "power4.out",
          stagger: 0.1,
          repeat: 1,
          repeatDelay: 2,
        },
        1
      );

      tl.to(
        `.${id}_jumping`,
        {
          y: 0,
          duration: 0.5,
          ease: "power4.in",
          stagger: 0.1,
          delay: 0.5,
          repeat: 1,
          repeatDelay: 2,
        },
        "<"
      );
    }

    tl.fromTo(
      `#${id}_train`,
      {
        x: -1640 - largeTrainDisplacement,
        duration: 1,
        ease: "none",
      },
      { x: -largeTrainDisplacement },
      0
    )
      .to(
        `#${id}_foreground-1`,
        {
          x: -8360,
          duration: 5,
          ease: "none",
        },
        ">"
      )
      .to(
        `#${id}_tracks`,
        {
          x: -6720,
          duration: 5,
          ease: "none",
        },
        "<"
      )
      .to(
        `#${id}_background-4`,
        {
          x: -546,
          duration: 5,
          ease: "none",
        },
        "<"
      )
      .to(
        `#${id}_background-3`,
        {
          x: -1640,
          duration: 5,
          ease: "none",
        },
        "<"
      )
      .to(
        `#${id}_background-2`,
        {
          x: -3280,
          duration: 5,
          ease: "none",
        },
        "<"
      )
      .to(
        `#${id}_background-1`,
        {
          x: -4920,
          duration: 5,
          ease: "none",
        },
        "<"
      )
      .to(
        `#${id}_train`,
        {
          x: 1640 + largeTrainDisplacement,
          duration: 1,
        },
        ">"
      );

    tl.from(
      `.${id}-date`,
      {
        x: 1640,
        stagger: 5 / points.length,
        duration: 5 / points.length,
        ease: "sine.in",
        snap: { x: { values: [0], radius: 50 } },
      },
      1
    ).to(
      `.${id}-date`,
      {
        x: -1640,
        stagger: 5 / points.length,
        duration: 5 / points.length,
        ease: "sine.out",
        snap: { x: { values: [0], radius: 50 } },
      },
      2
    );
  });

  return (
    <div className="timeline w-screen max-w-[1640px] mb-60 laptop:mb-120">
      <div className={`${id} w-full`}>
        <svg
          className="stroke-2 tablet:stroke-1"
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
        {stars && (
          <div className="timeline--stars">
            {stars.map((star) => {
              return (
                <button
                  className="absolute"
                  style={{ top: `${star.y}%`, left: `${star.x}%` }}
                >
                  <Player
                    className="w-[45px]"
                    autoplay
                    loop
                    src="./Lottie/star.json"
                  />
                </button>
              );
            })}
          </div>
        )}
        <div className="timeline--dates">
          {points.map((point, index) => {
            return (
              <div
                className={`${id}-date timeline--dates--single`}
                key={`${id}__${index}`}
              >
                <span className="timeline--dates--single--date">
                  {point.date}
                </span>
                <p className="timeline--dates--single--description">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
