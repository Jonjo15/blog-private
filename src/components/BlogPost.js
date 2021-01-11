import React from 'react'
import dayjs from "dayjs"
// import axios from "axios"
// import {useAuth} from "../context/AuthContext"
import {Link} from "react-router-dom"
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

export default function BlogPost({post, setPosts}) {
    
    return (
        <div className="post-card">
            <h1>{post.title}</h1>
            <h2>{post.author.first_name} {post.author.family_name}</h2>
            <h3>Status: {post.published ? "Published" : "Not Published"}</h3>
            <small>{dayjs(post.createdAt).format('DD/MM/YYYY')}</small>
            <p>{post.body}</p>
            <small>Email the author at {post.author.email}</small>
            <Link to="/">Dashboard</Link>
        </div>
    )
}