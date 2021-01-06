import React, {useState} from 'react'
import {Link} from "react-router-dom"
export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        console.log("submitted")
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" name="email" id="password"/>
                <label htmlFor="password">Password</label>
                <input onChange={(e) => setPassword(e.target.password)} value={password} type="password" name="password" id="password"/>
                <button type="submit">Log In</button>
            </form>
            <small>Don't have an account? Sign up <Link to="/register">here</Link></small>
        </div>
    )
}
