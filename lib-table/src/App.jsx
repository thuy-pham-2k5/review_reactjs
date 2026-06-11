import { useState } from "react";
import { Formik } from "formik";

const EMPTY_BOOK = {
  title: "",
  quantity: "",
};

function App() {
  const [books, setBooks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [initialValues, setInitialValues] = useState(EMPTY_BOOK);

  const validate = (values) => {
    const errors = {};

    if (!values.title.trim()) {
      errors.title = "Required";
    }

    if (!values.quantity.toString().trim()) {
      errors.quantity = "Required";
    } else if (!/^\d+$/.test(values.quantity)) {
      errors.quantity = "Quantity must be a number";
    }

    return errors;
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setInitialValues(books[index]);
  };

  const handleDelete = (index) => {
    setBooks((prev) => prev.filter((_, i) => i !== index));

    if (editingIndex === index) {
      setEditingIndex(-1);
      setInitialValues(EMPTY_BOOK);
    }
  };

  return (
    <div style={{ width: "600px", margin: "20px auto" }}>
      <h1>Book Manager</h1>

      <Formik
        enableReinitialize
        initialValues={initialValues}
        validate={validate}
        onSubmit={(values, { resetForm }) => {
          if (editingIndex === -1) {
            setBooks((prev) => [...prev, values]);
          } else {
            setBooks((prev) =>
              prev.map((book, index) =>
                index === editingIndex ? values : book
              )
            );

            setEditingIndex(-1);
          }

          setInitialValues(EMPTY_BOOK);
          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Title</label>
              <br />
              <input
                name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.title && errors.title && (
                <div style={{ color: "red" }}>{errors.title}</div>
              )}
            </div>

            <br />

            <div>
              <label>Quantity</label>
              <br />
              <input
                name="quantity"
                value={values.quantity}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.quantity && errors.quantity && (
                <div style={{ color: "red" }}>{errors.quantity}</div>
              )}
            </div>

            <br />

            <button type="submit">
              {editingIndex === -1 ? "Add Book" : "Update Book"}
            </button>
          </form>
        )}
      </Formik>

      <hr />

      {books.length > 0 && (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Title</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>{book.title}</td>
                <td>{book.quantity}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(index)}
                    style={{ marginLeft: "8px" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;