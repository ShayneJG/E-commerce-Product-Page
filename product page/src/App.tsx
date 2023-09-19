import "./App.css";
import Item from "./components/item";
import TopBar from "./components/topBar";
import { testData } from "./data/testData";

function App() {
  return (
    <>
      <TopBar />

      <Item item={testData} />
    </>
  );
}

export default App;
