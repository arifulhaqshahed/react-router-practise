import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Post from '../Post/Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <>
            {posts.length === 0 ? <div className='App mt-5'><Spinner animation="border" variant="success" /></div>
                :
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </>
    );
};

export default Posts;