import React, {useState} from 'react'
import {Link, Redirect} from "react-router-dom"
import {useAuth} from "../context/AuthContext"
// import {useAuth} from "../context/AuthContext"
export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {isAuth, login, error} = useAuth()
    // const {token} = useAuth()
    const handleSubmit = e => {
        e.preventDefault()
        const userData = {
            email, 
            password
        }
        login(userData);
        console.log("submitted")
    }
    return (
         isAuth ? <Redirect to="/" /> : (<div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" name="email" id="password"/>
                <label htmlFor="password">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" id="password"/>
                <button type="submit">Log In</button>
                {error && error}
            </form>
            <small>Don't have an account? Sign up <Link to="/register">here</Link></small>
        </div>)
        
    )
}
