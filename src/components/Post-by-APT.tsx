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

const STARS = [
  {
    xDesktop: 7,
    yDesktop: 49,
    xPhone: 2,
    yPhone: 52,
    text: "By having two carts, the travelling post men could keep the post in one cart and sort the post in the other. Much safer!",
  },
  {
    xDesktop: 86,
    yDesktop: 55,
    xPhone: 80,
    yPhone: 56,
    text: "The postmen were so good at their job that they always knew how much time was left to the next station, so they knew how fast they had to work!",
  },
  {
    xDesktop: 25,
    yDesktop: 65,
    xPhone: 20,
    yPhone: 61,
    text: "The red bags contained the valuable cargo like money, diamonds and jewelry. Maybe that was what the robbers were after..",
  },
  {
    xDesktop: 54,
    yDesktop: 56,
    xPhone: 58,
    yPhone: 58,
    text: "Every time they stopped, they received the huge bags with unsorted post that had to be sorted by the next station.",
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
            <span className="p--bold">sort the post in</span> the other. This
            made the job much safer.
          </p>
        </div>
      </div>
      <Timeline
        stars={STARS}
        points={POINTS}
        viewWidth={viewWidth}
        id="mail-by-APT--timeline"
      >
        {MailByAPTTimeline}
      </Timeline>
      <div className="text">
        <div className="text-image">
          <div className="text-image--text laptop:translate-x-[100px]">
            <p>
              The first APT, between Namen and Libramont, was inaugurated in
              1968. That same year, the route between Ghent and Ostend started
              using APT’s as well. Until 1981, there were{" "}
              <span className="p--bold">12 travelling post trains</span> and
              around <span className="p--bold">300 people</span> working on or
              around them.
            </p>
          </div>
          <div className="text-image--image pt-30 laptop:pt-0 laptop:-my-150">
            <picture>
              <source
                media="(min-width:1024px)"
                srcSet="./Images/post-by-apt-1200.avif"
              />
              <source srcSet="./Images/post-by-apt-500.avif" />
              <img className="blended-image" src="./Images/post-by-apt.avif" />
            </picture>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostByAPT;
