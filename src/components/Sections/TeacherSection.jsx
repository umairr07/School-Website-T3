import React from "react";
import {
  FaFacebookF,
  FaVimeoV,
  FaTwitter,
  FaPinterestP,
  FaRss,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";

const teachers = [
  {
    name: "Broklin Doel",
    subject: "Sains Teacher",
    image:
      "https://aminurislam.com/labartisan/kidsacademy-demo/kidsacademy/images/teachers/teacher_01.jpg",
    bgColor: "bg-purple-700",
    socialLinks: ["#", "#", "#", "#", "#"],
  },
  {
    name: "Alex Jhonson",
    subject: "Art Teacher",
    image:
      "https://aminurislam.com/labartisan/kidsacademy-demo/kidsacademy/images/teachers/teacher_02.jpg",
    bgColor: "bg-red-600",
    socialLinks: ["#", "#", "#", "#", "#"],
  },
  {
    name: "Robot Jhonson",
    subject: "Math Teacher",
    image:
      "https://aminurislam.com/labartisan/kidsacademy-demo/kidsacademy/images/teachers/teacher_03.jpg",
    bgColor: "bg-orange-500",
    socialLinks: ["#", "#", "#", "#", "#"],
  },
  {
    name: "Janaton Doe",
    subject: "English Teacher",
    image:
      "https://aminurislam.com/labartisan/kidsacademy-demo/kidsacademy/images/teachers/teacher_04.jpg",
    bgColor: "bg-blue-500",
    socialLinks: ["#", "#", "#", "#", "#"],
  },
];

const Teachers = () => {
  const location = useLocation();

  return (
    <div
      className={`${
        location.pathname === "/" ? "bg-green-500 py-16 " : "bg-white py-10"
      } px-4`}
    >
      {location.pathname === "/" ? (
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 font-[cursive]">
            Meet Our Teachers
          </h2>
          <p className="text-white text-center max-w-2xl mx-auto py-5">
            Rapidously expedite granular imperatives before economically sound
            web services. <br />
            Credibly actualize pandemic strategic themeplatform.
          </p>
        </div>
      ) : (
        <p></p>
      )}

      <div className="grid md:grid-cols-2 gap-6  max-w-6xl mx-auto">
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              className="w-full md:w-1/2 h-60 object-cover"
            />
            <div
              className={`${teacher.bgColor} text-white p-6 md:w-1/2 flex flex-col justify-between`}
            >
              <div>
                <h3 className="text-xl font-bold font-[cursive]">
                  {teacher.name}{" "}
                  <span className="text-sm font-light">{teacher.subject}</span>
                </h3>
                <div className="flex gap-3 my-2">
                  <FaFacebookF />
                  <FaVimeoV />
                  <FaTwitter />
                  <FaPinterestP />
                  <FaRss />
                </div>
                <p className="text-sm">
                  Distinctively initiate and sustainable synergy vaan tactical
                  opportunities. <br />
                  Awesome theme ollaboratively.
                </p>
              </div>
              <a
                href="#"
                className="mt-3 inline-block text-white font-semibold underline"
              >
                View Portfolio
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
