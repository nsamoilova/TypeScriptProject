import React, {useEffect, useState} from 'react';
import {  Outlet,Link } from 'react-router-dom';
import styles from './style.module.scss'



const PostTwoPages = () => {

    const [post, setPost] = useState({
        post: []
      });

      useEffect(() => {
        console.log("post 2");
        fetch("https://jsonplaceholder.typicode.com/posts/2" )
        .then(response => response.json())
        .then(json => console.log(json))
      }, [post]);
   
    return(
        <div className={styles.postitem}>
            <h2 className={styles.title}>Post 2</h2>
            <Link to="comment" className={styles.comment}>Comment</Link>
            <Outlet />
        </div>
    )
}

export default PostTwoPages;