import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { useState } from "react";

const LetterInteraction = () => {
  const [letterSend, setLetterSend] = useState(false);

  const { contextSafe } = useGSAP(() => {});

  const onClickAnotherLetter = contextSafe(() => {
    const tl = gsap.timeline();

    tl.to("#letter-part-3", {
      rotateX: 0,
      duration: 0,
      zIndex: 10,
      ease: "none",
    })
      .to(
        "#letter-part-1",
        {
          rotateX: 0,
          y: 0,
          duration: 0,
          ease: "none",
        },
        ">"
      )
      .to(
        "#letter",
        {
          x: 0,
          duration: 0,
          ease: "none",
        },
        ">"
      );

    tl.then(() => {
      localStorage.removeItem("letter");
      setLetterSend(false);
    });

    tl.play();
  });

  const onClick = contextSafe(() => {
    console.log("clicked");
    const tl = gsap.timeline();

    tl.to("#letter-part-3", {
      rotateX: -170,
      duration: 1,
      ease: "power3.inOut",
    })
      .to(
        "#letter-part-3",
        {
          zIndex: 30,
          delay: 0.3,
          duration: 0.1,
        },
        "<"
      )
      .to(
        "#letter-part-1",
        {
          rotateX: -160,
          y: -5,
          delay: 0.5,
          duration: 1,
          ease: "power3.inOut",
        },
        ">"
      )
      .to(
        "#letter-part-1",
        {
          zIndex: 50,
          delay: 0.3,
          duration: 0.1,
        },
        "<"
      )
      .to(
        "#letter",
        {
          x: 2000,
          delay: 1,
          ease: "power2.in",
        },
        ">"
      );

    tl.then(() => {
      const letter = document.getElementById(
        "textarea-1"
      ) as HTMLTextAreaElement;
      const address = document.getElementById(
        "textarea-2"
      ) as HTMLTextAreaElement;

      localStorage.setItem(address.value, letter.value);
      setLetterSend(true);
    });

    tl.play();
  });

  return (
    <>
      {letterSend ? (
        <div>
          Letter send!
          <button onClick={onClickAnotherLetter}>Send another letter</button>
        </div>
      ) : (
        <div className="w-full h-full flex justify-center">
          <div id="letter" className="interaction letter-interaction">
            <div id="letter-part-1" className="letter-interaction--part part-1">
              <div className="letter-interaction--part--content">
                <h2>My dearest..</h2>
                <p>
                  Are you planning a visit to Train World for you and a loved
                  one? If you already have their ticket, you can fill in the
                  code here and write them a letter.
                </p>
                <p>
                  When you visit the museum, they can find their letter by
                  scanning their ticket in the Postal cart in Hall 4.
                </p>
              </div>
              <div className="letter-interaction--part--back"></div>
            </div>
            <div className="letter-interaction--part part-2">
              <div className="letter-interaction--part--content">
                <span className="interaction--subtitle">
                  What do you want to tell your loved one?
                </span>
                <textarea
                  id="textarea-1"
                  placeholder="EXAMPLE:
        From Woolf to Sackville-West,
        
        Your letter from Trieste came this morning—But why do you think I don’t..
        
        [Now you write your own!]"
                  maxLength={1500}
                  className="letter-interaction--part--textarea"
                ></textarea>
              </div>
            </div>
            <div id="letter-part-3" className="letter-interaction--part part-3">
              <div className="letter-interaction--part--content">
                <span className="interaction--subtitle">
                  To whom do you want to address the letter?{" "}
                </span>
                <div className="w-full grow flex flex-row gap-30">
                  <textarea
                    id="textarea-2"
                    placeholder="EXAMPLE:
        Mr H. Potter, 
        the Cupboard under the Stairs, 
        4, Privet Drive, 
        Little Whinging, 
        Surrey."
                    maxLength={400}
                    className="letter-interaction--part--textarea small"
                  ></textarea>
                  <div className="letter-interaction-part--submit">
                    <span className="interaction--subtitle">
                      Fill in the code of their ticket.
                    </span>
                    <input type="text" />
                    <button onClick={onClick}>Send your letter</button>
                  </div>
                </div>
              </div>
              <div className="letter-interaction--part--back"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LetterInteraction;
