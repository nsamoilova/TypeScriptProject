import React, {memo,useState,useContext } from "react";
import Input from 'components/Form/Input';
import styles from './style.module.scss'
import axios  from "axios";
import {UsersContext} from '../../index'




const LeftSideForm = ({value,onChange }) => {
  
    

    // const onChangeHandler = (value) => {
    //     onChange(value)
    // }

    return (
        <div className={styles.form}>
           
            <Input value={value} data-testid='inputLeft' onChange={onChange}/>
           
        </div>
    )
}



export default LeftSideForm;