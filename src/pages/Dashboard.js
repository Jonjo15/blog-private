// import React, {useState, useEffect} from 'react'
// import axios from "axios"
// import jwtDecode from "jwt-decode"
export default function Dashboard() {
    // const [test, setTest] = useState()
    // const [decoded, setDecoded] = useState()
    // useEffect(() => {
    //     axios.post("http://localhost:4000/login", { email:"ivan@ivan.com", password: "123456"})
    //     .then(res => {
    //     localStorage.setItem("token", res.data.token)
    //     setDecoded(jwtDecode(res.data.token.split(" ")[1]))
    //     setTest(res.data)
    //     })
    //     .catch(err => console.log(err))
    // }, [])
    return (
        <div className="dashboard-wrapper">
            <button>View published posts</button>
            <button>View unpublished posts</button>
            <button>Create a new blog post</button>
            {/* {test && JSON.stringify(test)} */}
            {/* {decoded && JSON.stringify(decoded)} */}
        </div>
    )
}
