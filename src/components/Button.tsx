interface Props {
  link?: string;
  text: string;
  color: string;
  textcolor: string;
  backgroundColor: string;
}

const Button = ({ text, color, textcolor, backgroundColor, link }: Props) => {
  const content = (
    <>
      <div className="button--ball-container">
        <div className={`button--ball bg-${textcolor}`}>
          <hr
            style={{
              transform: `rotate(${15 - Math.random() * 30}deg) scale(1.1)`,
            }}
            className={`w-full border-solid border-${color} border-t-[1px]`}
          />
        </div>
      </div>

      <span className={`button--text text-${textcolor}`}>{text}</span>
      <div className="button--ball-container">
        <div className={`button--ball bg-${textcolor}`}>
          <hr
            style={{
              transform: `rotate(${15 - Math.random() * 30}deg) scale(1.1)`,
            }}
            className={`w-full border-solid border-${color} border-t-[1px]`}
          />
        </div>
      </div>
    </>
  );

  return link ? (
    <a
      href={link}
      target="_blank"
      className={`button bg-${color} border-${
        backgroundColor === color ? "black" : backgroundColor
      }`}
    >
      {content}
    </a>
  ) : (
    <button
      className={`button bg-${color} border-${
        backgroundColor === color ? "black" : backgroundColor
      }`}
    >
      {content}
    </button>
  );
};

export default Button;
