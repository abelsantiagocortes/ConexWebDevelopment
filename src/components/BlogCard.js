import React from 'react'
import '../css/BlogCard.css';

function BlogCard({ title, date, content,author }) {
    return (
        <div className="blogcard">
            <h1>{title}</h1>
            <h4>{date}</h4>
            <div className="blogcard__textauth">
                <p>
                    {content}
                </p>
                <h3>{author}</h3>

            </div>
        </div>
    )
}

export default BlogCard
