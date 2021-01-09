import React, {useState} from 'react'
import {Link, Redirect} from "react-router-dom"
import {useAuth } from "../context/AuthContext"
export default function Register() {
    const [firstName, setFirstName] = useState("")
    const [familyName, setFamilyName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {isAuth, register, error} = useAuth()
    const handleSubmit = e => {
        e.preventDefault()
        const userData = {
            first_name: firstName,
            family_name: familyName,
            email,
            password
        }
        register(userData);
        console.log("submitted")
    }
    return (
        isAuth ? <Redirect to="/admin" /> : (<div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="first-name">First Name:</label>
                <input onChange={(e) => setFirstName(e.target.value)} value={firstName} type="text" name="first-name" id="first-name"/>
                <label htmlFor="family-name">Family Name:</label>
                <input onChange={(e) => setFamilyName(e.target.value)} value={familyName} type="text" name="family-name" id="family-name"/>
                <label htmlFor="email">Email:</label>
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" name="email" id="email"/>
                <label htmlFor="password">Password</label>
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" id="password"/>
                <button type="submit">Register</button>
            </form>
            {error && error}
            <small>Already have an account? Log in <Link to="/login">here</Link></small>
        </div>)
        
    )
}
