const increment = (props) => {
  return (
    <button
      onClick={() => {
        props.setCounter(props.counter + 1);
      }}
    >
      {props.counter === 10 ? " " : "+"}
    </button>
  );
};

export default increment;
