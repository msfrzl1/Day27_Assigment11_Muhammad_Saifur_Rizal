import Navbar from "../Fragments/Home/Navbar";
import Header from "../Fragments/Home/Header";
import Content from "../Fragments/Home/Content";
import MenuBestSeller from "../Fragments/Home/MenuBestSeller";
import Order from "../Fragments/Home/Order";
import Rating from "../Fragments/Home/Rating";
import Footer from "../Fragments/Home/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Header section="home" />
      <Content />
      <Order />
      <MenuBestSeller />
      <Rating />
      <Footer />
    </>
  );
}

export default Home;
