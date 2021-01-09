import {useState, useEffect, useContext, createContext} from "react"
import axios from "axios"
import {tokenConfig} from "../util/util"
const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext)
}
//Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZmYyZmJkODdjOTMzYjUwYTBiNGNjZWQiLCJpYXQiOjE2MDk4Mzg0MjkzMzF9._njiUsydcLTpODHjaSyTs64z72davxgN_CzIMViIuZ0
export function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const [isAuth, setIsAuth] = useState(false)
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [error, setError] = useState()

  
  function register() {
  }

  function login() {
  }

  function logout() {
  }

  useEffect(() => {
    setLoading(true)
    axios.defaults.headers.common['Authorization'] = token;
    axios.get("http://localhost:4000/user")
    .then(res => {
      setIsAuth(true)
      setLoading(false)
      setCurrentUser(res.data.user)
      console.log(res.data)
      setError(null)
    })
    .catch(err => {
      setLoading(false)
      console.log("user not logged in")
      setError("User not logged In")
    })
  }, [token])

  const value = {
    currentUser,
    token,
    isAuth,
    error,
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