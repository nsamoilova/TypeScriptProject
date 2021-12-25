import React from 'react';
import styles from './style.module.scss';
import Input from 'components/Form/Input';
import Button from 'components/Form/Button';
import Number from './components/Number';

class Form extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
           number:0
        }
    }

    onSumbitHandler = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    // onChangeHandler2 = (event) => {
    //     this.setState({
    //         number2: +event.target.value,
    //     });
    // }

    // onChangeHandler3 = (event) => {
    //     this.setState({
    //         color: event.target.value,
    //     });
    // }

    render() {
        return(
            <div className={styles.form}>
                {/* <Input onChange={this.onChangeHandler1} type='number'/>
                <Input onChange={this.onChangeHandler2} type='number'/>
                <div className={styles.number}>
                    {this.state.number1 + this.state.number2}
                </div>

                <Input onChange={this.onChangeHandler3} type='text'/>
                <div className={styles.square} style={{background: this.state.color }}>
                </div> */}
                <Button onClick={this.onSumbitHandler}> click me</Button>
                <Number value={this.state.number}/>
            </div>
        )
    }
}

export default Form;
