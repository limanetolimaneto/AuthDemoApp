import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import ErrorMessage from "../components/ErrorMessage"

export default function Login() {
  const { setToken, setUser } = useAuth()

  // Form state for email and password
  const [detail, setDetail] = useState({ email:'', password:'' })
  // Error message state
  const [error, setError] = useState("")

  // Update form state on input change
  const handleDetail = (event) => {
    const {name, value} = event.target
    setDetail((data) => ({
      ...data,
      [name]: value
    }))
  }

  // Handle login API call
  const handleLogin = async () => {
    const { email, password } = detail

    // Quick frontend validation
    if (!email || !password) {
      setError("Please fill in all fields.")
      return
    }

    try {
      const resp = await fetch('http://127.0.0.1:8000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ email, password }),
      })

      const data = await resp.json().catch(() => ({}))

      if (resp.ok) {
        // Save token and user data in context
        setToken(data.token)
        setUser(data.user)
        setError("") // clear error
      } else if (resp.status === 401) {
        setError("Invalid email or password.")
      } else {
        setError(data.message || "Unexpected error. Please try again.")
      }

    } catch (err) {
      setError("Cannot connect to server. Check your connection.")
    }
  }

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Login</h2>

      {/* Display error message if exists */}
      <ErrorMessage message={error} />

      <form className="flex flex-col gap-4">
        {/* Email input */}
        <div className="flex flex-col">
          <label htmlFor="user-id" className="mb-1 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            onChange={handleDetail}
            name='email'
            value={detail.email}
            id="user-id"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password input */}
        <div className="flex flex-col">
          <label htmlFor="password-id" className="mb-1 text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            onChange={handleDetail}
            name='password'
            value={detail.password}
            id="password-id"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit button */}
        <button
          onClick={handleLogin}
          type="button"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  )
}
