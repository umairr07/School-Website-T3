const KidsAcademySection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-20 md:px-32">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://aminurislam.com/labartisan/kidsacademy-demo/kidsacademy/images/about/about.png" // Replace with your image URL
            alt="Kids Academy students"
            className="max-w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 text-white md:pl-12">
          <h2 className="text-4xl font-bold mb-4 font-[cursive]">
            About Our KidiVerse
          </h2>
          <p className="text-base mb-6 ">
            Enthusiastically disseminate competitive opportunities through
            transparent and actions. Compellingly seize viral schemas through
            intermandated creative is adiea sources. Enthusiastically plagiarize
            client-centered relationships for the covalent experiences.
            Distinctively architect 24/365 service for wireless is ebusiness
            ahosfluorescently. Efficiently communicate cooperative methods of
            empowerment awesome through. Monotonectaly myocardinate cross and
            functional niche markets and an functional.
          </p>
          <div className="mt-6 space-x-4">
            <button className="bg-purple-600 hover:bg-purple-700 italic text-white font-bold py-1 px-3 md:py-2 md:px-4 rounded">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidsAcademySection;
