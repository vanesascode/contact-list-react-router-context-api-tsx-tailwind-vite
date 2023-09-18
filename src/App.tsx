//COMPONENTS AND VIEWS

import Navbar from "./components/Navbar";
import ContactList from "./views/ContactList";
import NewContact from "./views/NewContact.tsx";
import Agendas from "./views/Agendas";
import NewAgenda from "./views/NewAgenda";
import Footer from "./components/Footer";
import ModalEliminateAgenda from "./components/ModalEliminateAgenda";

// ROUTES AND CONTEXT

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DataContext from "./context/DataContext.tsx";
import { useContext } from "react";

function App() {
  // CONTEXT

  const { modalEliminateAgenda } = useContext(DataContext);

  return (
    <>
      <Router>
        {modalEliminateAgenda && (
          <div className="modal-overlay">
            <ModalEliminateAgenda />
          </div>
        )}

        <div className="sm:max-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Agendas />} />
            <Route path="/newcontact" element={<NewContact />} />
            <Route path="/newagenda" element={<NewAgenda />} />
            <Route path="/agenda" element={<Agendas />} />
            <Route path="/agenda/:agendaNameSlug" element={<ContactList />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;

// The BrowserRouter component provides the necessary context for routing and handles the location and navigate props automatically.
