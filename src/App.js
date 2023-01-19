// import { useContext } from "react";
// import { ConterContext } from "./Context/Counter";
import "./App.css";
import Cart from "./Components/Cart";
import Item from "./Components/Item";
// import Counter from "./Components/Counter";


function App() {
  // const counterState = useContext(ConterContext)

  return (
    <div className="App">
      <Item name="I Phone 13" price={60000}/>
      <Item name="I Pad Pro" price={100000}/>
      <Item name="Saree" price={15000}/>
      <Cart/>





      {/* <h1>Count is {counterState.count}</h1>
      <Counter  />
      <Counter />
      <Counter />
      <Counter /> */}
    </div>
  );
}

export default App;
