import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useRef, useState } from "react";
import { Newspaper } from "../assets/SVGs/Newspaper";

const RobbersInteraction = () => {
  const [saved, setSaved] = useState(false);
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

  const getAmountSelected = () =>
    selectedCircles
      .map((s): number => (s ? 1 : 0))
      .reduce((prev, next) => {
        return prev + next;
      }, 0);

  const saveSuspects = () => {
    localStorage.setItem("robbers", JSON.stringify(selectedCircles));
    setSaved(true);
  };

  useEffect(() => {
    const robbersJSON = localStorage.getItem("robbers");
    if (robbersJSON) {
      const robbers = JSON.parse(robbersJSON) as boolean[];
      setSelectedCircles(robbers);
      setSaved(true);
    }
  }, []);

  return (
    <div className="interaction">
      <div className="relative">
        <svg viewBox="0 0 1440 1360" className="rotate-6 w-full">
          <Newspaper />
        </svg>
        <div className="robbers-game">
          <div className="robbers-game--text">
            <h3>12 gangs are potential suspects.</h3>
            <p>
              Although the police were not able to apprehend the culprits, they
              were able to collect photographs of 12 potential gangs that might
              be involved. Further investigation should determine which of these
              groups committed the deed.
            </p>
          </div>
          <div className="robbers-game--suspects">
            {selectedCircles.map((selected, index) => {
              return (
                <button
                  key={index}
                  onClick={() => handleClick(index)}
                  className="robbers-game--suspects--silhouette"
                  style={{
                    backgroundImage: `url(${`/Images/suspects/suspect-${
                      index + 1
                    }.png`})`,
                  }}
                >
                  <div className="w-[65%] aspect-square relative z-30 rounded-full">
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
                      autoplay
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
          {getAmountSelected() === 3 && (
            <div className="robbers-game--submit">
              {saved ? (
                <>
                  {" "}
                  <span className="interaction--subtitle">
                    Your suspects has been recorded!
                  </span>
                  <button
                    onClick={() => {
                      setSaved(false);
                      setSelectedCircles([
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
                      localStorage.removeItem("robbers");
                    }}
                  >
                    Clear suspects
                  </button>
                </>
              ) : (
                <>
                  <span>These are your three suspects?</span>
                  <span>Very well</span>
                  <span className="interaction--subtitle">
                    Fill in the code on your ticket.
                  </span>
                  <input
                    placeholder="EXAMPLE: 123-456-789"
                    className="interaction--submit__code"
                    type="text"
                  />
                  <span className="interaction--subtitle">
                    Save your suspects and find the remaining clue in the museum
                  </span>
                  <button onClick={saveSuspects}>Save suspects</button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RobbersInteraction;
