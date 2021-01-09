import React from 'react'
import {Link } from "react-router-dom"
import {useAuth} from "../context/AuthContext"
export default function Navbar() {
    const {isAuth, currentUser, loading} = useAuth()
    const authNav = (<ul>
        {currentUser && <li>Welcome {currentUser.first_name}</li>}
        <li><Link to="#">Log Out</Link></li>
    </ul>)
    const unAuthNav = (<ul>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Log In</Link></li>
    </ul>)
    return (
        <nav className="navbar">
            {!loading && isAuth ? authNav : unAuthNav}
        </nav>
    )
}
