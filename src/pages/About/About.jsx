import React from "react";
import Section1 from "../../components/Sections/Section1";
import KidsAcademySection from "../../components/Sections/KidsAcademySection ";
import WhyChooseUs from "./WhyChooseUs";

const About = () => {
  return (
    <div>
      <div>
        <div className="relative h-[300px] bg-gradient-to-b from-[#FFC105] to-yelow-200 overflow-hidden">
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-gray-700 font-bold text-2xl md:text-5xl lg:text-4xl leading-tight mb-4 font-[cursive]">
              About Our Kids Academy
            </h1>
            <div className="text-gray-600  text-lg md:text-xl">
              <span className="mr-2">Home</span> - About us
            </div>
          </div>
          <div className="absolute inset-0 "></div>{" "}
        </div>
      </div>

      <div>
        <Section1 />
        <KidsAcademySection />
        <WhyChooseUs />
      </div>
    </div>
  );
};

export default About;
