import React from 'react'
import {useAuth} from "../context/AuthContext"
export default function UserDetails() {
    const {currentUser} = useAuth()
    return (
        <div className="user-card">
            <h1>Full Name: {currentUser.first_name} {currentUser.family_name}</h1>
            <h2>Email: {currentUser.email}</h2>
        </div>
    )
}
