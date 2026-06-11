import { Formik } from "formik";

function App() {
  const validate = (values) => {
    const errors = {};

    // To
    if (!values.to.trim()) {
      errors.to = "Required";
    } else if (
      !/^[a-zA-Z0-9+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(values.to)
    ) {
      errors.to = "Invalid email address";
    }

    // Title
    if (!values.title.trim()) {
      errors.title = "Required";
    }

    // Message
    if (!values.message.trim()) {
      errors.message = "Required";
    }

    return errors;
  };

  return (
    <div style={{ width: "500px", margin: "20px auto" }}>
      <h1>Email Form</h1>

      <Formik
        initialValues={{
          to: "",
          title: "",
          message: "",
          attachment: null,
        }}
        validate={validate}
        onSubmit={(values, { resetForm }) => {
          console.log(values);

          alert("Sent successfully!!!");

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
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            {/* To */}
            <div>
              <label>To</label>
              <br />
              <input
                type="text"
                name="to"
                value={values.to}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {touched.to && errors.to && (
                <div style={{ color: "red" }}>{errors.to}</div>
              )}
            </div>

            <br />

            {/* Title */}
            <div>
              <label>Title</label>
              <br />
              <input
                type="text"
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

            {/* Message */}
            <div>
              <label>Message</label>
              <br />
              <textarea
                name="message"
                rows="5"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {touched.message && errors.message && (
                <div style={{ color: "red" }}>{errors.message}</div>
              )}
            </div>

            <br />

            {/* Attachment */}
            <div>
              <label>Attachment</label>
              <br />

              <input
                type="file"
                onChange={(e) =>
                  setFieldValue(
                    "attachment",
                    e.currentTarget.files[0]
                  )
                }
              />

              {values.attachment && (
                <p>
                  Selected file: {values.attachment.name}
                </p>
              )}
            </div>

            <br />

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;