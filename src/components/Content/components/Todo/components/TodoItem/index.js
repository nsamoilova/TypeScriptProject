import React from "react";
import styles from './style.module.scss';
import Button from 'components/Form/Button';

class TodoItem extends React.Component{

    onClickHandler = () => {
        this.props.onRemove(this.props.id)
    }

    render() {
        return (
            <div className={styles.item} id={'todo-item-' + this.props.id} data-testid="todo-item">
                {this.props.title}
                <Button onClick={this.onClickHandler}>Delete</Button>
            </div>
        )
    }
}

export default TodoItem;