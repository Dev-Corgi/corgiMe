import Image from "next/image";
import SubLabels from "@/app/Components/SubLabels";
import interviewPicture from "@Image/interviewPicture.jpg"
export default function InterviewFrame() {
  return (
    <div className="flex flex-col gap-5 mt-8 md:mt-48">
    <SubLabels text={"개발 모토"}></SubLabels>
    <p className="text-2xl leading-tight font-primary text-primary">
      서비스에 가치를 더합니다
    </p>
    <Image
      src={interviewPicture}
      alt="Interview Picture"
      sizes="(max-width: 428px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 40vw, (max-width: 1440px) 33vw, 25vw"
      className={"w-full aspect-[3/2] object-cover rounded-2xl"}
    />
    <p className="text-xs leading-tight font-primary text-secondary">
    CORGI는 단순한 페이지의 기능 구현을 넘어, SEO 와 사용자 경험을 고려하여 <b>서비스</b> 로서의 웹을 구현하는데 가치를 둡니다.
    </p>
  </div>
  );
}