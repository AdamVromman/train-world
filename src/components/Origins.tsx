import { Timeline1Desktop } from "../assets/SVGs/Timeline-1-desktop";
import Timeline from "./Timeline";

const Origins = () => {
  return (
    <article className="chapter origins">
      <div className="text">
        <h2>Origins.</h2>
        <div className="split-paragraph">
          <p>
            It didn't take long for Belgium to start using its rail network to
            transport mail. Two years after the first trains started riding
            through the country, a decree was signed to allow the{" "}
            <span className="p--bold">collaboration</span> between{" "}
            <span className="p--bold">the postal services</span> and{" "}
            <span className="p--bold">the Belgian railways.</span> The first
            test run ran between Brussels and Antwerp and was held in September
            1940. This was the first time that post was transported via train on
            the European mainland!
          </p>
          <svg
            width="2"
            viewBox="0 0 2 227"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden laptop:block"
          >
            <path
              d="M1 2L1 1M0.999991 219L1 20M1 15L1 7M1 224L1 226"
              stroke="#272727"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p>
            <span className="p--bold">Special carriages</span> were attached to
            the regular trains. These carriages were especially made so that{" "}
            <span className="p--bold">the post</span> could be{" "}
            <span className="p--bold">sorted during the trip!</span> This idea
            came straight from England. They had travelling post offices since
            1838.
          </p>
        </div>
      </div>
      <Timeline id="origins--timeline">{Timeline1Desktop}</Timeline>
      <div className="text-image">
        <div className="text-image--text">
          <p>
            The use of the post trains{" "}
            <span className="p--bold">kept growing</span> throughout the 19th
            century. First, a connection was made between Brussels and Tubeke,
            which was extended to Bergen only a year later. Then, in 1843, three
            new lines were added: Bergen - Quievrain, Ghent - Moeskroen and Luik
            - Verviers. A royal decree in 1850 allowed{" "}
            <span className="p--bold">the use</span> of almost{" "}
            <span className="p--bold">the whole train network</span> for the
            transportation of post.
          </p>
        </div>
        <div className="text-image--image">
          <img src="./Images/IMAGE.png" />
        </div>
      </div>
    </article>
  );
};

export default Origins;
