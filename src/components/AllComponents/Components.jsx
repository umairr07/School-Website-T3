import Hero from "../Hero/Hero";
import ClassSection from "../Sections/ClassSection";
import Gallery from "../Sections/Gallery";
import KidsAcademySection from "../Sections/KidsAcademySection ";
import Section1 from "../Sections/Section1";
import StatsSection from "../Sections/StatsSection";
import Teachers from "../Sections/TeacherSection";
import Testimonial from "../Testimonials/Parents";

const Components = () => {
  return (
    <div>
      <Hero />
      <Section1 />
      <KidsAcademySection />
      <ClassSection />
      <Teachers />
      <Gallery />
      <StatsSection />
      <Testimonial />
    </div>
  );
};

export default Components;
