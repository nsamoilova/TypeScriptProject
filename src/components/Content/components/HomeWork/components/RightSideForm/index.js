import React, {useState, useContext } from "react";
import Input from 'components/Form/Input';
import styles from './style.module.scss'
import { ValueContext} from '../../index'


const RightSideForm = () => {

  const { value, onChangeValue} = useContext(ValueContext)

    return (
        <div className={styles.form}>
            <Input value={value} onChange={onChangeValue}/>
            
        </div>
    )
}

export default RightSideForm