const WhyChooseUs = () => {
  const expertiseLeft = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-[#ff8a00]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: "Expert Teachers",
      description:
        "Distinctively enhance empowered and alignments without leveraged architectures professionally.",
      color: "#FFC000",
    },
    // Add two more expertise objects here following the same structure
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-[#007bff]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.75 17L9 20l-1 1h5m-7-5.25v10.5c0 1.097.903 2 2 2h7a2 2 0 002-2V4l-7 5.25m-3 1.5l-3-3m6-6l-3-3"
          />
        </svg>
      ),
      title: "Multimedia Class",
      description:
        "Distinctively enhance empowered and alignments without leveraged architectures professionally.",
      color: "#007bff",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-[#9c27b0]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19V6a2 2 0 012-2h5a2 2 0 012 2v13m-3-10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Music And Art Class",
      description:
        "Distinctively enhance empowered and alignments without leveraged architectures professionally.",
      color: "#9c27b0",
    },
  ];

  const expertiseRight = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-[#f00]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m14 0l-2-2m-2 4l-2 2m-6 0l-2-2m0 0l-2 2"
          />
        </svg>
      ),
      title: "Expert Teachers",
      description:
        "Distinctively enhance empowered and alignments without leveraged architectures professionally.",
      color: "#f00",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-[#007bff]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.75 17L9 20l-1 1h5m-7-5.25v10.5c0 1.097.903 2 2 2h7a2 2 0 002-2V4l-7 5.25m-3 1.5l-3-3m6-6l-3-3"
          />
        </svg>
      ),
      title: "Multimedia Class",
      description:
        "Distinctively enhance empowered and alignments without leveraged architectures professionally.",
      color: "#EE257C",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-[#9c27b0]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19V6a2 2 0 012-2h5a2 2 0 012 2v13m-3-10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Music And Art Class",
      description:
        "Distinctively enhance empowered and alignments without leveraged architectures professionally.",
      color: "#FC7F0C",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#92278F] mb-4 font-[cursive]">
            Why Choose KidsAcademy
          </h2>
          <p className="text-base text-gray-600">
            Rapidiously expedite granular imperatives before economically sound
            web services.
            <br />
            Credibly actualize pandemic strategic theme platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            {expertiseLeft.map((item, index) => (
              <div key={index} className="mb-8 text-center">
                <div className="flex items-center justify-center w-24 h-24 mx-auto rounded-full bg-[#ffe9c4] mb-4">
                  {item.icon}
                </div>
                <h3
                  className="text-xl font-bold font-[cursive] mb-2"
                  style={{ color: item.color }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://aminurislam.com/labartisan/kidsacademy-demo/kidsacademy/images/feature.jpg"
              alt="Feature"
              className="max-w-full h-auto"
            />
          </div>
          <div>
            {expertiseRight.map((item, index) => (
              <div key={index} className="mb-8 text-center">
                <div className="flex items-center justify-center w-24 h-24 mx-auto rounded-full bg-[#ffc4c4] mb-4">
                  {item.icon}
                </div>
                <h3
                  className="text-xl  font-bold font-[cursive] mb-2"
                  style={{ color: item.color }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
