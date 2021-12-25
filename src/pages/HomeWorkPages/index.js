import React from 'react';
import {  Outlet,Link } from 'react-router-dom';
import styles from './style.module.scss';
import Albums from '../../components/Content/components/Albums';

const HomeWorkPages = () => {
    return (
        <div >
            <h1 className={styles.title}>Blog</h1>
            <div className={styles.blogitem}>
               <Link to="/posts" className={styles.post}>Posts</Link>
               <Link to="/post-1" className={styles.post}>Post 1</Link>
               <Link to="/post-2" className={styles.post}>Post 2</Link>
               <Link to="/post-3" className={styles.post}>Post 3</Link>
               < Outlet />
                 
            </div>
        </div>
    )
}

export default HomeWorkPages;