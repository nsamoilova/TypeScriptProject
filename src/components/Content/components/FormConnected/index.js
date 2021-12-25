import React , {useState}from 'react';
import styles from './style.module.scss';
import axios  from "axios";
import LeftSideForm from './components/LeftSideForm';
import RightSideForm from './components/RightSideForm';

const UsersContext = React.createContext();

const FormConnected = () => {
    
        const [value, setValue] = useState('');
      
        const onChangeValue = (value) => {
            setValue(value)
        }

      



    return (
        <div className={styles.form}>
       
            <LeftSideForm value={value}  onChange={onChangeValue}/>
            <RightSideForm value={value}  onChange={onChangeValue} />
   
        </div>
    )
}



export default FormConnected;