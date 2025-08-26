import { useState, createContext, useContext } from "react";

// Create AuthContext
const AuthContext = createContext()

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext)

// AuthProvider to wrap the app and provide auth state
export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null) // Store API token
    const [user, setUser] = useState({       // Store user information
        name:'',
        email:'',
        password:'',
        password_confirmation:'',
    })

    return (
        <AuthContext.Provider
            value={{
                token,
                setToken,
                user,
                setUser
            }}
        >
            {children} {/* Render child components */}
        </AuthContext.Provider>
    )
}
