import Contacts from "../Fragments/Contact/Contacts";
import Footer from "../Fragments/Home/Footer";
import Header from "../Fragments/Home/Header";
import Navbar from "../Fragments/Home/Navbar";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <Header section="contact" />
      <Contacts />
      <Footer />
    </>
  );
};

export default ContactUs;
