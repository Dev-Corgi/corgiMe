import SectionArrow from "@SVG/SectionArrow.svg";
import TopWhileVIewWrapper from "@/app/UtilComponents/TopWhileViewWrapper";

export default function Heading() {
  return (
    <div className="relative flex flex-col items-center w-full mt-24 md:mt-40">
    <div className="flex flex-col items-center leading-none text-center text-white font-primary text-7xl md:hidden">
      <TopWhileVIewWrapper>
        <p>Lets</p>
      </TopWhileVIewWrapper>
      <TopWhileVIewWrapper>
        <p>Co<span className="font-accent text-point">nn</span>ect</p>
      </TopWhileVIewWrapper>
    </div>

    <div className="hidden leading-none text-center text-white md:flex md:flex-col md:items-center font-primary text-7xl">
      <TopWhileVIewWrapper>
        <p>LETS TALK</p>
      </TopWhileVIewWrapper>
      <TopWhileVIewWrapper>
        <p>ABOUT THE NEXT</p>
      </TopWhileVIewWrapper>
      <TopWhileVIewWrapper>
        <p>BIG THING</p>
      </TopWhileVIewWrapper>
    </div>
    <SectionArrow className="absolute bottom-0 left-0 hidden size-14 lg:size-16 xl:size-20 text-secondary md:block"></SectionArrow>
  </div>
  );
}