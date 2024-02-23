import Button from "../../Element/Button/Button";
import Stars from "../../Element/Stars/Stars";
import menusBestSeller from "../../headers.json";

const MenuBestSeller = () => {
  const menus = menusBestSeller.find((item) => item.section === "menuBestSeller");

  if (!menus) {
    return null;
  }

  const { data } = menus;

  return (
    <main className="container py-5">
      <div className="row py-5">
        <div className="row text-center" data-aos="fade-down" data-aos-duration="500" data-aos-easing="ease-in-sine">
          <h1 className="text-white">
            Menu <span>Best</span> Seller
          </h1>
        </div>
      </div>
      <div className="row">
        {data.map((menu, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100" data-aos="zoom-in" data-aos-duration="500" data-aos-easing="ease-in-sine">
              <img src={menu.image} className="card-img-top" alt={menu.title} />
              <div className="card-body">
                <h5 className="card-title">{menu.title}</h5>
                <Stars starCount={5} />
                <p className="card-text">{menu.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div data-aos="zoom-up" data-aos-duration="500" data-aos-easing="ease-in-sine">
        <Button to="/menu" className="nav-link btn-menu rounded" type="button">
          <p className="d-flex align-items-center justify-content-center h-100">Menu</p>
        </Button>
      </div>
    </main>
  );
};

export default MenuBestSeller;
