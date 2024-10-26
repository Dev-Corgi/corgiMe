import HeadingLabel from "@/app/Components/HeadingLabel";
import SubLabels from "@/app/Components/SubLabels";
export default function Heading() {
  return (
    <div className="flex flex-col gap-12 mt-24 md:flex-row md:items-center">
      <HeadingLabel text = {"Honors"} highlight={"n"}></HeadingLabel>
      <SubLabels className="ml-20" text={"쌓아올린 <b>수년간의</b> 공모전 수상내역과\n 대외활동 목록을 살펴보세요"}></SubLabels>
    </div>
  );
}
