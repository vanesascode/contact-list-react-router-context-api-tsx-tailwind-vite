import { ContactInterface } from "../views/ContactList.tsx";

interface ContactProps {
  contact: ContactInterface;
}

const Contact = ({ contact }: ContactProps) => {
  return (
    <div>
      {contact.full_name} {contact.email} {contact.phone} {contact.address}{" "}
      {contact.agenda_slug}
    </div>
  );
};

export default Contact;
