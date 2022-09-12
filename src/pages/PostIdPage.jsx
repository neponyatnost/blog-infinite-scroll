import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState([{}]);
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data);
    })

    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])
    return (
        <div>
            <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>Post №{params.id}</h1>
            {isLoading
                ? <Loader />
                : <div style={{ border: '1px solid teal', padding: '10px', maxWidth: '800px' }}>{post.id}. {post.title}
                    <div style={{ marginTop: '10px', fontSize: '14px' }}>{post.body}</div>
                </div>
            }
            <h2 style={{ marginTop: '20px', color: 'teal', textAlign: 'center' }}>Comments</h2>
            {isComLoading
                ? <Loader />
                : <div>
                    {comments.map(comm =>
                        <div key={comm.id} style={{ marginTop: '15px', maxWidth: '800px' }}>
                            <h5 style={{ marginBottom: '10px' }}>{comm.email}:</h5>
                            <div style={{ fontSize: '14px' }}>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
}

export default PostIdPage;