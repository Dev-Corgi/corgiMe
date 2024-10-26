import TopWhileVIewWrapper from "../UtilComponents/TopWhileViewWrapper";

export default function SubLabels({ className, text }) {
  const textLines = text.split("\n");

  // 문자열을 JSX로 변환하는 함수
  const convertTextToJSX = (text) => {
    const parts = text.split(/(<b>.*?<\/b>)/g);
    return parts.map((part, index) =>
      part.match(/<b>(.*?)<\/b>/) ? (
        <b key={index}>{part.replace(/<b>|<\/b>/g, '')}</b>
      ) : (
        part
      )
    );
  };

  return (
    <div className={`${className}`}>
      {textLines.map((textLine, index) => (
        <TopWhileVIewWrapper key={index}>
          <p className="text-xs leading-tight uppercase font-primary text-secondary">
            {convertTextToJSX(textLine)}
          </p>
        </TopWhileVIewWrapper>
      ))}
    </div>
  );
}
