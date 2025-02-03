import { FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {
  FaFacebookF,
  FaDribbble,
  FaGooglePlusG,
  FaPinterestP,
} from "react-icons/fa";

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

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-5 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Info */}
        <div>
          <img
            src="https://static.wixstatic.com/media/7c8820_e3ecc2566cfa486fa1274558adb2b0d2~mv2.png"
            alt="Logo"
            className="w-20"
          />
          <p className="mt-4 text-gray-600">
            Distily enable team driven services through extensive relationships
            platforms with interactive content.
          </p>
          <div className="mt-4 space-y-2">
            <p className="flex items-center">
              <FaMapMarkerAlt className="text-yellow-500 mr-2" /> 123 Demo
              Street, City, Country.
            </p>
            <p className="flex items-center">
              <FaPhone className="text-red-500 mr-2" /> +1234 567 890,
              0987654321
            </p>
            <p className="flex items-center">
              <FaEnvelope className="text-orange-500 mr-2" />{" "}
              support@kidiVerse.com
            </p>
            <p className="flex items-center">
              <FaEnvelope className="text-purple-500 mr-2" /> hello@kidverse.com
            </p>
          </div>
        </div>

        {/* Latest News */}
        <div>
          <h3 className="text-xl font-bold text-yellow-500">Latest News</h3>
          <div className="mt-4 space-y-3">
            <div className="flex space-x-3">
              <img
                src={images[0].image}
                alt="news"
                className="w-12 h-12 rounded"
              />
              <div>
                <p className="text-gray-700">
                  Corem psum dolor the amectetuer adipiscing...
                </p>
                <p className="text-sm text-yellow-500">04 February 2021</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <img
                src={images[1].image}
                alt="news"
                className="w-12 h-12 rounded"
              />
              <div>
                <p className="text-gray-700">
                  Corem psum dolor the amectetuer adipiscing...
                </p>
                <p className="text-sm text-yellow-500">28 January 2021</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <img
                src={images[2].image}
                alt="news"
                className="w-12 h-12 rounded"
              />
              <div>
                <p className="text-gray-700">
                  Duis autem iriure dolor in hendrerit esse...
                </p>
                <p className="text-sm text-yellow-500">03 January 2021</p>
              </div>
            </div>
          </div>
        </div>

        {/* Twitter Widget */}
        <div>
          <h3 className="text-xl font-bold text-red-500">Twitter Widget</h3>
          <div className="mt-4 space-y-3">
            <p className="flex items-center">
              <FaTwitter className="text-yellow-500 mr-2" /> Raritas etiam
              processus them dynamicus sequitur...
            </p>
            <p className="flex items-center">
              <FaTwitter className="text-red-500 mr-2" /> Duis autem veleum
              iriure dolor hendrerit...
            </p>
            <p className="flex items-center">
              <FaTwitter className="text-yellow-500 mr-2" /> @frankdoe amber
              tempor cum soluta nobis...
            </p>
          </div>
        </div>

        {/* Recent Photos */}
        <div>
          <h3 className="text-xl font-bold text-orange-500">Recent Photos</h3>
          <div className="grid grid-cols-3 gap-2 mt-4">
            {images.map((item) => (
              <img key={item.id} src={item.image} alt="recent" className="" />
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 mt-10 pt-5 flex flex-col md:flex-row items-center justify-between text-gray-600">
        <div className="flex space-x-3 mt-3 md:mt-0">
          <FaFacebookF className="text-blue-600 cursor-pointer" />
          <FaDribbble className="text-pink-600 cursor-pointer" />
          <FaGooglePlusG className="text-red-600 cursor-pointer" />
          <FaPinterestP className="text-red-700 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
