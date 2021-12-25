import React, {useState, useContext } from "react";
import Input from 'components/Form/Input';
import styles from './style.module.scss'
import axios  from "axios";
import {UsersContext} from '../../index'
import LeftSideForm from "../LeftSideForm";

const RightSideForm = ({value, onChange}) => {



    const onChangeHandler = (value) => {
        onChange(value)
    }

    return (
        <div className={styles.form}>
            <Input value={value} data-testid='inputRight' onChange={onChangeHandler}/>
            
        </div>
    )
}

export default RightSideForm