const update = (props) => {
  return (
    <button
      onClick={() => {
        if (props.counter > 0) {
          props.setCounter(props.counter - 1);
        }
      }}
    >
      {props.counter === 0 ? " " : "-"}
    </button>
  );
};

export default update;
