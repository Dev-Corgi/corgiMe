import PhotoSlider from "@/app/home/Components/IntroduceSection/PhotoSlider";
import AboutMySelf from "../Components/IntroduceSection/AboutMySelf";
import Title from "../Components/IntroduceSection/Title";
import SkillList from "../Components/IntroduceSection/SkillList";
import SeparateLine from "../Components/IntroduceSection/SeparateLine";

export default function IntroduceSection() {
  return (
    <div className="flex flex-col w-full px-4 md:px-8 lg:px-12 xl:px-16">
      <Title></Title>
      <div className="flex flex-col w-full gap-20 md:gap-0 md:justify-between md:flex-row mt-14 md:mt-20 lg:mt-32 xl:mt-40 md:items-center">
        <PhotoSlider></PhotoSlider>
        <AboutMySelf></AboutMySelf>
      </div>
      <SkillList></SkillList>
      <SeparateLine></SeparateLine>
    </div>
  );
}
