import React, { useState } from 'react';
import styles from './style.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCount } from '../../redux/action/count';
import { addTodo, setLoading } from '../../redux/action/todo';
import Button from 'components/Form/Button';
import Input from 'components/Form/Input';

const Footer = () => {
    const dispatch = useDispatch(); 
  
    const [value, setValue] = useState('');
    const loading = useSelector(state => state.todo.loading)

    

    const onClickHandler = () => {
        dispatch(setLoading(true))
        setTimeout(() => {
          dispatch(addTodo(value))
          dispatch(setLoading(false))
        }, 1000)
        
      }

  
   
        return (
            <div className={styles.footer}>
               footer
               <Input onChange={setValue}/>
               <Button onClick={onClickHandler}>click</Button>
               {loading && <div>...loading</div>}
               {/* <Button onClick={onClickCount}>+</Button> */}
            </div>
        )
    
}

export default Footer;