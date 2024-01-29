import { OriginsTimeline } from "../assets/SVGs/Origins/Origins--timeline";
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

const Origins = ({ viewWidth }: Props) => {
  return (
    <article id="origins" className="chapter origins">
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
            className="split-paragraph--divider"
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
      <Timeline points={POINTS} viewWidth={viewWidth} id="origins--timeline">
        {OriginsTimeline}
      </Timeline>
      <div className="text text-image">
        <div className="text-image--image">
          <img src="./Images/image-test.png" />
        </div>
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
      </div>
    </article>
  );
};

export default Origins;
