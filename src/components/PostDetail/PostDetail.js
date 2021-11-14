import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';
import './PostDetail.css';

const PostDetail = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, []);

    const navigate = useNavigate();
    const handlePosts = () => {
        navigate("/posts");
    }

    return (
        <>
            <div className='post-detail mt-5'>
                <h2>Post No : {postId}</h2>
                <h3 style={{ width: '70%' }}>{post.body}</h3>
                <Button onClick={handlePosts}> See All Post</Button>
            </div>
        </>
    );
};

export default PostDetail;