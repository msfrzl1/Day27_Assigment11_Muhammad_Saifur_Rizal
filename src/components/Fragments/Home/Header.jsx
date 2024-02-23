import headersData from "../../headers.json";

const Header = ({ section }) => {
  const headerData = headersData.find((item) => item.section === section);

  if (!headerData) {
    return null;
  }

  const { data } = headerData;

  return (
    <header>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {data.map((header, index) => (
            <div className={`carousel-item  ${index === 0 ? "active" : ""}`} data-bs-interval="5000" key={index}>
              <img src={header.imageUrl} className="d-block w-100 img-header" alt="Header Image" />
              <div className="carousel-caption d-md-block" data-aos="fade-down" data-aos-duration="500" data-aos-easing="ease-in-sine">
                <h2 className="mb-3">{header.title}</h2>
                <p>{header.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
