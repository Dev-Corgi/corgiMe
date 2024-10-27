import AwardReferance from "@/app/home/Components/HonorsSection/AwardReferance";
export default function AwardList() {
    const AwwardsList = [
        { featuring: "수상, 우수상", year: 2023, awardName: "UMC 해커톤" },
        { featuring: "수상, 장려상", year: 2023, awardName: "RCY 나눔봉사 해커톤" },
        { featuring: "멘토링 및 자문", year: 2023, awardName: "인하대 공통 해커톤" },
        { featuring: "멘토링 강연", year: 2023, awardName: "UMC 컨퍼런스 강연" },
        { featuring: "수상, 우수상", year: 2022, awardName: "KSPO 공공데이터 공모" },
        { featuring: "수상, 우수상", year: 2022, awardName: "2022 장애인 분야 해커톤" },
        { featuring: "수상, 우수상", year: 2021, awardName: "국립도서관 활용 공모전" },
        { featuring: "총괄 교육", year: 2021, awardName: "IGRUS 프론트엔드 장" },
      ];
  return (
    <div className="w-full md:w-104 md:mt-14 lg:w-144 xl:w-208">
    {AwwardsList.map((awardInfo, index) => {
      return (
        <AwardReferance
          awardInfo={awardInfo}
          key={index}
        ></AwardReferance>
      );
    })}
  </div>
  );
}