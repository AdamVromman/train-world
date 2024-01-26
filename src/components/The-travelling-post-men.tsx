import { TravellingPostMenTimeline } from "../assets/SVGs/TravellingPostMen/Travelling-post-men--timeline";
import Timeline from "./Timeline";

interface Props {
  viewWidth: number;
}

const POINTS = [
  {
    date: "1849",
    description: "The prepaid stamp makes people send a lot more post.",
  },
  {
    date: "30.01.1850",
    description:
      "A Royal decree allows the Post to use the nearly whole railway system.",
  },
  {
    date: "10.04.1850",
    description: "From now on all stations need to be fitted with a mailbox.",
  },
  {
    date: "01.06.1852",
    description:
      "Due to popularity, all stations also get a kiosk that sells stamps.",
  },
  {
    date: "01.07.1852",
    description:
      "The first use of the word 'rijdend postkantoor' (moving postoffice)",
  },
  {
    date: "15.12.1895",
    description:
      "Instead of naming a route after train line, they get their own name.",
  },
  {
    date: "1934",
    description: "In total, 48 post offices are riding around Belgium.",
  },
];

const STARS = [
  {
    x: 20,
    y: 20,
    text: "They lit lamps to be able to work and a big fire to keep warm.",
  },
  {
    x: 30,
    y: 30,
    text: "The trains carried the most urgent cargo. But sometimes also the weirdest. Things like instruments, machinery and even live animals.",
  },
  {
    x: 40,
    y: 40,
    text: "Every station, they received the huge bags with unsorted post.",
  },
  {
    x: 50,
    y: 50,
    text: "One carriage had enough space for 10 people to work at the same time. Of course, when you add the 300–400 bags of unsorted post, it got a bit crowded!",
  },
  {
    x: 60,
    y: 60,
    text: "Using stamps to mark where the letter came from.",
  },
  {
    x: 70,
    y: 70,
    text: "Putting the post in the little boxes.",
  },
];

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
      <Timeline
        stars={STARS}
        points={POINTS}
        viewWidth={viewWidth}
        id="travelling-post-men--timeline"
      >
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
