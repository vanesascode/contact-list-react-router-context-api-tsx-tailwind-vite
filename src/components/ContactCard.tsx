import { ContactInterface } from "../context/DataContext.tsx";
import avatar2 from "../assets/avatar2.png";
import editPic from "../assets/edit.svg";
import deletePic from "../assets/delete.svg";
import savePic from "../assets/save.svg";
import { MouseEvent, useContext, useState, ChangeEvent } from "react";
import DataContext from "../context/DataContext.tsx";

interface ContactProps {
  contact: ContactInterface;
}

const ContactCard = ({ contact }: ContactProps) => {
  const { deleteContact, updateContact } = useContext(DataContext);

  const [editing, setEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState<string>(contact.full_name);
  const [updatedPhone, setUpdatedPhone] = useState<string>(contact.phone);
  const [updatedAddress, setUpdatedAddress] = useState<string>(contact.address);
  const [updatedEmail, setUpdatedEmail] = useState<string>(contact.email);

  //INPUTS:

  const handleInputChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdatedName(e.target.value);
  };

  const handleInputChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdatedPhone(e.target.value);
  };

  const handleInputChangeAddress = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdatedAddress(e.target.value);
  };

  const handleInputChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdatedEmail(e.target.value);
  };

  //ACTIONS:

  const handleEdit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEditing(true);
  };

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    deleteContact(contact.id);
  };

  const handleSave = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(
      "Update contact:",
      updatedName,
      updatedPhone,
      updatedAddress,
      updatedEmail
    );
    updateContact(
      updatedName,
      updatedPhone,
      updatedAddress,
      updatedEmail,
      contact.id
    );
    setEditing(false);
  };

  return (
    <>
      <div className="max-sm:mb-4">
        {/*HEADER */}

        <div className="flex justify-between items-center px-3  py-3  rounded-t-lg  border-b-[3px]  border-b-blue bg-header">
          {" "}
          {/*sm:px-6 sm:py-3 sm:border-b-[6px] sm:rounded-t-xl*/}
          {/*CONTENT LEFT*/}
          <div className="flex items-center gap-2">
            <div className=" rounded-[6px]  bg-mediumblue px-[3px] pt-1  border-2  border-semiblue">
              {" "}
              {/*sm:rounded-[8px]  sm:px2 sm:pt-2 sm:border-4 */}
              <img
                src={avatar2}
                alt="app logo"
                className="object-contain w-[18px]  h-[18px]  mb-[-0.5px]"
              />
              {/*sm:w-[65px]   sm:h-[65px]  sm:mb-[-1.5px]*/}
            </div>
            <div className="contact-name text-shadow">
              {editing ? (
                <input
                  type="text"
                  name="full_name"
                  value={updatedName}
                  onChange={handleInputChangeName}
                  className="bg-transparent text-semiblue w-[200px]"
                  autoFocus
                />
              ) : (
                <h2>{contact.full_name}</h2>
              )}
            </div>
          </div>
          {/*CONTENT RIGHT*/}
          <div className="flex gap-4  items-center">
            {" "}
            {/*sm:gap-5*/}
            {editing ? (
              <button className="cursor-pointer" onClick={handleSave}>
                <img src={savePic} alt="save contact" /> {/*sm:w-[40px]*/}
              </button>
            ) : (
              <button onClick={handleEdit} className="cursor-pointer">
                <img src={editPic} alt="edit contact" />
                {/*sm:w-[40px]*/}
              </button>
            )}
            <button onClick={handleDelete} className="cursor-pointer">
              <img src={deletePic} alt="delete contact" />
              {/*sm:w-[40px]*/}
            </button>
          </div>
        </div>

        {/*PHONE LABEL*/}

        <div className="flex">
          <div className="  h-[50px]  bg-header bg-label label-name f-center px-4  w-[80px] ">
            {" "}
            {/*sm:h-[100px] sm:px-8 sm:w-[160px]*/}
            Phone
            <br />
            Number
          </div>
          <div className=" text-shadow  h-[50px]  label-info bg-label-info flex-1 px-4  f-start">
            {" "}
            {/*sm:h-[100px] sm:px-8*/}
            {editing ? (
              <input
                type="text"
                name="phone"
                value={updatedPhone}
                onChange={handleInputChangePhone}
                className="bg-transparent  text-semiblue"
              />
            ) : (
              <p>{contact.phone}</p>
            )}
          </div>
        </div>

        {/*EMAIL LABEL*/}

        <div className="flex">
          <div className="h-[50px] bg-header bg-label label-name f-center px-4   w-[80px] ">
            {" "}
            {/*sm:h-[100px] sm:px-8 sm:w-[160px]*/}
            Email
            <br />
            Address
          </div>
          <div className="h-[50px]  label-info bg-label-info flex-1 px-4 f-start text-shadow">
            {" "}
            {/*sm:h-[100px] sm:px-8*/}
            {editing ? (
              <input
                type="text"
                name="email"
                value={updatedEmail}
                onChange={handleInputChangeEmail}
                className="bg-transparent text-semiblue"
              />
            ) : (
              <p>{contact.email}</p>
            )}
          </div>
        </div>

        {/*ADDRESS LABEL*/}

        <div className="flex rounded-b-lg sm:rounded-b-xl">
          <div className="   h-[50px]  bg-header bg-label label-name f-center px-4   w-[80px]  rounded-bl-lg">
            {/*sm:h-[100px] sm:px-8 sm:w-[160px]*/}
            Home
            <br />
            Address
          </div>
          <div className="  h-[50px]  label-info bg-label-info flex-1 px-4  f-start text-shadow rounded-br-lg ">
            {/*sm:h-[100px] sm:px-8 sm:rounded-br-xg*/}
            {editing ? (
              <input
                type="text"
                name="address"
                value={updatedAddress}
                onChange={handleInputChangeAddress}
                className="bg-transparent text-semiblue"
              />
            ) : (
              <p>{contact.address}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
