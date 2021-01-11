import React, {useState, useEffect} from 'react'
import axios from "axios"
import {useAuth} from "../context/AuthContext"
export default function TogglePublish({post, setPosts}) {
    const [published, setPublished] = useState(null)
    const {token} = useAuth()
    useEffect(() => {
        setPublished(post.published)
    }, [post])
    if (published === null) return (<div>...loading</div>)
    
    const handleClick = e => {
        axios.defaults.headers.common['Authorization'] = token;
        const verb = published ? "unpublish" : "publish"
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
            setPublished(currPublished => !currPublished)
        })
        .catch(err => {
            console.error(err)
        })
    }
    return (
        <button onClick={handleClick}>{published ? "Unpublish" : "Publish"}</button>
    )
}
