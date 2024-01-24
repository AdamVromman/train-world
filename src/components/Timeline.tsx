import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface Props {
  children: JSX.Element;
  id: string;
}

const Timeline = ({ children, id }: Props) => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${id}`,
        pin: true,
        start: "center center",
        end: "+=9999",
        scrub: 1,
        markers: {
          startColor: "white",
          endColor: "white",
          fontSize: "18px",
          fontWeight: "bold",
          indent: 20,
        },
      },
    });
    tl.to(`.${id}_wheel`, {
      rotation: 99999,
      transformOrigin: "50% 50%",
    });

    tl.to(
      `#${id}_foreground-1`,
      {
        x: -10000,
      },
      "<"
    );

    tl.to(
      `#${id}_tracks`,
      {
        x: -8540,
      },
      "<"
    );

    tl.to(
      `#${id}_background-3`,
      {
        x: -546,
      },
      "<"
    );

    tl.to(
      `#${id}_background-2`,
      {
        x: -1640,
      },
      "<"
    );

    tl.to(
      `#${id}_background-1`,
      {
        x: -3280,
      },
      "<"
    );
  });

  return (
    <div className="w-screen max-w-[1640px] mb-60 laptop:mb-120">
      <svg className={`${id}`} viewBox="0 0 1640 900" fill="none">
        <defs>
          <style>
            {`
                .cls-1, .cls-2, .cls-3 {
                    strokeLinecap: round;
                    strokeLinejoin: round;
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
