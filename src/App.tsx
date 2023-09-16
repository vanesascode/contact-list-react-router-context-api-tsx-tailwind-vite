// import { useState } from "react";
import Navbar from "./components/Navbar";
import ContactList from "./views/ContactList";
import ContactForm from "./views/ContactForm";
// import Home from "./views/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="sm:max-container">
        {/* ROUTES */}
        <Router>
          <DataProvider>
            {/* NAVBAR */}
            <Navbar />

            <Routes>
              <Route path="/" element={<ContactList />} />
              <Route path="/newcontact" element={<ContactForm />} />
              {/* <Route path="/newagenda" element={<ContactForm />} /> */}
              {/* <Route path="/agenda/:id" element={<ContactList />} /> */}
            </Routes>
          </DataProvider>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;

// The BrowserRouter component provides the necessary context for routing and handles the location and navigate props automatically.
