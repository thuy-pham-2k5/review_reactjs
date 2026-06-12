import { useState } from "react";
import { useNavigate } from "react-router-dom";
import contactApi from "../api/contactApi";
import ContactForm from "../components/ContactForm";

function AddContact() {
  const navigate = useNavigate();

  const [contact, setContact] = useState({
    image: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleAdd = async () => {
    const response =
      await contactApi.create(contact);

    alert(
      `Add successfully - status ${response.status}`
    );

    navigate("/");
  };

  return (
    <div>
      <h1>Add Contact</h1>

      <ContactForm
        contact={contact}
        setContact={setContact}
        onSubmit={handleAdd}
        buttonText="Add"
      />
    </div>
  );
}

export default AddContact;