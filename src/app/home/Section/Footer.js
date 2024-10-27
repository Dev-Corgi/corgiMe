// import InterviewPicture from "@Image/InterviewPicture.png";
import Button from "@/app/Components/Button";
import ContactList from "../Components/FooterSection/ContactList";
import Heading from "../Components/FooterSection/Heading";

export default function Footer() {

  const handleClick1 = () => {
    // 메일 주소와 기본 제목 및 내용 설정
    const email = "bora5242@gmail.com";
    const subject = "프로젝트 협력에 관하여 문의드립니다.";
    const body = "여기에 내용을 작성해주세요.";

    // mailto 링크 생성
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // mailto 링크로 이동
    window.location.href = mailtoLink;
  };

  const handleClick2 = () => {
    // 메일 주소와 기본 제목 및 내용 설정
    const email = "bora5242@gmail.com";
    const subject = "외주 요청에 관하여 문의드립니다";
    const body = "여기에 내용을 작성해주세요.";

    // mailto 링크 생성
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // mailto 링크로 이동
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex flex-col w-full px-4 pb-24 bg-footer md:px-8 lg:px-12 xl:px-16">
      <Heading></Heading>

      <div className="flex flex-col w-full gap-4 mt-16 md:flex-row md:gap-x-12 md:mt-32">
        <Button
          className="w-full h-20 text-white border-white lg:h-24 xl:h-28"
          buttonText={"프로젝트 협력 문의"}
          handleClick={handleClick1}
        ></Button>
        <Button
          className="w-full h-20 text-white border-white lg:h-24 xl:h-28"
          buttonText={"외주 상담 문의"}
          handleClick={handleClick2}
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
