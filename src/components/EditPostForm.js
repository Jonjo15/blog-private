import React, { useState, useEffect } from 'react'
import axios from "axios"
import {useAuth} from "../context/AuthContext"
export default function EditPostForm({setShowEdit, setPosts}) {
    const [title, setTitle] = useState(null)
    const [body, setBody] = useState(null)
    const [error, setError] = useState()
    const {token, currentUser} = useAuth()
    const handleSubmit = e => {
        axios.defaults.headers.common['Authorization'] = token;
        axios.post("http://localhost:4000/posts")
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.error(err)
            setError("Failed to edit blog post")
        })
    }
    return (
        <div className="form-modal">
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input onChange={(e) => setTitle(e.target.value)} id="title" name="title" type="text" value={title}/>
                <label htmlFor="body">Your Post</label>
                <textarea onChange={(e) => setBody(e.target.value)} id="body" name="body" rows="5" cols="50" value={body}></textarea>
                <button>Submit a new blog post</button>
            </form>
            <button onClick={() => setShowEdit(false)}>Cancel</button>
            {error && <p>{error}</p>}
        </div>
    )
}
