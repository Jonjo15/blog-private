import React, {useState} from 'react'
import dayjs from "dayjs"
import axios from "axios";
import {useParams} from "react-router-dom"
import {useAuth} from "../context/AuthContext"
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)
export default function Comment({comment, setComments}) {
    const {token} = useAuth()
    const params = useParams()
    const [error, setError] = useState()
    const handleDelete = e => {
        axios.defaults.headers.common['Authorization'] = token;
        axios.delete("http://localhost:4000/posts/"+ params.postId + "/comments/" + comment._id)
        .then(res => {
            console.log(res.data)
            setComments(currComments => {
                return currComments.filter(com => com._id !== comment._id)
            } )
        })
        .catch(err => {
            setError(err)
        })
    }
    return (
        <div className="comment">
            {error && <span>{error}</span>}
            <h2>By: {comment.author}</h2>
            <p>{comment.body}</p>
            <small>{dayjs(comment.created_at).fromNow()}</small>
            <button onClick={handleDelete}>Delete Comment</button>
        </div>
    )
}