import {useState, useEffect, useContext, createContext} from "react"
import axios from "axios"
// import {tokenConfig} from "../util/util"
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

  
  function register(userData) {
    if(isAuth) {
      return
    }
    setLoading(true)
    axios.post("http://localhost:4000/register", userData)
    .then(res => {
      setCurrentUser(res.data.user)
      localStorage.setItem("token", res.data.token)
      setToken(res.data.token)
      setIsAuth(true)
      setLoading(false)
      setError(null)
    })
    .catch(err => {
      setToken(null)
      localStorage.removeItem("token")
      setCurrentUser(null)
      setIsAuth(false)
      setLoading(false)
      console.log(err)
      setError("Failed to register")
    })
  }

  function login(userData) {
    if(isAuth) {
      return
    }
    setLoading(true)
    axios.post("http://localhost:4000/login", userData)
    .then(res => {
      setCurrentUser(res.data.user)
      localStorage.setItem("token", res.data.token)
      setToken(res.data.token)
      setIsAuth(true)
      setLoading(false)
      setError(null)
    })
    .catch(err => {
      setToken(null)
      localStorage.removeItem("token")
      setCurrentUser(null)
      setIsAuth(false)
      setLoading(false)
      console.log(err)
      setError("Failed to log in")
    })
  }

  function logout() {
    setIsAuth(false)
    setCurrentUser(null)
    setToken(null)
    localStorage.removeItem("token");
    setError(null)
  }

  useEffect(() => {
    setLoading(true)
    axios.defaults.headers.common['Authorization'] = token;
    axios.get("http://localhost:4000/user")
    .then(res => {
      setIsAuth(true)
      setCurrentUser(res.data.user)
      console.log(res.data)
      setError(null)
      setLoading(false)
    })
    .catch(err => {
      setToken(null)
      setCurrentUser(null)
      setIsAuth(false)
      setLoading(false)
      setError(null)
      console.log("user not logged in")
    })
  }, [token])

  const value = {
    currentUser,
    token,
    isAuth,
    error,
    loading,
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