import React from 'react'
import dayjs from "dayjs"
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)
export default function Comment({comment}) {
    return (
        <div className="comment">
            <h2>By: {comment.author}</h2>
            <p>{comment.body}</p>
            <small>{dayjs(comment.created_at).fromNow()}</small>
        </div>
    )
}