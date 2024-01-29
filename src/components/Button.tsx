import { useEffect, useState } from "react";

interface Props {
  text: string;
  color: string;
  textcolor: string;
  viewWidth: number;
}

const Button = ({ text, color, textcolor, viewWidth }: Props) => {
  const [randomValue] = useState(Math.random());
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (document) {
      const button = document.getElementById(`${text}${randomValue}`);
      if (button) setHeight(button.getBoundingClientRect().height);
    }
  }, [randomValue, text, viewWidth]);

  return (
    <button id={text + randomValue} className={`button bg-${color}`}>
      <div className="button--content">
        <div
          style={{ height: `${height}px` }}
          className="button--background left"
        >
          <div className="button--corner left-top"></div>

          <div className={`button--center ${height > 60 ? "left" : ""} pr-3`}>
            <div
              className={`bg-${textcolor} w-[15px] h-[15px] rounded-full`}
            ></div>
          </div>
          <div className="button--corner left-bottom"></div>
        </div>
        <div className="button--content--center">
          <div className="button--content--center__border button--center__top"></div>
          <span className={`button--content--text text-${textcolor}`}>
            {text}
          </span>
          <div className="button--content--center__border button--center__bottom"></div>
        </div>

        <div
          style={{ height: `${height}px` }}
          className="button--background right"
        >
          <div className="button--corner right-top"></div>
          <div className={`button--center ${height > 60 ? "right" : ""} pl-3`}>
            <div
              className={`bg-${textcolor} w-[15px] h-[15px] rounded-full`}
            ></div>
          </div>
          <div className="button--corner right-bottom"></div>
        </div>
      </div>
    </button>
  );
};

export default Button;
