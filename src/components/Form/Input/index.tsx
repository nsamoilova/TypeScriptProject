import React from 'react';
import styles from './style.module.scss';



interface Props {
    onChange: (value: string) => void;
   

}

class Input extends React.Component<HTMLProps<Props, HTMLInputElement>>{

onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(e.target.value)
}

    render() {
        return (
            <input 
              {...this.props}
            //   type={this.props.type}
            //   className={styles.input} 
              onChange={this.onChangeHandler} 
              
            />
        )
    }
}

export default Input;