const RestaurantAll = () => {
  const restaurants = [
    { name: "Jakarta", image: "/src/assets/jakarta.jpeg" },
    { name: "Bandung", image: "/src/assets/bandung.jpeg" },
    { name: "Jogja", image: "/src/assets/joga.jpeg" },
  ];

  return (
    <div className="container-fluid pb-5 bg-body-tertiary">
      <div data-aos="fade-down" data-aos-duration="500" data-aos-easing="ease-in-sine">
        <div className="row">
          <div className="col-sm-12 py-4 text-center">
            <h1>
              <span>Restoran </span>Steak House
            </h1>
          </div>
        </div>
      </div>

      <div className="row">
        {restaurants.map((restaurant, index) => (
          <div key={index} className="col-md-4">
            <div className="card border-0" data-aos="zoom-in" data-aos-duration="500" data-aos-easing="ease-in-sine">
              <img src={restaurant.image} className="card-img-top" alt={restaurant.name} />
              <h5 className="card-title mt-2">{restaurant.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantAll;
