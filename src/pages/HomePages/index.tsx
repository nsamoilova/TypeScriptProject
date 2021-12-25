import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import Button from 'components/Form/Button';
import Input from 'components/Form/Input';
import { addTodo, removeTodo, setLoading, asyncAddTodo } from 'redux_main/action/todo'; 
import Albums from '../../components/Content/components/Albums';



const HomePages = () => {
 const dispatch = useDispatch();   
const [value, setValue] = useState<string>();
// const items = useSelector (state => state.todo.items)
const items = useSelector(function(state: Store){
  return state.todo.items
});
const [loading, setLoading] = useState(false);


  const onClickHandler = () => {
     dispatch(asyncAddTodo(value))
    }
    
  

  const onClickHandlerRemove = () => {
    dispatch(removeTodo(value))
  }



    return(
        <div>
        <h1>Home pages</h1>
         <Button onClick={onClickHandler}>add new item</Button>
         <Input onChange={setValue}/>
         <Button onClick={onClickHandlerRemove}>remove item</Button>
        {items.map(item => (
             <div key={item}>{item}</div>
         ))}

         {loading && <div>...loading</div>}

        {/* <Link to="/course">Link on course</Link>
        <Link to="/users">Users</Link>
        <Link to="/my-account">Account</Link>
        <Link to="/kursy-programmirovaniya">kursy</Link> */}

    

        
        </div>
    )
}




// const mapDispatchToProps = {
//       addTodo: addTodo,
//       removeTodo: removeTodo
// }



export default HomePages;