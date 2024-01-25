import { EndOfAnEraTimeline } from "../assets/SVGs/End-of-an-era--timeline";
import Timeline from "./Timeline";

interface Props {
  viewWidth: number;
}

const POINTS = [
  {
    date: "1835",
    description: "The first trains arrive in Belgium, straight from England.",
  },
  {
    date: "07.12.1837",
    description: "A decree allows partnership between the trains and the mail.",
  },
  {
    date: "06.01.1838",
    description: "The English use the first moving post office in the world.",
  },
  {
    date: "15.09.1840",
    description:
      "The very first post route in Belgium, between Brussels and Antwerp, is opened",
  },
  {
    date: "01.12.1841",
    description: "A new post route! Brussel-Tubeke this time.",
  },
  {
    date: "1842",
    description: "Brussel-Tubeke now goes all the way to Bergen.",
  },
  {
    date: "1843",
    description: "Three new routes get added to the Belgian post-railway",
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
