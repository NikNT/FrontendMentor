import PropTypes from "prop-types";

const Button = ({ onClick }) => {
  const data = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
  ];

  return (
    <>
      {data.map((d) => (
        <button key={d.id} onClick={() => onClick(d.id)}>
          {d.value}
        </button>
      ))}
    </>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
