import TopWhileVIewWrapper from "../UtilComponents/TopWhileViewWrapper";

export default function HeadingLabel({ className, text, highlight = null }) {
  const resultText =
    highlight == null
      ? text
      : (() => {
          const parts = text.split(highlight);
          return (
            <>
              {parts[0]}
              <span className="font-accent text-point">{highlight}</span>
              {parts[1]}
            </>
          );
        })(); // Immediately invoke the function

  return (
    <TopWhileVIewWrapper className={`${className}`}>
      <p className="font-primary text-7xl text-primary leading-shrink">
        {resultText}
      </p>
    </TopWhileVIewWrapper>
  );
}
