import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bookApi from "../api/bookApi";

function BookList() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const response = await bookApi.getAll();
    setBooks(response.data);
  };

  const handleDelete = async (id) => {
    await bookApi.delete(id);

    alert("Delete successfully");

    setBooks((prev) =>
      prev.filter((book) => book.id !== id)
    );
  };

  return (
    <div>
      <h1>Library</h1>

      <button
        onClick={() => navigate("/add")}
      >
        Add a new Book
      </button>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Title</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.quantity}</td>
              <td>
                <button
                  onClick={() =>
                    navigate(`/edit/${book.id}`)
                  }
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    handleDelete(book.id)
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

export default BookList;