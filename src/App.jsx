import { useState } from "react";
import "./App.css";
import Increment from "./components/Increment";
import Reset from "./components/Reset";

const App = () => {
  console.log("je suis render");

  const [counter, setCounter] = useState(0);

  const updateCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="style-app">
      <section>
        <button onClick={updateCounter}>-</button>
        <p>{counter}</p>
        <Increment counter={counter} setCounter={setCounter} />
      </section>
      <Reset setCounter={setCounter} />
    </div>
  );
};

export default App;
