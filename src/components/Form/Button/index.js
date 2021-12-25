import React from "react";
import styles from './style.module.scss'

class Button extends React.Component{
    render() {
        console.log('render')
        return (
            <button 
                onClick={this.props.onClick}
                className={styles.button}
                data-testid='button'
            >
                {this.props.children}
            </button>
        )
    }
}



export default Button;