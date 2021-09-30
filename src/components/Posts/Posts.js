import React from 'react';
import { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Posts.css';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const URL = `https://jsonplaceholder.typicode.com/posts`;
        fetch(URL).then(res => res.json()).then(data => setPosts(data)).catch(err => console.log(err));
    }, [])

    return (
        <div className="nav-margin">
            <h2>All Posts</h2>
            <div className="d-flex justify-content-center">
                <Post posts={posts} />
            </div>
        </div >
    );
};

export default Posts;