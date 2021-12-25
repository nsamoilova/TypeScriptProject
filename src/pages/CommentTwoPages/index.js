import React, {useEffect, useState} from 'react';
import styles from './style.module.scss'




const CommentTwoPages = () => {
    const [comment, setComment] = useState({
        comment: []
      });

      useEffect(() => {
        console.log("comment 2");
        fetch("https://jsonplaceholder.typicode.com/comments/2" )
        .then(response => response.json())
        .then(json => console.log(json))
      }, [comment]);

    return(
        <div>
            <h2 className={styles.title}>Comment</h2>
            
            
        </div>
    )
}

export default CommentTwoPages;