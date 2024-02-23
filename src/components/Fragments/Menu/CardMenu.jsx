import BreadCrumbs from "../../Element/Bread-Crumb/BreadCrumb";
import Button from "../../Element/Button/Button";
import menuData from "../Menu/menus.json";

const CardMenu = () => {
  return (
    <main className="container" id="menu">
      <BreadCrumbs breadText="Menu" />
      <div className="row mb-3">
        <div className="row py-5 text-center" data-aos="fade-down" data-aos-duration="500" data-aos-easing="ease-in-sine">
          <h1 className="text-white">
            All <span>Menu</span>
          </h1>
        </div>
      </div>
      <div className="row">
        {menuData.map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100" data-aos="zoom-in" data-aos-duration="500" data-aos-easing="ease-in-sine">
              <img src={item.image} className="card-img-top" alt={item.name} style={{ height: "250px" }} />
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <h5 className="mb-5"> {item.price}</h5>
                <Button className="btn buttonAll w-100">Order</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CardMenu;
