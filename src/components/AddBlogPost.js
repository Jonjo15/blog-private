import React, {useState} from 'react'
import axios from "axios"
import {useAuth} from "../context/AuthContext"

export default function AddBlogPost({setShowForm}) {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("");
    const {error, token} = useAuth()

    const handleSubmit = e => {
        e.preventDefault()
        const postData = {
            title, 
            body
        }
        axios.defaults.headers.common['Authorization'] = token;
        axios.post("http://localhost:4000/posts", postData)
        .then(res => {
            //todo
        })
        .catch(err => {
            //TODO
        })
        console.log("submitted")
    }
    return (
        <div className="form-modal">
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Name: </label>
                <input onChange={(e) => setTitle(e.target.value)} id="title" name="title" type="text" value={title}/>
                <label htmlFor="body">Your Comment</label>
                <textarea onChange={(e) => setBody(e.target.value)} id="body" name="body" rows="5" cols="50" value={body}></textarea>
                <button>Submit Comment</button>
            </form>
            <button onClick={() => setShowForm(false)}>Cancel</button>
            {error && <p>{error}</p>}
        </div>
    )
}
