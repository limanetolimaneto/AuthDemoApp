import { useState } from "react"
import ErrorMessage from "../components/ErrorMessage"

export default function Register() {
  // State for displaying errors
  const [error, setError] = useState("")

  // Form state for registration fields
  const [details, setDetails] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  // Update form state on input change
  const handleDetails = (event) => {
    const { name, value } = event.target
    setDetails((data) => ({
      ...data,
      [name]: value
    }))
  }

  // Handle registration API call
  const handleRegister = async () => {
    const { name, email, password, password_confirmation } = details

    try {
      const resp = await fetch('http://127.0.0.1:8000/api/register', {
        method: 'POST',
        body: new URLSearchParams({ name, email, password, password_confirmation }),
      })

      const data = await resp.json().catch(() => ({})) // prevent error if no body

      if (resp.ok) {
        console.log("User registered:", data)
        setError("") // clear error on success
      } else {
        // Handle API validation errors
        if (data.errors) {
          const firstError = Object.values(data.errors)[0][0]
          setError(firstError)
        } else {
          setError(data.message || "Unknown error during registration")
        }
      }

    } catch (err) {
      console.error("Error:", err)
      setError("Server connection error")
    }
  }

  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Register</h2>

      {/* Display error message if exists */}
      {error && <ErrorMessage message={error} />}

      <form className="space-y-4">
        {/* Name input */}
        <div>
          <label htmlFor="name-id" className="block text-sm font-medium mb-1">Name</label>
          <input
            name='name'
            onChange={handleDetails}
            value={details.name}
            type="text"
            id="name-id"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email input */}
        <div>
          <label htmlFor="email-id" className="block text-sm font-medium mb-1">Email</label>
          <input
            name='email'
            onChange={handleDetails}
            value={details.email}
            type="email"
            id="email-id"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password input */}
        <div>
          <label htmlFor="password-id" className="block text-sm font-medium mb-1">Password</label>
          <input
            name='password'
            onChange={handleDetails}
            value={details.password}
            type="password"
            id="password-id"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Confirm Password input */}
        <div>
          <label htmlFor="password_confirmation" className="block text-sm font-medium mb-1">Confirm Password</label>
          <input
            name='password_confirmation'
            onChange={handleDetails}
            value={details.password_confirmation}
            type="password"
            id="password_confirmation"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit button */}
        <button
          onClick={handleRegister}
          type="button"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Register
        </button>
      </form>
    </div>
  )
}
