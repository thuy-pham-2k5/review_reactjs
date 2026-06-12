import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import contactApi from "../api/contactApi";

function ContactList() {
  const [contacts, setContacts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    const response = await contactApi.getAll();
    setContacts(response.data);
  };

  const handleDelete = async (id) => {
    await contactApi.delete(id);

    alert("Delete successfully");

    setContacts((prev) =>
      prev.filter((contact) => contact.id !== id)
    );
  };

  return (
    <div>
      <h1>Contacts</h1>

      <button
        onClick={() => navigate("/add")}
      >
        Add Contact
      </button>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img
                  src={contact.image}
                  alt=""
                  width="80"
                />
              </td>

              <td>{contact.name}</td>

              <td>{contact.email}</td>

              <td>{contact.phone}</td>

              <td>
                <button
                  onClick={() =>
                    navigate(`/edit/${contact.id}`)
                  }
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    handleDelete(contact.id)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactList;