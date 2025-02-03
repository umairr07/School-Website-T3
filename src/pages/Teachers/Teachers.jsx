import React from "react";
import Teachers from "../../components/Sections/TeacherSection";

function TeachersPage() {
  return (
    <div>
      <div>
        <div className="relative h-[300px] bg-gradient-to-b from-[#14B7F1] to-white overflow-hidden">
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-gray-700 font-bold text-2xl md:text-5xl lg:text-4xl leading-tight mb-4 font-[cursive]">
              Meet our Expert Teachers
            </h1>
            <div className="text-gray-600  text-lg md:text-xl">
              <span className="mr-2">Home</span> - Teachers
            </div>
          </div>
          <div className="absolute inset-0 "></div>{" "}
        </div>
      </div>

      <div className="bg-white">
        <Teachers />
      </div>
    </div>
  );
}

export default TeachersPage;
