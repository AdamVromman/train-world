const LetterInteraction = () => {
  return (
    <div className="interaction letter-interaction">
      <div className="letter-interaction--part part-1">
        <h2>My dearest..</h2>
        <p>
          Are you planning a visit to Train World for you and a loved one? If
          you already have their ticket, you can fill in the code here and write
          them a letter.
        </p>
        <p>
          When you visit the museum, they can find their letter by scanning
          their ticket in the Postal cart in Hall 4.
        </p>
      </div>
      <div className="letter-interaction--part part-2">
        <span className="interaction--subtitle">
          What do you want to tell your loved one?
        </span>
        <textarea
          placeholder="EXAMPLE:
          From Woolf to Sackville-West,
          
          Your letter from Trieste came this morning—But why do you think I don’t..
          
          [Now you write your own!]"
          maxLength={1500}
          className="letter-interaction--part--textarea"
        ></textarea>
      </div>
      <div className="letter-interaction--part part-3">
        <span className="interaction--subtitle">
          To whom do you want to address the letter?{" "}
        </span>
        <div className="w-full grow flex flex-row gap-30">
          <textarea
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
            <button>Send your letter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterInteraction;
