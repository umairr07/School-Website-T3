import { CiGlobe } from "react-icons/ci";
import { HiUserGroup } from "react-icons/hi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { MdOutlineAbc } from "react-icons/md";

const features = [
  {
    icon: <MdOutlineAbc />,
    title: "Active Learning",
    description:
      "Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after",
    fontcolor: "#E84B3A",
  },
  {
    icon: <LiaChalkboardTeacherSolid />,
    title: "Expert Teachers",
    description:
      "Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after",
    fontcolor: "#FFC000",
  },
  {
    icon: <CiGlobe />,
    title: "Strategic Location",
    description:
      "Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after",
    fontcolor: "#FC7F0C",
  },
  {
    icon: <HiUserGroup />,
    title: "Full Day Programs",
    description:
      "Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after",
    fontcolor: "#92278F",
  },
];

const Section1 = () => {
  return (
    <div className="container mx-auto px-4 py-32">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:px-28">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div
              style={{ backgroundColor: feature.fontcolor }}
              className={`rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-gray-200`}
            >
              {" "}
              {/* Icon container */}
              <span className="text-4xl text-white">{feature.icon}</span>{" "}
              {/* Render the icon component */}
            </div>
            <h3
              style={{ color: feature.fontcolor }}
              className={`text-lg font-semibold mb-2 font-[cursive]`}
            >
              {" "}
              {/* Apply font color class */}
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section1;
