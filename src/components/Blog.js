import React from 'react'
import styled from 'styled-components/macro';
import '../css/Blog.css';
import BlogCard from './BlogCard';
import Social from './Social';
import { useTranslation } from 'react-i18next';

const BlogContainer = styled.div`
    {
       
        h1{
            font-family: 'Lobster', cursive; 
        }

    }`

function Blog() {
    const { t } = useTranslation();

    return (
        <BlogContainer className="blog">
            
            <Social/>
            
            <div className="blog__bannerContainer">
                <h1>Blog</h1>
            </div>
            <div className="blog__Content">
                <div className="blog__ContentWelcome">
                    <h1>{t('Welcomeblog.1')}</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                     deserunt mollit anim id est laborum." (Texto motivación a suscribirse)</p>
                </div>
                <div className="blog__ContentBtns">
                    <button className="blog__ContentBtnsMore" >{t('MoreArt.1')}</button>
                    <button>{t('Subscribe.1')}</button>
                </div>
                <BlogCard/>
                <h1>Entradas pasadas...</h1>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
            </div>
        </BlogContainer>
    )
}

export default Blog
