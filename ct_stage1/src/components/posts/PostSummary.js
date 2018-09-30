import React from 'react'
import { Link } from 'react-router-dom'

const PostSummary = ({ post }) => {
    return (
        <Link to={ `/posts/${post.id}` }>
            <div className="ui card post-summary">
                <div className="content">
                    <h4 className="header">{ post.title }</h4>
                    <div className="meta">Posted by: { post.author }</div>
                </div>

                <div className="content">
                    <div className="description">
                        { post.content }
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PostSummary