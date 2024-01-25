import { TravellingPostMenTimeline } from "../assets/SVGs/Travelling-post-men--timeline";
import Timeline from "./Timeline";

interface Props {
  viewWidth: number;
}

const TheTravellingPostMen = ({ viewWidth }: Props) => {
  return (
    <article className="chapter travelling-post-men">
      <div className="text">
        <h2>The travelling post men.</h2>
        <div className="text-image">
          <div className="text-image--text">
            <p>
              One of the reasons that the train post kept growing was{" "}
              <span className="p--bold">the birth of the prepaid stamp.</span>{" "}
              This meant that more people started sending mail than ever before!
              After 1950, every train station had to have a postbox and after
              1952, a kiosk to sell stamps.
            </p>
            <p>
              The most important job was to{" "}
              <span className="p--bold">
                lighten the job of the fixed post offices.
              </span>{" "}
              They also delivered the most urgent mail. The trains were so fast
              that a letter, send at the last possible moment of the day, would
              reach its destination the next day. Across the whole country!
            </p>
          </div>
          <div className="text-image--image">
            <img src="./Images/IMAGE.png" />
          </div>
        </div>
      </div>
      <Timeline viewWidth={viewWidth} id="travelling-post-men--timeline">
        {TravellingPostMenTimeline}
      </Timeline>
      <div className="text">
        <div className="split-paragraph">
          <p>
            It wasn’t easy to be a travelling postman. During the day, the post
            trains stood still. But once the sun set and the train arrived at
            its first station, the postmen got to work.{" "}
            <span className="p--bold">Every station</span>, they received the
            huge bags with <span className="p--bold">unsorted post.</span>{" "}
            Before they got to the next station, they had to sort all the mail.
          </p>
          <svg
            width="2"
            viewBox="0 0 2 168"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="split-paragraph--divider"
          >
            <path
              d="M1 1.47754V2.9913M1 166.478V117M1 10V3M1 15V112"
              stroke="#272727"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>
            During those years, trains made a lot of{" "}
            <span className="p--bold">loud noise</span> the whole time and the
            lamps didn’t always work. In those cases, they had to use candles.
            Working with fire in a moving train is definitely not safe, and{" "}
            <span className="p--bold">small injuries</span> were{" "}
            <span className="p--bold">not uncommon.</span> But even with all of
            this discomfort and danger, the post was always sorted on time!
          </p>
        </div>
      </div>
    </article>
  );
};

export default TheTravellingPostMen;
