import { useContext } from "react";
import { ConterContext } from "./Context/Counter";
import "./App.css";
import Counter from "./Components/Counter";


function App() {
  const counterState = useContext(ConterContext)

  return (
    <div className="App">
      <h1>Count is {counterState.count}</h1>
      <Counter  />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
