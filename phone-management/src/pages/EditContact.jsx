import { useEffect, useState } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

import contactApi from "../api/contactApi";
import ContactForm from "../components/ContactForm";

function EditContact() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [contact, setContact] = useState({
    image: "",
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    loadContact();
  }, []);

  const loadContact = async () => {
    const response =
      await contactApi.getById(id);

    setContact(response.data);
  };

  const handleSave = async () => {
    const response =
      await contactApi.update(id, contact);

    alert(
      `Update successfully - status ${response.status}`
    );

    navigate("/");
  };

  return (
    <div>
      <h1>Edit Contact</h1>

      <ContactForm
        contact={contact}
        setContact={setContact}
        onSubmit={handleSave}
        buttonText="Save"
      />
    </div>
  );
}

export default EditContact;