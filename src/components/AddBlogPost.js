import React, {useState} from 'react'
import axios from "axios"
import {useAuth} from "../context/AuthContext"

export default function AddBlogPost({setShowForm, setPosts}) {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("");
    const {error, token, currentUser} = useAuth()

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
            const newPost = {...res.data.post, author: currentUser}
            setPosts(currPosts => {
                return [...currPosts, newPost]
            })
            setShowForm(false)
        })
        .catch(err => {
            //TODO
            console.error(err)
        })
        console.log("submitted")
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
            <button onClick={() => setShowForm(false)}>Cancel</button>
            {error && <p>{error}</p>}
        </div>
    )
}
