import {useState, useEffect, useContext, createContext} from "react"
// import axios from "axios"
const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const [isAuth, setIsAuth] = useState(false)
  const [token, setToken] = useState(null)

  function register() {
  }

  function login() {
  }

  function logout() {
  }

  useEffect(() => {
    setToken("hahah")
    setLoading(false)
    console.log("useeffect")
  }, [])

  const value = {
    currentUser,
    token,
    isAuth,
    login,
    register,
    logout,
    setCurrentUser,
    setLoading,
    setIsAuth,
    setToken,
  }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}