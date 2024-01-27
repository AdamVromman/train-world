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
    <div className="interaction overflow-x-clip">
      <div className="relative  rotate-2 translate-x-[3%]">
        <svg
          id="Layer_1_copy"
          data-name="Layer 1 copy"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 1600"
        >
          <Newspaper />
        </svg>
        <div className="robbers-game">
          {selectedCircles.map((selected, index) => {
            return (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className="robbers-game--silhouette"
              >
                <div className="w-[65%] aspect-square relative bg-black rounded-full">
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
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RobbersInteraction;
