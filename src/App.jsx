import { useState } from "react";
import "./App.css";
import Increment from "./components/Increment";
import Reset from "./components/Reset";
import Update from "./components/Update";

const App = () => {
  console.log("je suis render");

  const [counter, setCounter] = useState(0);

  return (
    <div className="style-app">
      <section>
        <Update counter={counter} setCounter={setCounter} />
        <p>{counter}</p>
        <Increment counter={counter} setCounter={setCounter} />
      </section>
      <Reset setCounter={setCounter} />
    </div>
  );
};

export default App;
