import { BiSolidBusSchool } from "react-icons/bi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiStudentFill } from "react-icons/pi";
import { SiGoogleclassroom } from "react-icons/si";

const stats = [
  { id: 1, icon: <PiStudentFill />, value: "320+", label: "Total Students" },
  { id: 2, icon: <SiGoogleclassroom />, value: "12", label: "Class Rooms" },
  { id: 3, icon: <BiSolidBusSchool />, value: "24", label: "Schools Bus" },
  {
    id: 4,
    icon: <LiaChalkboardTeacherSolid />,
    value: "15",
    label: "Total Teachers",
  },
];

const StatsSection = () => {
  return (
    <div className="bg-[#A852A5] py-24 px-4 text-white relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/bg-pattern.png')] opacity-20"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10 text-center">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center gap-3">
            <span className="text-5xl">{stat.icon}</span>
            <h3 className="text-4xl font-bold mt-2">{stat.value}</h3>
            <p className="text-lg font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
