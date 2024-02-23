import { Link } from "react-router-dom";

const Button = (props) => {
  const { className, type, to, children } = props;
  return (
    <Link to={to} className={`btn text-white fw-bold buttonAll ${className}`} type={type}>
      {children}
    </Link>
  );
};

export default Button;
