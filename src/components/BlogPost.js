import React, {useState} from 'react'
import dayjs from "dayjs"
import axios from "axios"
import {useAuth} from "../context/AuthContext"
import {useHistory} from "react-router-dom"
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

export default function BlogPost({post, setPosts}) {
    const {token} = useAuth()
    const history = useHistory()
    const [error, setError] = useState("")
    const handleDelete = e => {
        axios.defaults.headers.common['Authorization'] = token;
        axios.delete("http://localhost:4000/posts/"+ post._id)
        .then(res => {
            setPosts(currPosts => {
                return currPosts.filter(p => post._id !== p._id)
            })
            history.push("/")
        })
        .catch(err => {
            setError(err)
        })
    }
    return (
        <div className="post-card">
            <h1>{post.title}</h1>
            <h2>{post.author.first_name} {post.author.family_name}</h2>
            <h3>Status: {post.published ? "Published" : "Not Published"}</h3>
            <small>{dayjs(post.createdAt).format('DD/MM/YYYY')}</small>
            <p>{post.body}</p>
            <small>Email the author at {post.author.email}</small>
            <button onClick={handleDelete}>Delete{error && <span>{error}</span>}</button>
        </div>
    )
}