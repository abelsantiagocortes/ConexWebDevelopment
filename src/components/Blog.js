import React from 'react'
import styled from 'styled-components/macro';
const BlogContainer = styled.div`
    {
       
        h1{
            font-family: 'Lobster', cursive; 
        }

    }`

function Blog() {
    return (
        <BlogContainer>
            <h1>Blog</h1>
        </BlogContainer>
    )
}

export default Blog
