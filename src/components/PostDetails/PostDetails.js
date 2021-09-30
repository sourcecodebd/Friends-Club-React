import React, { useEffect, useState } from 'react';
import './PostDetails.css';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    let { postId } = useParams();
    const [postDetail, setPostDetail] = useState([]);
    const [singlePost, setSinglePost] = useState({})
    useEffect(() => {
        const URL = `https://jsonplaceholder.typicode.com/posts`;
        fetch(URL)
            .then(res => res.json())
            .then(data => setPostDetail(data))
            .catch(err => console.log(err));
    }, [])

    useEffect(() => {
        const foundPost = postDetail.find(post => post.id === parseFloat(postId));
        setSinglePost(foundPost);
    }, [postDetail, postId]);

    return (
        <div className="nav-margin card p-5">
            <div className="alert alert-primary" role="alert">
                <h2>Details of Post no. {postId}</h2>
            </div>
            <div className="card-description p-4 h-75 rounded overflow-scroll" style={{ textAlign: 'justify', boxShadow: 'rgba(0, 0, 0, 0.3) 2px 4px 8px' }}>
                <h3>Post Description:</h3>
                <p>{singlePost?.body}</p>
            </div>
        </div>
    );
};

export default PostDetails;