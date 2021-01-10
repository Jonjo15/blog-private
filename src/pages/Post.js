import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
import AddComment from "../components/AddComment"
import BlogPost from '../components/BlogPost'
import Comment from "../components/Comment"
import {useAuth} from "../context/AuthContext"
export default function Post({setPosts}) {
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    const [showForm, setShowForm] = useState(false)
    const {token} = useAuth()
    const params = useParams()
    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = token;
        axios.get("http://localhost:4000/api/posts/" + params.postId)
        .then(res => {
            setPost(res.data.post)
            setComments(res.data.comments)
            setLoading(false)
        })
    }, [params.postId, token])
    
    return (
        <div className="post-wrapper">
            {loading && <h2>Loading....</h2>}
            {!loading && <BlogPost post={post}/>}
            {!loading && !showForm && <button style={{marginBottom: 20}} onClick={() => setShowForm(true)}>Add a comment</button>}
            {!loading && comments.map((comment,i) => <Comment setComments={setComments} key={comment._id} comment={comment}/>)}
            {!loading && showForm && <AddComment setShowForm={setShowForm} postId={params.postId} setComments={setComments}/>}
        </div>
    )
}
