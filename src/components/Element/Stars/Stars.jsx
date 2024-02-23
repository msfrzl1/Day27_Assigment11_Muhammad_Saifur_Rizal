const Stars = (props) => {
  const { starCount } = props;
  const starArray = new Array(starCount).fill("");

  return (
    <div className="mb-3">
      {starArray.map((_, index) => (
        <i key={index} className="bi bi-star-fill text-warning fs-3"></i>
      ))}
    </div>
  );
};

export default Stars;
