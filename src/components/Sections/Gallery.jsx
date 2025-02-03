import React, { useState } from "react";

const images = [
  {
    id: 1,
    category: "Art",
    image:
      "https://aminurislam.com/labartisan/kidsacademy-demo/kidsacademy/images/gallery/gallery_bg_01.jpg",
  },
  {
    id: 2,
    category: "Class",
    image:
      "https://aminurislam.com/labartisan/kidsacademy-demo/kidsacademy/images/gallery/gallery_bg_02.jpg",
  },
  {
    id: 3,
    category: "Art",
    image:
      "https://aminurislam.com/labartisan/kidsacademy-demo/kidsacademy/images/gallery/gallery_bg_03.jpg",
  },
  {
    id: 4,
    category: "Event",
    image:
      "https://aminurislam.com/labartisan/kidsacademy-demo/kidsacademy/images/gallery/gallery_bg_04.jpg",
  },
  {
    id: 5,
    category: "Playing",
    image:
      "https://aminurislam.com/labartisan/kidsacademy-demo/kidsacademy/images/gallery/gallery_bg_05.jpg",
  },
  {
    id: 6,
    category: "Class",
    image:
      "https://aminurislam.com/labartisan/kidsacademy-demo/kidsacademy/images/gallery/gallery_bg_06.jpg",
  },
];

const categories = ["Show all", "Class", "Event", "Playing", "Art"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Show all");

  const filteredImages =
    selectedCategory === "Show all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-700 font-[cursive]">
        Our School Gallery
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mt-2">
        Rapidously expedite granular imperatives before economically sound web
        services. <br />
        Credibly actualize pandemic strategic themeplatform.
      </p>

      <div className="flex justify-center gap-5 mt-6">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`text-lg font-semibold ${
              selectedCategory === cat ? "text-yellow-500" : "text-gray-700"
            } hover:text-yellow-500 transition-all cursor-pointer italic`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-6xl mx-auto">
        {filteredImages.map((img) => (
          <img
            key={img.id}
            src={img.image}
            alt="Gallery"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
