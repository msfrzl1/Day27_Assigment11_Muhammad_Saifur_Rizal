import { Link } from "react-router-dom";

const BreadCrumbs = (props) => {
  const { breadText } = props;
  return (
    <div aria-label="breadcrumb" className="p-3">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to={"/home"} className="text-warning text-decoration-none">
            Home
          </Link>
        </li>
        <li className="breadcrumb-item active text-white" aria-current="page">
          {breadText}
        </li>
      </ol>
    </div>
  );
};

export default BreadCrumbs;
