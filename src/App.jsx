import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Components from "./components/AllComponents/Components";
import Header from "./components/Header/Header";
import ScrollToTop from "./utils/ScrollToTop";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Classes from "./pages/Classes/Classes";
import Contacts from "./pages/Contacts/Contacts";
import TeachersPage from "./pages/Teachers/Teachers";

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <div className="font-sans">
          <Header />
          <div className="pt-16">
            <Routes>
              <Route path="/" element={<Components />} />
              <Route path="/about" element={<About />} />
              <Route path="/teachers" element={<TeachersPage />} />
              <Route path="/classes" element={<Classes />} />
              <Route path="/contact" element={<Contacts />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
