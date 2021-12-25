import React from 'react';
import styles from './style.module.scss';

class Input extends React.Component{

onChangeHandler = (e) => {
    this.props.onChange(e.target.value)
}

    render() {
        return (
            <input 
              {...this.props}
              type={this.props.type}
              className={styles.input} 
              onChange={this.onChangeHandler} 
              
            />
        )
    }
}

export default Input;