import React from 'react'
import { Link } from 'react-router-dom'

const PostSummary = ({ post }) => {
    return (
        <Link to={ `/posts/${post.id}` }>
            <div className="ui card post-summary">
                <div className="content">
                    <h4 className="header">{ post.title }</h4>
                    <div className="meta">posted by: { post.author }</div>
                </div>

                <div className="content">
                    <div 
                        className="description"
                        style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}>
                        { post.content }
                    </div>
                </div>

                <div className="extra content">
                    <div className="timestamp">29th Nov. 4am</div>
                </div>
            </div>
        </Link>
    )
}

export default PostSummary