import React, {memo,useState,useContext } from "react";
import styles from './style.module.scss'
import Profile from "./components/Profile";




const LeftSideForm = () => {

    return (
        <div className={styles.form}>
           
            <Profile />
           
        </div>
    )
}



export default LeftSideForm;