import "./App.css";
import Cart from "./components/cart";
import Item from "./components/item";
import TopBar from "./components/topBar";
import { testData } from "./data/testData";

function App() {
  return (
    <>
      <TopBar />
      <div className="m-72"></div>
      <Item item={testData} />
    </>
  );
}

export default App;
