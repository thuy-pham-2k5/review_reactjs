import { Formik } from "formik";

function App() {
  const validate = (values) => {
    const errors = {};

    // Name
    if (!values.name.trim()) {
      errors.name = "Required";
    }

    // Email
    if (!values.email.trim()) {
      errors.email = "Required";
    } else if (
      !/^[a-zA-Z0-9+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(values.email)
    ) {
      errors.email = "Invalid email";
    }

    // Phone
    if (!values.phone.trim()) {
      errors.phone = "Required";
    }

    return errors;
  };

  return (
    <div style={{ width: "400px", margin: "20px auto" }}>
      <h1>Contact Form</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          message: "",
        }}
        validate={validate}
        onSubmit={(values, { resetForm }) => {
          alert("Add contact successfully!!!");
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
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && errors.name && (
                <div style={{ color: "red" }}>{errors.name}</div>
              )}
            </div>

            <br />

            {/* Email */}
            <div>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && (
                <div style={{ color: "red" }}>{errors.email}</div>
              )}
            </div>

            <br />

            {/* Phone */}
            <div>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.phone && errors.phone && (
                <div style={{ color: "red" }}>{errors.phone}</div>
              )}
            </div>

            <br />

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
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