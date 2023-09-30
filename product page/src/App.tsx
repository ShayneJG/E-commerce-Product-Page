import { useEffect, useState } from "react";
import "./App.css";
import Item from "./components/item";
import TopBar from "./components/topBar";
import { testData } from "./data/testData";

function App() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const mobileBreakpoint: number = 768;

  const checkScreenSize = () => {
    setIsMobile(window.innerWidth < mobileBreakpoint);
  };

  //use effect fires once and then window.innerWidth will be checked on screen resize.
  useEffect(() => {
    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div className="h-full w-full  lg:px-[10%] max-w-[1440px] mx-auto">
      <TopBar isMobile={isMobile} />

      <Item isMobile={isMobile} item={testData} />
    </div>
  );
}

export default App;
