import React from 'react';
import axios from 'axios';
import TodoItem from './components/TodoItem';
import styles from './style.module.scss';
import Input from 'components/Form/Input'
import Button from 'components/Form/Button';
import withTodos  from 'hoc/withTodos';

class Todo extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            // todos: [
            //     {id: 1, title: 'Cходить на работу'},
            //     {id: 2, title: 'Подать экстренное извещение'},
            //     {id: 3, title: 'Сделать приказ на школу'},
            //     {id: 4, title: 'Повторить всё перед собесом'},
            //     {id: 5, title: 'Составить диалог по инглишу'},
            //     {id: 6, title: 'Пройти собес'},
            // ],

            title: '',
        }
    }

    // componentDidMount() {
    //     // axios.get('https://todo-fe57.herokuapp.com/todo').then((response) => {
    //     //     const todos = response.data.map(item => {
    //     //         return {
    //     //             id: item._id,
    //     //             title: item.title
    //     //         }
    //     //     })


           

            
    //     //     this.setState({
    //     //         todos: todos
    //     //     })
    //     // })

    //    this.onHandlerTodo()

    // }

    onRemoveHandler = (item) => {
        // console.log(item)
        this.props.delete(item)
    }

    // onAddHandler = () => {
    //     this.setState({

    //     })
    // }

    onHandlerTodo = () => {
        axios.get('https://todo-fe57.herokuapp.com/todo').then((response) => {
            const todos = response.data.map(item => {
                return {
                    id: item._id,
                    title: item.title
                }
            })
            
            this.setState({
                todos: todos
            })
        })

    }

    onInputAddHandler = (e) => {
       
        this.setState({
            title: e.target.value
        })
    }

    onClickButtonHandler = () => {
        this.props.create(this.state.title)
        
    
       

       const newItem = {
           id: Math.round(Math.random() * 100),
           title: this.state.title
          
       }

       const copy = [...this.state.todos];
       copy.push(newItem)

         this.setState({
             todos: copy
         })

    };
    


    render() {
        console.log(this.props)
        return(
             
            <div className={styles.content}>
                    <Input onChange={this.onInputAddHandler}/>
                    <Button onClick={this.onClickButtonHandler}>Add</Button>


                {this.props.items.map(item => (
                    <TodoItem 
                    id={item.id}
                    title={item.title} 
                    onRemove={this.onRemoveHandler}/>
                ))}
            </div>
        )
    }
}

export default withTodos(Todo);