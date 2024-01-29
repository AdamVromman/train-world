/// <reference types="vite-plugin-svgr/client" />

import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useRef, useState } from "react";
import React from "react";
import DateLeft from "../assets/SVGs/date-left.svg?react";
import DateRight from "../assets/SVGs/date-right.svg?react";

interface Props {
  children: JSX.Element;
  id: string;
  viewWidth: number;
  points: { date: string; description: string }[];
  stars?: {
    xDesktop: number;
    yDesktop: number;
    xPhone: number;
    yPhone: number;
    text: string;
  }[];
}

const Timeline = ({ children, id, viewWidth, points, stars }: Props) => {
  const magnifiers = useRef<Array<Player>>([]);

  const playRandomAnimation = () => {
    if (stars) {
      const random = Math.floor(Math.random() * stars?.length);
      const magnifier = magnifiers.current[random];
      if (magnifier) {
        magnifier.setSeeker(0);
        magnifier.play();
      }
    } else {
      clearInterval(intervalID);
    }
  };

  const [intervalID, setIntervalID] = useState(-1);

  const [infoOpen, setInfoOpen] = useState<Array<boolean>>([]);

  useEffect(() => {
    if (stars) {
      setInfoOpen(stars.map(() => false));
      if (intervalID === -1) {
        setIntervalID(setInterval(playRandomAnimation, 7000));
      }
    } else {
      clearInterval(intervalID);
    }
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const getViewportWidth = () => {
    switch (id) {
      case "origins--timeline":
        return 500;
      case "travelling-post-men--timeline":
        return 750;
      case "mail-by-APT--timeline":
        return 800;
      case "end-of-an-era--timeline":
        return 820;
      default:
        return 500;
    }
  };

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
        scrub: 2,
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
        filter: "drop-shadow(75px 10px 5px rgba(0, 0, 0, 0.15))",
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
        filter: "drop-shadow(-75px 10px 5px rgba(0, 0, 0, 0.15))",
      },
      2
    );
    if (stars) {
      tl.to(`#${id}--stars`, { alpha: 1 }, 0.5);
      tl.to(`#${id}--stars`, { alpha: 0 }, "-=2");
    }

    tl.to(
      "#nav",
      {
        y: 200,
      },
      1
    );

    tl.to(
      "#nav",
      {
        y: 0,
      },
      "-=0.5"
    );
  });

  return (
    <div className="timeline w-screen max-w-[1640px] mb-60 laptop:mb-120">
      <div className={`${id} w-full`}>
        <svg
          className="stroke-2 tablet:stroke-1"
          viewBox={`${viewWidth > 500 ? "0" : `${getViewportWidth()}`} 0 ${
            viewWidth > 500 ? "1640" : "750"
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
          <div id={`${id}--stars`} className="timeline--stars">
            {stars.map((star, index) => {
              const x = viewWidth > 500 ? star.xDesktop : star.xPhone;
              const y = viewWidth > 500 ? star.yDesktop : star.yPhone;
              return (
                <React.Fragment key={index}>
                  <button
                    className="absolute"
                    style={{ top: `${y}%`, left: `${x}%` }}
                    onClick={() => {
                      const isOpen = infoOpen[index];
                      const array = infoOpen.slice(0, 0);
                      setInfoOpen(stars.map(() => false));
                      if (!isOpen) {
                        array[index] = true;
                        setInfoOpen(array);
                      }

                      if (magnifiers.current) {
                        if (infoOpen[index]) {
                          magnifiers.current[index].play();
                        } else {
                          magnifiers.current[index].pause();
                        }
                      }
                    }}
                  >
                    <Player
                      ref={(p) => {
                        if (magnifiers.current && p) {
                          magnifiers.current[index] = p;
                        }
                      }}
                      className="w-[50px] laptop:w-[75px]"
                      hover={!infoOpen[index]}
                      keepLastFrame
                      src="./Lottie/magnifier.json"
                    />
                  </button>
                  {infoOpen[index] && (
                    <div className="fixed w-screen flex justify-center items-center">
                      <div className="timeline--info">{star.text}</div>
                    </div>
                  )}
                </React.Fragment>
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
                <div className="flex flex-row">
                  <DateRight />
                  <span className="timeline--dates--single--date">
                    {point.date}
                  </span>
                  <DateLeft />
                </div>

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
