import React from 'react'
import '../css/BlogCard.css';

function BlogCard({ title, date, content, author,link }) {
    return (
        <div className="blogcard">
            <h1>{title}</h1>
            <h4>{date}</h4>
            <div className="blogcard__textauth">
                <p>
                    {content}
                </p>
                <h3>{author}</h3>
                <div className="blogcardButtondiv">
                    <a href={link}>

                        <button className="blogcard__link">Ver articulo completo</button>
                    </a>

                </div>
            </div>

        </div>
    )
}

export default BlogCard
