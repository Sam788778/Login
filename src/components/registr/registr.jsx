import { Formik, Form, Field, ErrorMessage } from "formik"

const Registr = ({ setRegisteredUser, setShowRegister, SchemaRegistr }) => {
  return (
    <div className="container">
      <div className="registr">
        <h1>Create new account</h1>
        <Formik
          initialValues={{
            name: '',
            LastName: '',
            email: '',
            password: '',
            confirmPassword: ''
          }}
          validationSchema={SchemaRegistr}
          onSubmit={(values) => {
            const userData = {
              name: values.name,
              lastName: values.LastName,
              email: values.email,
              password: values.password
            }
            setRegisteredUser(userData)
            setShowRegister(false)
            alert("Successfully registered")
          }}
        >
          <Form>
            <Field name='name' placeholder='Name' />
            <ErrorMessage name='name'>{msg => <p>{msg}</p>}</ErrorMessage>

            <Field name='LastName' placeholder='Last Name' />
            <ErrorMessage name='LastName'>{msg => <p>{msg}</p>}</ErrorMessage>

            <Field name='email' placeholder='Email' />
            <ErrorMessage name='email'>{msg => <p>{msg}</p>}</ErrorMessage>

            <Field name='password' placeholder='Password' type='password' />
            <ErrorMessage name='password'>{msg => <p>{msg}</p>}</ErrorMessage>

            <Field name='confirmPassword' placeholder='Confirm Password' type='password' />
            <ErrorMessage name='confirmPassword'>{msg => <p>{msg}</p>}</ErrorMessage>

            <button type='submit'>Register</button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Registr