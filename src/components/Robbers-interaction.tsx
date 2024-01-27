import { Player } from "@lottiefiles/react-lottie-player";
import { useRef, useState } from "react";
import { Newspaper } from "../assets/SVGs/Newspaper";

const RobbersInteraction = () => {
  const [selectedCircles, setSelectedCircles] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const drawnCircles = useRef<Array<Player>>([]);
  const erasedCircles = useRef<Array<Player>>([]);

  const handleClick = (id: number) => {
    const selected = selectedCircles[id];
    let drawnPlayer;
    let erasedPlayer;
    if (drawnCircles.current) {
      drawnPlayer = drawnCircles.current[id];
    }
    if (erasedCircles.current) {
      erasedPlayer = erasedCircles.current[id];
    }

    const temp = selectedCircles.slice(0);
    temp[id] = !selected;

    setSelectedCircles(temp);

    if (drawnPlayer && erasedPlayer) {
      if (selected) {
        erasedPlayer.setSeeker(0);
        erasedPlayer.play();
      } else {
        drawnPlayer.setSeeker(0);
        drawnPlayer.play();
      }
    }
  };

  return (
    <div className="interaction">
      {Newspaper}
      <div className="interaction--content">
        <div className="text">
          <h2>Trainrobbers!</h2>
          <p className="mb-30">
            In 1985, one of the postal trains was robbed. The robbers got away
            with diamonds and 30 million Belgian Franks (1 million Euros)! Now
            we need your help to figure out who did it!
          </p>
          <p className="mb-60">
            We have 12 groups of suspects, but we don't have any good pictures
            of them, just silhouettetes. Look for clues and tell us who
            definitely did not do it.
          </p>
          <span className="interaction--subtitle">
            Select 9 silhouettetes that did definitely NOT rob the train. Look
            for teal clues throughout the story!
          </span>
        </div>
        <ul className="robbers-game">
          {selectedCircles.map((selected, index) => {
            return (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className="robbers-game--silhouette"
              >
                <Player
                  ref={(p) => {
                    if (erasedCircles.current && p) {
                      erasedCircles.current[index] = p;
                    }
                  }}
                  className={`w-full h-full top-0 left-0 absolute ${
                    selected ? "hidden" : "block"
                  }`}
                  autoplay
                  src="./Lottie/circle-erased.json"
                  keepLastFrame
                />
                <Player
                  ref={(p) => {
                    if (drawnCircles.current && p) {
                      drawnCircles.current[index] = p;
                    }
                  }}
                  className={`w-full h-full top-0 left-0 absolute ${
                    selected ? "block" : "hidden"
                  }`}
                  src="./Lottie/circle-drawn.json"
                  keepLastFrame
                />
              </button>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RobbersInteraction;
