import React, {useState} from 'react'
import {Link} from "react-router-dom"
import axios from "axios"
import {useAuth} from "../context/AuthContext"
import TogglePublish from './TogglePublish'
import EditPostForm from './EditPostForm'
export default function PostPreview({post, setPosts}) {
    let linkString = "/posts/" + post._id
    const [error, setError] = useState("")
    const [titleUI, setTitleUI] = useState(false)
    const [showForm, setShowForm] = useState(false)
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
            <h2>{titleUI || post.title} by {post.author.first_name} {post.author.family_name}</h2>
            <TogglePublish post={post} setPosts={setPosts}/>
            {!showForm && <button onClick={() => setShowForm(true)}>Edit Post</button>}
            {showForm && <EditPostForm setTitleUI={setTitleUI} setShowForm={setShowForm} post={post} setPosts={setPosts}/>}
            <button onClick={handleDelete}>Delete Post</button>
            <Link to={linkString}>See more</Link>
        </div>
    )
}