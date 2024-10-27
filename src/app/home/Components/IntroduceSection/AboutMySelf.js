import TopWhileVIewWrapper from "@/app/UtilComponents/TopWhileViewWrapper";
import ContactIcon from "@SVG/IconContact.svg";
import SubLabels from "@/app/Components/SubLabels";
import { useLenis } from "@root/context/lenisContext";
export default function AboutMySelf() {
  const lenis = useLenis();

  const handleClick=()=>{
      if (lenis) {
      lenis.scrollTo(document.documentElement.scrollHeight, {
      });
    }
  }
  return (
    <div className="flex flex-col text-3xl leading-none uppercase md:w-80 lg:w-96 xl:w-120 md:order-first font-primary text-primary">
    <SubLabels text={"<b>CORGI </b>를 만나보세요"}></SubLabels>
    <div className="mt-5">
    <TopWhileVIewWrapper>
        <p>안녕하세요,</p>
      </TopWhileVIewWrapper>
      <TopWhileVIewWrapper>
        <p>모바일과 웹에서</p>
      </TopWhileVIewWrapper>
      <TopWhileVIewWrapper>
        <p>기능을 넘어서</p>
      </TopWhileVIewWrapper>
      <TopWhileVIewWrapper>
        <p className="font-accent text-point">감각적인</p>
      </TopWhileVIewWrapper>
      <TopWhileVIewWrapper>
        <p>경험을 선사할 수 있는</p>
      </TopWhileVIewWrapper>
      <TopWhileVIewWrapper>
        <p>인터페이스를 창조하는,</p>
      </TopWhileVIewWrapper>
      <TopWhileVIewWrapper>
        <p>DEV CORGI 입니다</p>
      </TopWhileVIewWrapper>
      </div>

    <div className="flex flex-row items-center w-full mt-10" onClick={handleClick}>
      <div className="flex items-center justify-center rounded-full pointer-events-none ml-14 size-12 lg:size-14 xl:size-16 bg-primary">
        <ContactIcon className="text-white size-4 lg:size-5 xl:size-6"></ContactIcon>
      </div>
      <p className="ml-4 text-xs leading-tight uppercase pointer-events-none font-primary text-primary">
        Contact
      </p>
    </div>
  </div>
  );
}