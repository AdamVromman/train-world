const LetterInteraction = () => {
  return (
    <div className="interaction">
      <div className="interaction--content">
        <div className="text">
          <h2>My dearest..</h2>
          <p>
            Are you planning a visit to Train World for you and a loved one? If
            you already have their ticket, you can fill in the code here and
            write them a letter.
          </p>
          <p>
            When you visit the museum, they can find their letter by scanning
            their ticket in the Postal cart in Hall 4.
          </p>
          <span className="interaction--subtitle">
            To whom do you want to address the letter?{" "}
          </span>
          <span>(This is the name on the envelop)</span>
          <textarea></textarea>
          <span className="interaction--subtitle">
            What do you want to tell your loved one?
          </span>
          <textarea></textarea>
        </div>
      </div>
    </div>
  );
};

export default LetterInteraction;
