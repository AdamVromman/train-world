import { EndOfAnEraTimeline } from "../assets/SVGs/End-of-an-era--timeline";
import Timeline from "./Timeline";

interface Props {
  viewWidth: number;
}

const POINTS = [
  {
    date: "1981",
    description:
      "Offices between Chaleroi, Bergen and Doornik are discontinued.",
  },
  {
    date: "30.09.1984",
    description:
      "From this point, sorting does not happen on board anymore on all the lines.",
  },
  {
    date: "07.1988",
    description: "The new NMBS timetables are issued.",
  },
  {
    date: "1988",
    description: "15 AM54s get modified to keep up with the rising demand.",
  },
  {
    date: "11.07.1988",
    description: "the AM54 officially start being used.",
  },
  {
    date: "28.03.2003",
    description:
      "3 of the 4 last lines get discontinued: Luik, Charleroi, Antwerp.",
  },
  {
    date: "12.2003",
    description:
      "The line Brussels-Ghent stops being used. The end of the postal trains.",
  },
];

const EndOfAnEra = ({ viewWidth }: Props) => {
  return (
    <article className="chapter end-of-and-era">
      <div className="text">
        <h2>The end of an era.</h2>
        <div className="text-image">
          <div className="text-image--text">
            <p>
              After 1981, travelling post offices{" "}
              <span className="p--bold">started to retire</span> and by 1984, no
              mail would be sorted on the trains any more. The APT’s now{" "}
              <span className="p--bold">only transported the mail</span>, and
              only to 5 stations. But even though the amount of stations
              decreased, the amount of mail increased. In 1988,{" "}
              <span className="p--bold">15 new APT’s</span> were made. These new
              trains completed their route 5 times per day, until 1 o clock in
              the morning, and they could transport 86 post containers of mail!
            </p>
            <p>
              Sadly, transporting mail by train is expensive. In 2003, the usage
              of the postal trains was <span className="p--bold">stopped</span>{" "}
              in <span className="p--bold">two phases.</span> In March, the
              lines Brussels-Luik, Brussels-Charleroi and Brussels-Antwerp were
              discontinued and by the end of the year, so was the line
              Brussels-Ghent. This officially marked{" "}
              <span className="p--bold">
                the end of the APT’s and the Postal Trains.
              </span>
            </p>
          </div>
          <div className="text-image--image">
            {" "}
            <img src="./Images/IMAGE.png" />
          </div>
        </div>
        <Timeline
          points={POINTS}
          viewWidth={viewWidth}
          id="end-of-an-era--timeline"
        >
          {EndOfAnEraTimeline}
        </Timeline>
      </div>
    </article>
  );
};

export default EndOfAnEra;
