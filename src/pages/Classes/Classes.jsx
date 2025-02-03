import ClassSection from "../../components/Sections/ClassSection";

function Classes() {
  return (
    <div>
      <div>
        <div className="relative h-[300px] bg-gradient-to-b from-[#8DC63F] to-white overflow-hidden">
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-gray-700 font-bold text-2xl md:text-5xl lg:text-4xl leading-tight mb-4 font-[cursive]">
              Our Classes
            </h1>
            <div className="text-gray-600  text-lg md:text-xl">
              <span className="mr-2">Home</span> - Classes
            </div>
          </div>
          <div className="absolute inset-0 "></div>{" "}
        </div>
      </div>
      <div>
        <ClassSection />
      </div>
    </div>
  );
}

export default Classes;
