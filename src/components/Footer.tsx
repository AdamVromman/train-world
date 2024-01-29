import Button from "./Button";

interface Props {
  viewWidth: number;
}
const Footer = ({ viewWidth }: Props) => {
  return (
    <footer className="footer">
      <div className="text">
        <h2>Liked what you heard?</h2>
        <div className="split-paragraph">
          <p className="text-white">
            The Postal Trains is just one of the many stories of Train world!
            Every month a new story is put in the spotlight. Next months story:
            The Orient express.
          </p>
          <svg
            width="2"
            viewBox="0 0 2 115"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="split-paragraph--divider"
          >
            <path
              d="M1 1L1 13L1 18M1 113.022L1 32M1 23L1 27"
              stroke="#E5DBC6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className="text-white">
            Do you want to see a real postal train? Maybe walk around in one and
            discover how the travelling post men worked? All this, and much
            more, awaits you in Train World!
          </p>
        </div>
        <Button
          viewWidth={viewWidth}
          textcolor="black"
          text="Discover the museum"
          color="white"
        ></Button>
      </div>
    </footer>
  );
};

export default Footer;
