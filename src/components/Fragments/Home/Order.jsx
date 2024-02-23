import OrderOption from "../../Element/Order-Option/OrderOption";

const Order = () => {
  return (
    <section className="container-fluid py-5">
      <div className="bg-light rounded px-3">
        <div className="row text-center">
          <div className="col-sm-12 py-3">
            <div data-aos="fade-down" data-aos-duration="500" data-aos-easing="ease-in-sine">
              <h1 className="mb-3">
                ORDER <span>ONLINE</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="row ">
          <OrderOption
            icon="bi bi-truck text-center icon-order"
            title="Delivery Order"
            description="Free delivery service for every purchase of our food menu. Service area up to 15 KM"
          />
          <OrderOption
            icon="bi bi-card-list text-center icon-order"
            title="Order Online"
            description="Enjoy our dishes directly from your home/office"
          />
          <OrderOption
            icon="bi bi-shop text-center icon-order"
            title="Buffet"
            description="For your every special event. For information, please contact our office directly."
          />
        </div>
      </div>
    </section>
  );
};

export default Order;
