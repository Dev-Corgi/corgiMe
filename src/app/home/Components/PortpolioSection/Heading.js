import SectionArrow from "@SVG/SectionArrow.svg";
import HeadingLabel from "@/app/Components/HeadingLabel";
export default function Heading() {
  return (
    <div className="flex flex-col w-full mt-24 md:flex-row md:gap-x-4 md:ml-24 md:mt-52">
    <HeadingLabel className="w-full md:w-min text-start" text={"Feat"}></HeadingLabel>
    <HeadingLabel className="w-full md:w-min text-end" text={"Works"} highlight={"r"}></HeadingLabel>
    <div className="mt-16 size-14 md:mt-0 md:ml-12">
      <SectionArrow className="origin-center rotate-90 size-14 lg:size-16 xl:size-20 text-secondary"></SectionArrow>
    </div>
  </div>
  );
}