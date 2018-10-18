import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const PostSummary = ({ post }) => {
    return (
        <Link to={ `/posts/${post.id}` }>
            <div className="ui card post-summary">
                <div className="content">
                    <span className="header">{ post.title }</span>
                    <div className="meta">posted by: { post.author_username }</div>
                </div>

                <div className="content">
                    <div 
                        className="description"
                        style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}>{ post.content }
                    </div>
                </div>

                <div className="extra content">
                    <div className="timestamp">{ moment(post.posted_at.toDate()).fromNow() }</div>
                </div>
            </div>
        </Link>
    )
}

export default PostSummary