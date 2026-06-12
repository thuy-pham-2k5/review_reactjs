import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bookApi from "../api/bookApi";

function AddBook() {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    quantity: "",
  });

  const handleSubmit = async () => {
    const response = await bookApi.create(book);

    alert(
      `Add successfully - status ${response.status}`
    );

    navigate("/");
  };

  return (
    <div>
      <h1>Add a new Book</h1>

      <p>
        Title:
        <input
          value={book.title}
          onChange={(e) =>
            setBook({
              ...book,
              title: e.target.value,
            })
          }
        />
      </p>

      <p>
        Quantity:
        <input
          value={book.quantity}
          onChange={(e) =>
            setBook({
              ...book,
              quantity: e.target.value,
            })
          }
        />
      </p>

      <button onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
}

export default AddBook;