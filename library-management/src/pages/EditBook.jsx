import { useEffect, useState } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";
import bookApi from "../api/bookApi";

function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    quantity: "",
  });

  useEffect(() => {
    loadBook();
  }, []);

  const loadBook = async () => {
    const response =
      await bookApi.getById(id);

    setBook(response.data);
  };

  const handleSave = async () => {
    const response =
      await bookApi.update(id, book);

    alert(
      `Update successfully - status ${response.status}`
    );

    navigate("/");
  };

  return (
    <div>
      <h1>Edit Book</h1>

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

      <button onClick={handleSave}>
        Save
      </button>
    </div>
  );
}

export default EditBook;