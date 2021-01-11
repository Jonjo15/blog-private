import React, { useState, useEffect } from 'react'
import axios from "axios"
import {useAuth} from "../context/AuthContext"
export default function EditPostForm({setShowForm, post, setPosts, setTitleUI}) {
    const [title, setTitle] = useState(null)
    const [body, setBody] = useState(null)
    const [error, setError] = useState()
    const {token, currentUser} = useAuth()
    useEffect(() => {
        setTitle(post.title)
        setBody(post.body)
    }, [post.body, post.title])
    if (title === null || body === null) {
        return <div>...loading</div>
    }
    const handleSubmit = e => {
        e.preventDefault()
        axios.defaults.headers.common['Authorization'] = token;
        axios.put("http://localhost:4000/posts/" + post._id + "/update", {title, body})
        .then(res => {
            const newPost = {...res.data.post, author: currentUser}
            setPosts(currPosts => {
                let newPosts = currPosts.map(p => {
                    if (p._id === post._id) {
                        return newPost
                    }
                    return p
                })
                return newPosts
                
            })
            setTitleUI(title)
            setShowForm(false)
        })
        .catch(err => {
            console.error(err)
            setError("Failed to edit blog post")
            // setShowForm(false)
        })
    }
    return (
        <div className="form-modal">
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input onChange={(e) => setTitle(e.target.value)} id="title" name="title" type="text" value={title}/>
                <label htmlFor="body">Your Post</label>
                <textarea onChange={(e) => setBody(e.target.value)} id="body" name="body" rows="5" cols="50" value={body}></textarea>
                <button>Submit a new version</button>
            </form>
            <button onClick={() => setShowForm(false)}>Cancel</button>
            {error && <p>{error}</p>}
        </div>
    )
}
