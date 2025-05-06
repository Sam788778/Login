import './App.css'
import { Formik } from 'formik'

function App() {
  return (
    <div className="container">
      <Formik
        initialValues={{
          name: '',
          lastName: '',
          email: '',
          password: '',
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit, values }) => (
          <>
            <div className="live-preview">
              <h3>Live Preview:</h3>
              <p>Name: {values.name}</p>
              <p>Last Name: {values.lastName}</p>
              <p>Email: {values.email}</p>
            </div>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                value={values.name}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                value={values.lastName}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={values.email}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={values.password}
              />
              <button type="submit">Submit</button>
            </form>
          </>
        )}
      </Formik>
    </div>
  )
}

export default App