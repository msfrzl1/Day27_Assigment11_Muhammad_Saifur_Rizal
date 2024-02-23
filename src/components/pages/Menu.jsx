import Footer from "../Fragments/Home/Footer";
import Header from "../Fragments/Home/Header";
import Navbar from "../Fragments/Home/Navbar";
import CardMenu from "../Fragments/Menu/CardMenu";

const Menu = () => {
  return (
    <>
      <Navbar />
      <Header section="menu" />
      <CardMenu />
      <Footer />
    </>
  );
};

export default Menu;
