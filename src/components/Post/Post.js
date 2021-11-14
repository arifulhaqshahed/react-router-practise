import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import './Post.css';

const Post = (props) => {
    const { id, title, body } = props.post;

    const navigate = useNavigate();
    const handleDetails = () => {
        navigate(`/posts/${id}`);
    }
    return (
        <Card border="success" className="text-success text-center card">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {body}
                </Card.Text>
                <Button onClick={handleDetails} variant="outline-dark">See Details</Button>
            </Card.Body>
        </Card>
    );
};

export default Post;