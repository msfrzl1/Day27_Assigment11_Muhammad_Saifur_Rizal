import Stars from "../../Element/Stars/Stars";
import reviews from "../../headers.json";

const Rating = () => {
  const reviewsCustomer = reviews.find((item) => item.section === "reviews");

  if (!reviewsCustomer) {
    return null;
  }

  const { data } = reviewsCustomer;

  return (
    <section className="container-fluid mb-5">
      <div className="row text-center">
        <div className="col-sm-12 mb-5">
          <div data-aos="fade-down" data-aos-duration="500" data-aos-easing="ease-in-sine">
            <h1 className=" text-white mb-3">
              RATING <span>CUSTOMER</span>
            </h1>
          </div>
        </div>
      </div>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {data.map((review, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`} data-bs-interval="3000">
              <div className="row">
                <div className="col" data-aos="zoom-in" data-aos-duration="500" data-aos-easing="ease-in-sine">
                  <div className="card d-flex align-items-center h-100 py-5">
                    <div className="mb-1">
                      <img src="/src/assets/Logo-Steak-House.jpeg" alt="profile" className="img-rating" />
                    </div>
                    <div className="card-body text-center p-0">
                      <h5 className="mb-2">{review.name}</h5>
                      <Stars starCount={5} />
                      <p>{review.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rating;
