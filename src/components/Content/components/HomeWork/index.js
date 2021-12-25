import React , { useState, createContext } from 'react';
import styles from './style.module.scss';
import LeftSideForm from './components/LeftSideForm';
import RightSideForm from './components/RightSideForm';


const ValueContext = React.createContext();
const { Provider } = ValueContext;

const HomeWork = () => {
    
        const [value, setValue] = useState('');
      
        const onChangeValue = (value) => {
            setValue(value)
        }

      



    return (
         <div className={styles.form}>
            <Provider value={{value, onChangeValue}}>
                 <LeftSideForm />
                 <RightSideForm />
            </Provider>    
        </div>
          
        
    )
}

export  {
   ValueContext
}



export default HomeWork;