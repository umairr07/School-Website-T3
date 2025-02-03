import ClassCard from "../Cards/ClassCard";

const classData = [
  {
    title: "Imagination Classes",
    time: "08:00 am-10:00 am",
    description:
      "Draticaly novate fuly rarched an plications awesome theme education",
    location: "218 New Newyork Road, USA 1205",
    classSize: "30-40",
    age: "5-6",
    fee: "$1500",
    image:
      "https://aminurislam.com/labartisan/kidsacademy-demo/kidsacademy/images/classes/class_01.jpg",
    color: "#FFC000",
  },
  {
    title: "Drawing Classes",
    time: "08:00 am-10:00 am",
    description:
      "Draticaly novate fuly rarched an plications awesome theme education",
    location: "218 New Newyork Road, USA-1205",
    classSize: "30-40",
    age: "5-6",
    fee: "$1500",
    image:
      "https://aminurislam.com/labartisan/kidsacademy-demo/kidsacademy/images/classes/class_02.jpg",
    color: "#E84B3A",
  },
  {
    title: "Learning Classes",
    time: "08:00 am-10:00 am",
    description:
      "Draticaly novate fuly rarched an plications awesome theme education",
    location: "218 New Newyork Road, USA-1205",
    classSize: "30-40",
    age: "5-6",
    fee: "$1500",
    image:
      "https://aminurislam.com/labartisan/kidsacademy-demo/kidsacademy/images/classes/class_03.jpg",
    color: "#00A63E",
  },
];

const ClassSection = () => {
  return (
    <div className="container mx-auto p-4 md:py-20">
      <center>
        <h2 className="text-3xl font-bold mb-4 text-purple-700 font-[cursive]">
          Our Popular Classes
        </h2>
        <p className="mb-6 text-gray-500">
          Rapidiously expedite granular imperatives before economically sound
          web services, <br /> Credibly actualize pandemic strategic
          themeplatform.
        </p>
      </center>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:px-32 ">
        {classData.map((classItem, index) => (
          <ClassCard key={index} classInfo={classItem} />
        ))}
      </div>
    </div>
  );
};

export default ClassSection;
