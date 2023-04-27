const increment = (props) => {
  return (
    <button
      onClick={() => {
        props.setCounter(props.counter + 1);
      }}
    >
      {props.counter === 10 ? null : "+"}
    </button>
  );
};

export default increment;
