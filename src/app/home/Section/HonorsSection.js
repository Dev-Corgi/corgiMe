import SectionArrow from "@SVG/SectionArrow.svg";
import Heading from "../Components/HonorsSection/Heading";
import InterviewFrame from "../Components/HonorsSection/InterviewFrame";
import AwardList from "../Components/HonorsSection/AwardList";

export default function HonorsSection() {

  return (
    <div className="flex flex-col w-full px-4 mb-24 md:px-8 lg:px-12 xl:px-16">
      <Heading></Heading>

      <div className="flex flex-col mt-16 md:flex-row md:justify-between md:mt-36">
         <AwardList/>

        <div className="flex flex-col w-full mt-32 md:mt-0 md:order-first md:w-56 lg:w-64 xl:w-80">
          <div className="size-14">
            <SectionArrow className="size-14 lg:size-16 xl:size-20 text-secondary"></SectionArrow>
          </div>

          <InterviewFrame></InterviewFrame>
        </div>
      </div>
    </div>
  );
}
