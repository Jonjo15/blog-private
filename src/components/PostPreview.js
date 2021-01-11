import React, {useState} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
import {useAuth} from "../context/AuthContext"
import TogglePublish from './TogglePublish'
export default function PostPreview({post, setPosts}) {
    let linkString = "/posts/" + post._id
    const [error, setError] = useState("")
    const {token} = useAuth()
    const handleDelete = e => {
        axios.defaults.headers.common['Authorization'] = token;
        axios.delete("http://localhost:4000/posts/"+ post._id)
        .then(res => {
            console.log(res.data)
            setPosts(currPosts => {
                return currPosts.filter(p => p._id !== post._id)
            } )
        })
        .catch(err => {
            console.error(err)
            setError("Failed to delete")
        })
    }
    return (
        
        <div className="post-preview">
            {error && <small>{error}</small>}
            <h2>{post.title} by {post.author.first_name} {post.author.family_name}</h2>
            <h3>{post.published ? "Published" : "Not published"}</h3>
            <button onClick={handleDelete}>Delete Post</button>
            <TogglePublish post={post} setPosts={setPosts}/>
            <Link to={linkString}>See more</Link>
        </div>
    )
}