import { useState } from "react";
import Navbar from "./components/Navbar";
import ContactList from "./views/ContactList";
import ContactForm from "./views/ContactForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ContactsProvider } from "./context/ContactsContext";

function App() {
  //{ contact }: ContactProps
  const [buttonOn, setButtonOn] = useState<boolean>(false);
  return (
    <>
      <div className="sm:max-container">
        {/* ROUTES */}
        <Router>
          <ContactsProvider>
            {/* NAVBAR */}
            <Navbar buttonOn={buttonOn} setButtonOn={setButtonOn} />

            <Routes>
              <Route path="/" element={<ContactList />} />
              <Route path="/new" element={<ContactForm />} />
            </Routes>
          </ContactsProvider>
        </Router>
      </div>
    </>
  );
}

export default App;

// The BrowserRouter component provides the necessary context for routing and handles the location and navigate props automatically.
