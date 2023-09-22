//COMPONENTS AND VIEWS

import Navbar from "./components/Navbar";
import ContactList from "./views/ContactList";
import NewContact from "./views/NewContact.tsx";
import Agendas from "./views/Agendas";
import NewAgenda from "./views/NewAgenda";
import Footer from "./components/Footer";
import ModalEliminateAgenda from "./components/ModalEliminateAgenda";
// import ModalEliminateContact from "./components/ModalEliminateContact";
import AlertChooseAgenda from "./components/AlertChooseAgenda.tsx";
import { Navigate } from "react-router-dom";

// ROUTES AND CONTEXT

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DataContext from "./context/DataContext.tsx";
import { useContext } from "react";

function App() {
  // CONTEXT

  const { modalEliminateAgenda, alertChooseAgenda } = useContext(DataContext); //modalEliminateContact,

  return (
    <>
      <Router>
        {modalEliminateAgenda && (
          <div className="modal-overlay">
            <ModalEliminateAgenda />
          </div>
        )}

        {/* {modalEliminateContact && (
          <div className="modal-overlay">
            <ModalEliminateContact />
          </div>
        )} */}

        {alertChooseAgenda && (
          <div className="modal-overlay">
            <AlertChooseAgenda />
          </div>
        )}

        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Agendas />} />
            <Route path="/newcontact" element={<NewContact />} />
            <Route path="/newagenda" element={<NewAgenda />} />
            <Route path="/agenda" element={<Agendas />} />
            <Route path="/agenda/:agendaNameSlug" element={<ContactList />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;

// The BrowserRouter component provides the necessary context for routing and handles the location and navigate props automatically.
