// import logo from "../assets/agenda.svg";
// import DataContext from "../context/DataContext.tsx";
// import { useContext, MouseEvent } from "react";
// import { ContactInterface } from "../context/DataContext.tsx";

// // interface ContactProps {
// //   contact: ContactInterface;
// // }

// const ModalEliminateContact = () => {
//   // CONTEXT

//   const { setModalEliminateContact, handleDeleteContact, contactList } =
//     useContext(DataContext);

//   // NAVIGATE

//   // FUNCTIONS
//   const handleNo = () => {
//     setModalEliminateContact(false);
//   };

//   const handleDeleteContactButton = (e: MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     handleDeleteContact(1);
//     setModalEliminateContact(false);
//   };

//   return (
//     <>
//       <div className="flex flex-col sm:mt-20 mt-20">
//         {/*TITLE*/}
//         <div className=" bg-orange p-nav space-between flex items-center mx-3">
//           <div className="flex items-center gap-2 cursor-pointer ">
//             <img src={logo} alt="logo" className="logo invert  " />

//             <p className="title text-shadow capitalize">Wait...</p>
//           </div>
//         </div>

//         {/*BODY*/}
//         <div className="bg-modal ">
//           <p className="modal-text">
//             Are you sure you want to eliminate this contact?
//           </p>

//           {/*BUTTONS*/}

//           <div className="f-center mt-6">
//             <button
//               onClick={handleDeleteContactButton}
//               className="btn btn-orange-input btn-text text-shadow me-2"
//             >
//               Yes
//             </button>

//             <button
//               onClick={handleNo}
//               className="btn btn-orange-input btn-text text-shadow ms-2"
//             >
//               No
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ModalEliminateContact;
