import React, { useEffect, useState } from 'react';
import './User.style.css';

const User = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])

    // const [users, setUsers] = useState([]);

    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(res => res.json())
    //     .then(data => setUsers(data))
    // }, []);
    return (
        <div>
            {
                posts.map(post => {
                    return(
                        <div className='user-info' key={post.id}>
                            <h3>title: {post.title}</h3>
                            <p>post: {post.body}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default User;