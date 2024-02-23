import imagesData from "../../headers.json";

const Content = () => {
  const images = imagesData.find((item) => item.section === "imagesUrl");

  if (!images) {
    return null;
  }

  const { data } = images;
  return (
    <>
      <section className="py-5 container">
        <div className="row py-5">
          <div className="col-md-7" data-aos="fade-down" data-aos-duration="500" data-aos-easing="ease-in-sine">
            <div className="card h-100 border-0">
              <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {data.map((image, index) => (
                    <div className={`carousel-item ${index === 0 ? "active" : ""}`} data-bs-interval="5000" key={index}>
                      <img src={image} className="d-block w-100 img-content" alt="Header Image" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-sine">
            <div className="card h-100 bg-black d-flex justify-content-center mb-5">
              <h1 className="text-white mb-4">
                STEAK <span>HOUSE</span>
              </h1>
              <p className="text-white">
                The Steak House Restaurant has been established since 1989 until now. We are engaged in managing food, namely export and import meat,
                where the reason for establishing this restaurant is the results of a survey that there is still a lack of meat restaurants,
                especially those that provide meat dishes, in the city of Jakarta.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
