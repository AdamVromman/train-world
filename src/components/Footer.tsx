import Button from "./Button";

const Footer = () => {
  return (
    <footer id="end" className="footer">
      <div className="text">
        <h2>Did you like what you read?</h2>
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
        <div className="flex flex-col gap-15 laptop:flex-row w-full justify-center items-center my-60">
          <Button
            link="https://www.trainworld.be/en/the-museum"
            textcolor="black"
            text="Discover the museum"
            color="white"
            backgroundColor="red"
          ></Button>
          <Button
            link="https://www.trainworld.be/en/practical-information"
            textcolor="black"
            text="Plan your trip"
            color="white"
            backgroundColor="red"
          ></Button>
          <Button
            link="https://webshoptrainworld.recreatex.be/Exhibitions/Overview?language=en"
            textcolor="white"
            text="Buy Tickets"
            color="black"
            backgroundColor="red"
          ></Button>
          <Button
            link="https://www.trainworld.be/en/collections/stories/in-the-beginning"
            textcolor="black"
            text="Read last months story"
            color="white"
            backgroundColor="red"
          ></Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
