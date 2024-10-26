import Button from "@/app/Components/Button";
import Archieve from "../Components/PortpolioSection/Archieve";
import ReferanceGrid from "../Components/PortpolioSection/ReferanceGrid";
import Heading from "../Components/PortpolioSection/Heading";

export default function PortpolioSection() {
  return (
    <div className="flex flex-col w-full px-4 mb-24 md:px-8 lg:px-12 xl:px-16">
      <Heading></Heading>
      <ReferanceGrid></ReferanceGrid>
      <Archieve></Archieve>
      {/* <Button
        className="w-full h-16 mt-32 lg:h-28 md:mt-52 xl:h-32"
        buttonText={"See Playbook"}
        highlight={"l"}
      ></Button> */}
    </div>
  );
}
