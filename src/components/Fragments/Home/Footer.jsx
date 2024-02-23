import { Link } from "react-router-dom";

const Footer = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <footer className="container-fluid bg-dark mt-5 pt-3">
      <div className="row">
        <div className="col-md-5 text-light">
          <h4 className="fs-3">Restaurant Steak House</h4>
          <p>The Steak House Restaurant has been established since 1989 until now. We are engaged in managing food, namely export and import meat</p>
          <div className="fs-2 mb-3">
            <Link>
              <i className="bi bi-facebook text-warning me-2"></i>
            </Link>
            <Link>
              <i className="bi bi-twitter text-warning me-2"></i>
            </Link>
            <Link>
              <i className="bi bi-instagram text-warning me-2"></i>
            </Link>
          </div>
        </div>

        <div className="col-md-3 text-light">
          <h4 className="fs-3 mb-3 ">Open Hours</h4>
          <div className="col-md-12">
            <ul className="p-0">
              {days.map((day, index) => (
                <li key={index}>{day}: 9:00 AM - 5:00 PM</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-md-4 text-light">
          <h4 className="fs-3 mb-3">Contact</h4>
          <p>Get the latest information and promos from us.</p>
          <div className="col-md-12">
            <div className="mb-5">
              <input
                type="email"
                className="form-control text-center"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email addres"
              />
              <button type="button" className="btn mt-3 w-100 text-white buttonAll" data-bs-toggle="modal" data-bs-target="#exampleModalFooter">
                Subscribe
              </button>

              <div className="modal fade" id="exampleModalFooter" aria-labelledby="exampleModalFooterLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <div
                        className="alert alert-success modal-title text-black w-100 d-flex align-items-center gap-2"
                        id="exampleModalFooterLabel"
                        role="alert"
                      >
                        <i className="bi bi-check-circle-fill fs-5"> Thanks For Subscribe</i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
