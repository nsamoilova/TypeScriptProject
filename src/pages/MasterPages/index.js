import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCount } from '../../redux/action/count';
import Button from 'components/Form/Button'


const MasterPages = () => {
    const dispatch = useDispatch(); 
    const count = useSelector (state => state.count);
    const navigate = useNavigate();
  
    const onClickHandler = () => {
        navigate('/')
    }
    
  const onClickCount = () => {
      dispatch(addCount())
  }



    return(
        <div>
            <h1>Мастер-классы</h1>
             <Button onClick={onClickCount}>+</Button>
             <Button onClick={onClickHandler}>link to home</Button>
            <div>{count}</div>
        </div>
    )
}

export default MasterPages;