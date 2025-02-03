const ClassCard = ({ classInfo }) => {
  return (
    <div className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105  font-[cursive] bg-white">
      <div className="rounded-t-lg overflow-hidden">
        <img
          src={classInfo.image}
          alt=""
          className="w-full h-[250px] object-cover"
        />
      </div>
      <div className="flex space-x-2 p-3">
        <p className="text-xs px-2 py-2 bg-purple-700 text-white rounded-full">
          Class Size: {classInfo.classSize}
        </p>
        <p className="text-xs px-2 py-2 bg-orange-600 text-white rounded-full">
          Age: {classInfo.age}
        </p>
        <p className="text-xs px-2 py-2 bg-green-600 text-white rounded-full">
          Fees: {classInfo.fee}
        </p>
      </div>
      <div className="p-4 bg-gray-50 rounded-b-lg">
        <h3
          style={{ color: classInfo.color }}
          className="font-semibold text-xl mb-3 text-center font-[cursive]"
        >
          {classInfo.title}
        </h3>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-semibold text-[#E84B3A]">Class Time:</span>{" "}
          {classInfo.time}
        </p>
        <p className="text-gray-500 mb-4">{classInfo.description}</p>
      </div>
      <div className="flex justify-between px-4 py-2 mt-3">
        {/* Add any action buttons here if needed, such as "Enroll Now" */}
      </div>
    </div>
  );
};

export default ClassCard;
