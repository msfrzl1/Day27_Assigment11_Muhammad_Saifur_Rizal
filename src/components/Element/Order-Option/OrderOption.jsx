const OrderOption = (props) => {
  const { icon, title, description } = props;

  return (
    <div className="col-md-4 mb-4">
      <div className="card rounded shadow p-3 h-100" data-aos="zoom-in" data-aos-duration="500" data-aos-easing="ease-in-sine">
        <div className="text-center">
          <i className={icon}></i>
        </div>
        <div className="card-body text-center fw-semibold">
          <div className="text-center">
            <h3 className="card-title">{title}</h3>
          </div>
          <div className="card-text text-center">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderOption;
