import { useState } from "react";
import Navbar from "./components/Navbar";
import ContactList from "./views/ContactList";

function App() {
  const [buttonOn, setButtonOn] = useState<boolean>(false);
  return (
    <>
      {/* NAVBAR */}
      <Navbar buttonOn={buttonOn} setButtonOn={setButtonOn} />
      {/* CONTACT LIST */}
      <ContactList />
    </>
  );
}

export default App;
