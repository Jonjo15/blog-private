// import React, {useState, useEffect} from 'react'
// import axios from "axios"

import UserDetails from "../components/UserDetails";

// import jwtDecode from "jwt-decode"
export default function Dashboard() {
    
    return (
        <div className="dashboard-wrapper">
            <button>View published posts</button>
            <button>View unpublished posts</button>
            <button>Create a new blog post</button>
            <UserDetails />
            {/* {test && JSON.stringify(test)} */}
            {/* {decoded && JSON.stringify(decoded)} */}
        </div>
    )
}
