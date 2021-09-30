import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import './Post.css';
import { useHistory } from "react-router-dom";

const Post = (props) => {
    const { posts } = props || {};

    let history = useHistory();

    function handleClick(id) {
        history.push(`/post/details/${id}`);
    }

    return (
        <div className="post">
            <Table responsive>
                <thead>
                    <tr>
                        <th>Post Id</th>
                        <th>Title</th>
                        <th>More</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post =>
                        <tr key={post.id}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            {/* <td><NavLink to={`/post/details/${post.id}`}><button className="btn btn-info text-white">Details</button></NavLink></td> */}
                            <td><button onClick={() => handleClick(post.id)} className="btn btn-info text-white">Details</button></td>
                        </tr>
                    )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Post;