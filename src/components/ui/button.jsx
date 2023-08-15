const Button = (props) => {
  return (
    <button
      className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
