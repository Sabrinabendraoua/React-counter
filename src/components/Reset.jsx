const reset = (props) => {
  return (
    <button
      onClick={() => {
        props.setCounter(0);
      }}
    >
      Reset
    </button>
  );
};

export default reset;
