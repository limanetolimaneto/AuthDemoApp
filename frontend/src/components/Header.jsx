import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

export default function Header() {
  const navigate = useNavigate();
  const { token, setToken, user, setUser } = useAuth();

  // Logout function to call the API and remove the token
  const handleLogout = async () => {
    try {
      const resp = await fetch('http://127.0.0.1:8000/api/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Send token in Authorization header
        },
      })

      // Safely parse JSON response
      const data = await resp.json().catch(() => ({}));

      if (resp.ok) {
        // Clear token and redirect to home
        setToken(null);
        navigate('/')
      } else {
        console.error('Error:', resp.status, data.message || 'Unknown error');
      }

    } catch (err) {
      console.error('Error:', err)
    }
  }

  // Log user info for debugging purposes whenever it changes
  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <header className="bg-blue-200">
      <h1 className="text-3xl p-2 text-center font-bold text-blue-900">
        AuthDemoApp
      </h1>

      {/* Navigation bar */}
      <nav className="flex gap-4">
        <div className="w-1/3 p4"></div>
        <div className="w-1/3 p4 flex justify-center gap-4">
          {/* Navigation links */}
          <Link className="text-blue-900 font-semibold hover:underline" to="/">Home</Link>
          <Link className="text-blue-900 font-semibold hover:underline" to="/login">Login</Link>
          <Link className="text-blue-900 font-semibold hover:underline" to="/register">Register</Link>
        </div>
        <div className="w-1/3 p4 flex justify-end pr-10">
          {/* Show user info and logout button if logged in */}
          {token !== null &&
            <div className="flex items-center gap-3">
              <span className="text-sm md:text-base text-gray-700 dark:text-gray-200 font-medium">
                Hello, <i className="capitalize text-indigo-600 dark:text-indigo-400">{user.name}</i>
              </span>

              <button
                onClick={handleLogout}
                className="px-3 py-1 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
              >
                Logout
              </button>
            </div>
          }
        </div>
      </nav>
    </header>
  )
}
