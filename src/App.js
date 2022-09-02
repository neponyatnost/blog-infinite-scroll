import React, { useState, useRef } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MySelect from './components/UI/select/MySelect';
import './styles/App.css';

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'Javascript', body: 'Description' },
        { id: 2, title: 'Javascript 2', body: 'Description 2' },
        { id: 3, title: 'Javascript 3', body: 'Description 3' },
    ])

    const [selectedSort, setSelectedSort] = useState('');
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className='App'>
            <PostForm create={createPost} />
            <hr style={{ margin: '15px 0px' }} />
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue='Сортировка'
                    options={[
                        { value: 'title', name: 'По названию' },
                        { value: 'body', name: 'По описанию' },
                    ]}
                />
            </div>
            {posts.length
                ? <PostList remove={removePost} posts={posts} title='Post list' />
                : <h3 style={{ textAlign: 'center', textTransform: 'uppercase', color: 'teal' }}>Записей нет</h3>
            }
        </div>
    );
}

export default App;