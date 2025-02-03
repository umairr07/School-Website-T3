const Hero = () => {
  return (
    <div className="relative w-full h-[95vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://img.freepik.com/premium-photo/little-joyful-girl-with-stained-hands-paint-makes-faces-smiles-little-girl-got-dirty-rack-green-isolated-background_222185-4552.jpg"
          alt="Kids Education"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-xl pl-5 md:pl-32 ">
        <h3 className="text-md md:text-2xl font-bold font-[cursive]">
          Welcome to KidiVerse
        </h3>
        <h1 className="md:text-5xl text-3xl font-extrabold mt-2 font-[cursive]">
          Best For <span className="text-yellow-300">Education</span>
        </h1>
        <p className="mt-4 lg:text-base">
          Monotonely principle centered architectures through and standards
          magnetic metrics whereas cross-functional products.
        </p>

        {/* Buttons */}
        <div className="mt-6 space-x-4">
          <button className="bg-purple-600 hover:bg-purple-700 italic text-white font-bold py-1 px-3 md:py-2 md:px-4 rounded">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
