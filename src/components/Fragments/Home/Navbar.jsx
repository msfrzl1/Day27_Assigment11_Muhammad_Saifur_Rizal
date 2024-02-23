import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../../Element/Button/Button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState("");
  const listNavbar = ["Home", "About", "Menu", "Contact"];

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      setScrolled("scrolled");
    } else {
      setScrolled("");
    }
  });

  return (
    <nav className={`navbar navbar-expand-lg ${scrolled}`}>
      <div className="container">
        <div data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in-sine" className="navbar-brand">
          <Link to="/Home" className="navbar-brand">
            <img src="/src/assets/Logo-Steak-House.jpeg" alt="" />
          </Link>
          <Link to="/Home" className="navbar-brand ">
            <h1 className="navbar-brand">
              Steak <span>House</span>
            </h1>
          </Link>
        </div>
        <button
          className="navbar-toggler buttonAll"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-black"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" data-aos="fade-left" data-aos-duration="500" data-aos-easing="ease-in-sine">
            {listNavbar.map((navBar, index) =>
              navBar === "Contact" ? (
                <Button to={`/${navBar}`} className="btn buttonAll w-100" type="button" key={index}>
                  {navBar}
                </Button>
              ) : (
                <Link to={`/${navBar}`} className="nav-link-list" key={index}>
                  {navBar}
                </Link>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
