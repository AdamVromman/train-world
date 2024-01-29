import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useRef, useState } from "react";
import Newspaper from "../assets/SVGs/Newspaper.svg?react";

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
        <svg
          viewBox="0 0 1440 1360"
          className="rotate-6 w-full drop-shadow-main"
        >
          <Newspaper />
        </svg>
        <div className="robbers-game drop-shadow-main">
          <div className="robbers-game--text">
            <h3>12 gangs still potential suspects.</h3>
            <p>
              Although the police were not able to apprehend the culprits, they
              were able to collect photographs of 12 potential gangs that might
              be involved. Further investigation should determine which of these
              groups committed the deed.
            </p>
            <p>
              Now it's your turn! Look around for{" "}
              <span className="font-bold text-teal-dark">clues</span> and choose
              the 3 gangs that you suspect the most. After that, you will be
              able to{" "}
              <span className="p--bold">fill in the code on your ticket</span>{" "}
              and save your suspects. Once you are in the museum, you can{" "}
              <span className="p--bold">
                find the final clue and unmask the robbers!
              </span>
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
                    backgroundImage: `url(${`./Images/suspects/suspect-${
                      index + 1
                    }.png`})`,
                  }}
                >
                  <div className="w-[75%] aspect-square relative z-30 rounded-full">
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

          <div className="robbers-game--submit h-[400px]">
            {getAmountSelected() === 3 && (
              <>
                {saved ? (
                  <>
                    {" "}
                    <span className="interaction--subtitle">
                      Your suspects has been recorded!
                    </span>
                    <button
                      className="interaction--submit__button"
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
                    <span className="italic">
                      These are your three suspects?
                    </span>
                    <div className="w-full flex flex-col items-center gap-[7.5px]">
                      {" "}
                      <span className="interaction--subtitle">
                        Fill in the code on your ticket.
                      </span>
                      <input
                        placeholder="EXAMPLE: 123-456-789"
                        className="interaction--submit__code"
                        type="text"
                      />
                    </div>

                    <div className="w-full flex flex-col items-center gap-[7.5px]">
                      <span className="interaction--subtitle">
                        Save your suspects and find the remaining clue in the
                        museum
                      </span>
                      <button
                        className="interaction--submit__button"
                        onClick={saveSuspects}
                      >
                        Save suspects
                      </button>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobbersInteraction;
