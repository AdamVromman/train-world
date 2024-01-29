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
    xDesktop: 18.5,
    yDesktop: 53,
    xPhone: 69,
    yPhone: 50,
    text: "They lit lamps to be able to work in the darkness. In winter, they sometimes had to light a fire to keep warm ..surrounded by paper and wood!",
  },
  {
    xDesktop: 83,
    yDesktop: 55,
    xPhone: 80,
    yPhone: 60,
    text: "The trains carried the most urgent cargo. But sometimes also the weirdest. Things like instruments, machinery and even live animals!",
  },
  {
    xDesktop: 53,
    yDesktop: 62,
    xPhone: 5,
    yPhone: 60,
    text: "One carriage had enough space for 10 people to work at the same time. Of course, when you add the 300–400 bags of unsorted post, it got a bit crowded!",
  },
  {
    xDesktop: 71.5,
    yDesktop: 57,
    xPhone: 55,
    yPhone: 56,
    text: "The post men had to stamp each letter manually to record where the letter came from.",
  },
  {
    xDesktop: 60.5,
    yDesktop: 52.5,
    xPhone: 28.5,
    yPhone: 50,
    text: "The walls of the train were full of little boxes. Each box had the name of a town or city and each letter had to end up in the correct box.",
  },
];

const TheTravellingPostMen = ({ viewWidth }: Props) => {
  return (
    <article id="travelling-post-men" className="chapter travelling-post-men">
      <div className="text">
        <h2>The travelling post men.</h2>
        <div className="text-image horizontal">
          <div className="text-image--text">
            <p>
              One of the reasons that the train post kept growing was{" "}
              <span className="p--bold">the birth of the prepaid stamp.</span>{" "}
              This meant that more people started sending mail than ever before!
              After 1950, every train station had to have a postbox and after
              1952, a kiosk to sell stamps.
            </p>
            <picture>
              <source
                media="(min-width:1024px)"
                srcSet="../Images/travelling-post-men-1600.avif"
              />
              <source srcSet="./Images/travelling-post-men-500.avif" />
              <img
                className="block laptop:hidden -my-[100px] blended-image"
                src="./Images/travelling-post-men.avif"
              />
            </picture>
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
            <picture>
              <source
                media="(min-width:1024px)"
                srcSet="../Images/travelling-post-men-1600.avif"
              />
              <source srcSet="./Images/travelling-post-men-500.avif" />
              <img
                className="hidden laptop:block blended-image"
                src="./Images/travelling-post-men.avif"
              />
            </picture>
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
        <div className="split-paragraph background red">
          <div className="split-paragraph-circle"></div>
          <div className="split-paragraph-circle"></div>
          <div className="split-paragraph-circle"></div>
          <div className="split-paragraph-circle"></div>
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
            className="split-paragraph--divider"
          >
            <path
              d="M1 1.47754V2.9913M1 166.478V117M1 10V3M1 15V112"
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
