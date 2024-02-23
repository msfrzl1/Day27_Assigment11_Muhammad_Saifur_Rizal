import Contents from "../Fragments/About/Contents";
import RestaurantAll from "../Fragments/About/RestaurantAll";
import Footer from "../Fragments/Home/Footer";
import Header from "../Fragments/Home/Header";
import Navbar from "../Fragments/Home/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <Header section="about" />
      <Contents />
      <RestaurantAll />
      <Footer />
    </>
  );
};

export default About;
