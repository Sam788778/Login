import './App.css'
import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import RegisterForm from './components/registr/registr.jsx'

function App({ SchemaLogin, SchemaRegistr }) {
  const [showRegister, setShowRegister] = useState(false)
  const [registeredUser, setRegisteredUser] = useState(null)
  const [loginMessage, setLoginMessage] = useState('')

  const handleLogin = (values) => {
    if (
      registeredUser &&
      values.email === registeredUser.email &&
      values.password === registeredUser.password
    ) {
      setLoginMessage('✅ Successfully logged in')
    } else {
      setLoginMessage('❌ Invalid email or password')
    }
  }

  return (
    <div className="container">
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={handleLogin}
        validationSchema={SchemaLogin}
      >
        <Form>
          <Field name="email" placeholder="Email" />
          <ErrorMessage name="email">{msg => <p>{msg}</p>}</ErrorMessage>

          <Field name="password" placeholder="Password" type="password" />
          <ErrorMessage name="password">{msg => <p>{msg}</p>}</ErrorMessage>

          <button type="submit">Login</button>
          <button
            type="button"
            className="btn"
            onClick={() => setShowRegister(prev => !prev)}
          >
            {showRegister ? 'Hide registration' : 'Create new account'}
          </button>

          {loginMessage && <div className="login-message">{loginMessage}</div>}
        </Form>
      </Formik>

      {showRegister && (
        <div className="register-form">
          <RegisterForm
            setRegisteredUser={setRegisteredUser}
            setShowRegister={setShowRegister}
            SchemaRegistr={SchemaRegistr}
          />
        </div>
      )}
    </div>
  )
}

export default App