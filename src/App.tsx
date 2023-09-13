import { useState } from "react";
import Navbar from "./components/Navbar";
function App() {
  const [buttonOn, setButtonOn] = useState<boolean>(false);
  return (
    <>
      {/* NAVBAR */}
      <Navbar buttonOn={buttonOn} setButtonOn={setButtonOn} />
    </>
  );
}

export default App;
