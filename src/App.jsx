import { useState } from "react";
import "./App.css";

const App = () => {
  console.log("je suis render");

  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter(counter + 1);
  };
  const updateCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const deleteCounter = () => {
    setCounter(0);
  };
  return (
    <div className="style-app">
      <section>
        <button onClick={updateCounter}>-</button>
        <p
          className={{ handleCounter } ? { handleCounter } : { updateCounter }}
        >
          {counter}
        </p>
        <button onClick={handleCounter}>+</button>
      </section>
      <button onClick={deleteCounter}>Reset</button>
    </div>
  );
};

export default App;
