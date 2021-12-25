import React, {useEffect, useState} from 'react';
import styles from './style.module.scss'


const userComment = 
    {
        postId: '',
        id: '',
        name: "",
        email: "",
        body: ""
    }

const CommentOnePages = () => {
    
    const [comment, setComment] = useState({
        comment: []
      });

      useEffect(() => {
        console.log("comment 1");
        fetch("https://jsonplaceholder.typicode.com/comments/1" )
        .then(response => response.json())
        .then(json => console.log(json))
      }, [comment]);
    return(
        <div>
            {comment.comment.map(item => {
            <h2 className={styles.title}>Comment</h2>
            })}
            
        </div>
    )
}

export default CommentOnePages;