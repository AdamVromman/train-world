import { MailByAPTTimeline } from "../assets/SVGs/MailByAPT/Mail-by-APT--timeline";
import Timeline from "./Timeline";

interface Props {
  viewWidth: number;
}

const POINTS = [
  {
    date: "20.11.1959",
    description: "The NMBS and the Post start talks about creating APTs.",
  },
  {
    date: "1967",
    description: "The Post modifies 8 AM34s in the workshop in Mechelen.",
  },
  {
    date: "05.03.1968",
    description:
      "An inaugural ride between Brussels and Luxembourg takes place.",
  },
  {
    date: "23.04.1968",
    description: "The line Brussels-Luxembourg officially uses APTs now.",
  },
  {
    date: "02.09.1968",
    description:
      "APTs start being used on the line between Brussels and Oostend.",
  },
  {
    date: "05.1971",
    description:
      "The travelling postoffice between Brussels and Antwerp is discontinued.",
  },
  {
    date: "1972",
    description:
      "One year later, another travelling postoffice is discontinued: Brussels-Ghent.",
  },
];

const PostByAPT = ({ viewWidth }: Props) => {
  return (
    <article id="post-by-apt" className="chapter post-by-APT">
      <div className="text">
        <h2>Post by APT.</h2>
        <div className="split-paragraph">
          <p>
            The post trains got so popular, that in 1959, the Regie der
            Posterijen and the NMBS agreed to start using{" "}
            <span className="p--bold">Autonomous Post Trains (APT).</span>{" "}
            Instead of attaching the post carriage to a passenger train, the
            post would be transported by special post trains. This way, the post
            trains could <span className="p--bold">choose</span> their own
            routes and <span className="p--bold">timetables.</span>
          </p>
          <svg
            width="2"
            viewBox="0 0 2 188"
            fill="none"
            className="split-paragraph--divider"
          >
            <path
              d="M1.00003 186.478L1.00001 165M1.00004 11.661L1.00004 6.56928M1.00004 3.17479L1.00004 1.47754L1.00004 113.5M1.00003 150L1 124M1 155L1 160M1 119L1 118.5"
              stroke="#272727"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>
            8 years later, the NMBS started converting AM35 passenger trains
            into 8 two-cart post trains in the workshop in Mechelen. By having
            two carts, the travelling post men could{" "}
            <span className="p--bold">keep the post in</span> one cart and{" "}
            <span className="p--bold">sort the post in</span>
            the other. This made the job much safer.
          </p>
        </div>
      </div>
      <Timeline
        points={POINTS}
        viewWidth={viewWidth}
        id="mail-by-APT--timeline"
      >
        {MailByAPTTimeline}
      </Timeline>
      <div className="text">
        <div className="text-image">
          <div className="text-image--text">
            <p>
              The first APT, between Namen and Libramont, was inaugurated in
              1968. That same year, the route between Ghent and Ostend started
              using APT’s as well. Until 1981, there were{" "}
              <span className="p--bold">12 travelling post trains</span> and
              around <span className="p--bold">300 people</span> working on or
              around them.
            </p>
          </div>
          <div className="text-image--image">
            <img src="./Images/IMAGE.png" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostByAPT;
