"use client"
import IntroduceSection from "./Section/IntroduceSection";
import PortpolioSection from "./Section/PortpolioSection";
import HonorsSection from "./Section/HonorsSection";
import Footer from "./Section/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
    <IntroduceSection></IntroduceSection>
    <PortpolioSection></PortpolioSection>
    <HonorsSection></HonorsSection>
    <Footer></Footer>
  </div>
  );
}