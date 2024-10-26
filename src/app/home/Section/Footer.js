// import InterviewPicture from "@Image/InterviewPicture.png";
import Button from "@/app/Components/Button";
import ContactList from "../Components/FooterSection/ContactList";
import Heading from "../Components/FooterSection/Heading";

export default function Footer() {

  return (
    <div className="flex flex-col w-full px-4 pb-24 bg-footer md:px-8 lg:px-12 xl:px-16">
      <Heading></Heading>

      <div className="flex flex-col w-full gap-4 mt-16 md:flex-row md:gap-x-12 md:mt-32">
        <Button
          className="w-full h-20 text-white border-white lg:h-24 xl:h-28"
          buttonText={"프로젝트 협력 문의"}
        ></Button>
        <Button
          className="w-full h-20 text-white border-white lg:h-24 xl:h-28"
          buttonText={"외주 상담 문의"}
        ></Button>
      </div>

      <ContactList></ContactList>

      <div className="flex flex-col gap-2 mt-40 md:flex-row md:justify-between">
        <p className="text-sm leading-tight font-primary text-secondary">
          ©2024 Dev Corgi, All rights reserved • Credits
        </p>
        <p className="text-sm leading-tight font-primary text-secondary">
          2024 Portfolio
        </p>
      </div>
    </div>
  );
}
