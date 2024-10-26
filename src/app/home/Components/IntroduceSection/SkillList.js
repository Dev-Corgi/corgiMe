import SectionArrow from "@SVG/SectionArrow.svg";
import SubLabels from "@/app/Components/SubLabels";
import TopWhileVIewWrapper from "@/app/UtilComponents/TopWhileViewWrapper";
export default function SkillList() {
  return (
    <div className="flex flex-col mt-48">
      <SectionArrow className="size-14 lg:size-16 xl:size-20 text-secondary"></SectionArrow>
      <div className="flex flex-col ml-14 md:w-72 lg:w-88 xl:w-104 md:ml-20 lg:ml-24 xl:ml-28">
        <SubLabels
          className="mt-3"
          text={"원하시는 목표에 맞춰\n<b>맞춤형</b> 솔루션을 제공합니다"}
        ></SubLabels>
        <div className="mt-5 text-2xl leading-tight uppercase font-primary text-primary">
          <TopWhileVIewWrapper>
            <p>Web & mobile / ui&ux /</p>
          </TopWhileVIewWrapper>
          <TopWhileVIewWrapper>
            <p>branding / front-end</p>
          </TopWhileVIewWrapper>
          <TopWhileVIewWrapper>
            <p>front-end development</p>
          </TopWhileVIewWrapper>
        </div>
      </div>
    </div>
  );
}
