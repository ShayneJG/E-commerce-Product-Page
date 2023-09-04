import "./App.css";
import Cart from "./components/cart";
import Item from "./components/item";
import { testData } from "./data/testData";

function App() {
  return (
    <>
      <Cart />
      <div className="m-72"></div>
      <Item item={testData} />
    </>
  );
}

export default App;
