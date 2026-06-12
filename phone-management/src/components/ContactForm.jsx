import { useState } from "react";
import uploadImage from "../api/uploadApi";

function ContactForm({
  contact,
  setContact,
  onSubmit,
  buttonText,
}) {
  const [selectedFile, setSelectedFile] =
    useState(null);

  const handleUpload = async () => {
    if (!selectedFile) return;

    const imageUrl =
      await uploadImage(selectedFile);

    setContact((prev) => ({
      ...prev,
      image: imageUrl,
    }));
  };

  return (
    <>
      <div>
        <img
          src={
            contact.image ||
            "https://placehold.co/150"
          }
          width="150"
        />
      </div>

      <br />

      <input
        type="file"
        onChange={(e) =>
          setSelectedFile(
            e.target.files[0]
          )
        }
      />

      <button onClick={handleUpload}>
        Upload Image
      </button>

      <br />
      <br />

      <input
        placeholder="Name"
        value={contact.name}
        onChange={(e) =>
          setContact({
            ...contact,
            name: e.target.value,
          })
        }
      />

      <br />
      <br />

      <input
        placeholder="Email"
        value={contact.email}
        onChange={(e) =>
          setContact({
            ...contact,
            email: e.target.value,
          })
        }
      />

      <br />
      <br />

      <input
        placeholder="Phone"
        value={contact.phone}
        onChange={(e) =>
          setContact({
            ...contact,
            phone: e.target.value,
          })
        }
      />

      <br />
      <br />

      <button onClick={onSubmit}>
        {buttonText}
      </button>
    </>
  );
}

export default ContactForm;