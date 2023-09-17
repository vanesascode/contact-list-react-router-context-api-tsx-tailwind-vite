//COMPONENTS AND VIEWS

import Navbar from "./components/Navbar";
import ContactList from "./views/ContactList";
import ContactForm from "./views/ContactForm";
import Agendas from "./views/Agendas";
import NewAgenda from "./views/NewAgenda";
import Footer from "./components/Footer";
// import Home from "./views/Home";

// ROUTES AND CONTEXT

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

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
              <Route path="/" element={<Agendas />} />
              <Route path="/newcontact" element={<ContactForm />} />
              <Route path="/newagenda" element={<NewAgenda />} />
              <Route path="/agenda" element={<Agendas />} />
              <Route path="/agenda/:agendaNameSlug" element={<ContactList />} />
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
