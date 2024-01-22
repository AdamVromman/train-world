const RobbersInteraction = () => {
  return (
    <div className="interaction">
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
          <li className="robbers-game--silhouette">
            <button></button>
          </li>
          <li className="robbers-game--silhouette"></li>
          <li className="robbers-game--silhouette"></li>
          <li className="robbers-game--silhouette"></li>
          <li className="robbers-game--silhouette"></li>
          <li className="robbers-game--silhouette"></li>
          <li className="robbers-game--silhouette"></li>
          <li className="robbers-game--silhouette"></li>
          <li className="robbers-game--silhouette"></li>
          <li className="robbers-game--silhouette"></li>
          <li className="robbers-game--silhouette"></li>
          <li className="robbers-game--silhouette"></li>
        </ul>
      </div>
    </div>
  );
};

export default RobbersInteraction;
