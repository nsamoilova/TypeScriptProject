import React, {useEffect, useState} from 'react';
import {  Outlet,Link } from 'react-router-dom';
import styles from './style.module.scss'



const PostsPages = () => {

    const [posts, setPost] = useState({
        posts: []
      });

      useEffect(() => {
        console.log("post 1");
        fetch("https://jsonplaceholder.typicode.com/posts" )
        .then(response => response.json())
        .then(json => console.log(json))
      }, [posts]);
   

    return(
        
        <div className={styles.postitem}>
            {posts.posts.map(item => {
            <h2 className={styles.title}>Posts</h2>
            })}
           
            
            <Outlet />
        </div>
    )
}

export default PostsPages;