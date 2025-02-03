import React from "react";

const data = [
  {
    quote:
      "Professionally predominate that timely infrastructures tops line methodologies Colaboratively seize scalable channels before longterm high impact",
    author: "Joly Smith",
    role: "ui/ux Designer",
    image:
      "https://aminurislam.com/labartisan/kidsacademy-demo/kidsacademy/images/testimonial/testimonial_01.jpg", // Replace with actual image URLs
  },
  {
    quote:
      "Professionally predominate that timely infrastructures tops line methodologies Colaboratively seize scalable channels before longterm high impact",
    author: "Dwayne",
    role: "ui/ux Designer",
    image:
      "https://aminurislam.com/labartisan/kidsacademy-demo/kidsacademy/images/testimonial/testimonial_02.jpg", // Replace with actual image URLs
  },
  {
    quote:
      "Professionally predominate that timely infrastructures tops line methodologies Colaboratively seize scalable channels before longterm high impact",
    author: "Janie Rocks",
    role: "ui/ux Designer",
    image:
      "https://aminurislam.com/labartisan/kidsacademy-demo/kidsacademy/images/testimonial/testimonial_03.jpg", // Replace with actual image URLs
  },
];

const Testimonial = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-[#8204DD] font-[cursive]">
            What Parents Say
          </h2>
          <p className="mt-4 text-base text-gray-500">
            Rapidiously expedite granular imperatives before economically sound
            web services.
            <br />
            Credibly actualize pandemic strategic theme platform.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-lg shadow-lg p-8 text-white"
              style={{
                background: "linear-gradient(135deg, #7b2ff7, #1c92d2)",
              }}
            >
              {/* Quote Text */}
              <div className="text-lg leading-relaxed italic relative">
                <span className="text-4xl text-white opacity-50 absolute -top-4 left-0">
                  &ldquo;
                </span>
                {testimonial.quote}
                <span className="text-4xl text-white opacity-50 absolute -bottom-4 right-4">
                  &rdquo;
                </span>
              </div>

              {/* Author Section */}
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full border-2 border-white shadow-md"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium">{testimonial.author}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
