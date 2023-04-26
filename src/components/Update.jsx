const update = (props) => {
  return (
    <button
      onClick={() => {
        if (props.counter > 0) {
          props.setCounter(props.counter - 1);
        }
      }}
    >
      -
    </button>
  );
};

export default update;
