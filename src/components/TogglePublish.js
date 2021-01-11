import React from 'react'
import axios from "axios"
import {useAuth} from "../context/AuthContext"
export default function TogglePublish({post, setPosts}) {
    const {token} = useAuth()
    const handleClick = e => {
        axios.defaults.headers.common['Authorization'] = token;
        const verb = post.published ? "unpublish" : "publish"
        const route = "http://localhost:4000/posts/" + post._id + "/" + verb
        axios.put(route)
        .then(res => {
            console.log(res.data)
            setPosts(currPosts => {
                return currPosts.map(p => {
                    if(p._id === post._id ) {
                        p.published = !post.published
                    }
                    return p
                })
            })
        })
        .catch(err => {
            console.error(err)
        })
    }
    return (
        <button onClick={handleClick}>{post.published ? "Unpublish" : "Publish"}</button>
    )
}
