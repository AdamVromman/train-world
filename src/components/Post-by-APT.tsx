import { MailByAPTTimeline } from "../assets/SVGs/Mail-by-APT--timeline";
import Timeline from "./Timeline";

const PostByAPT = () => {
  return (
    <article className="chapter post-by-APT">
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
            xmlns="http://www.w3.org/2000/svg"
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
        <Timeline id="mail-by-APT--timeline">{MailByAPTTimeline}</Timeline>
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
