import React from 'react';
import axios from 'axios';


function withTodos(Component) {
    return class extends React.PureComponent{

        constructor(props) {
            super(props);

            this.state = {
                todos: []
            }
        }

        componentDidMount() {
            this.onHandlerTodo()
        }

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

        createTodo = (title) => {
            const formData = new FormData();
            formData.append('title', title)
            axios.post('https://todo-fe57.herokuapp.com/todo', formData).then(() => {
                this.onHandlerTodo()
            });
        }

        deleteTodo = (item) => {
            axios.delete('https://todo-fe57.herokuapp.com/todo/' + item).then(() => {
                this.onHandlerTodo()
            })
        }

        render() {
            return (
                <Component items={this.state.todos}
                    create={this.createTodo}
                    delete={this.deleteTodo}
                />
          )
      }
  }
}

export default withTodos;