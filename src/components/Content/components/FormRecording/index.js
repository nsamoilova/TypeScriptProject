import React from 'react';
import styles from './style.module.scss';
import Button from 'components/Form/Button';
import Input from 'components/Form/Input'

const initialState = {
  number: '',
   text: "",
   textError: "",
   numberError: "",
}

class FormRecording extends React.Component {
  constructor(props){
      super(props);

      this.state ={initialState}

      // this.state={
      //     text: "",
      //     number: "",
      //     textError: "",
      //     numberError: "",
          

      // }
  }

  

  onClickInputHandler = (e) => {
    this.setState({
      text: e.target.value,

    });
  };

  onClickInputNumberHandler = (e) => {
    this.setState({
     number: +e.target.value
    });
  };

  // onClickButtonHandler = () => {
  //   alert(this.state.text);
  //   alert(this.state.number)
  // };

  validate = () => {
    let numberError = "";
    let textError = "";

   

    if (!this.state.number){
      numberError = 'Обязательное поле';
    }

    if (!this.state.text) {
      textError = 'Неверный промокод'
    }


    if(numberError || textError) {
      this.setState({numberError, textError});
      return false
    }
    
  return true;

  }

handleSumbit = (e) => {
  e.preventDefault();
  const isValid = this.validate();
  if (isValid){
  console.log(this.state)
  this.setState(initialState)

  }
}

    render() {
        return (
            <div className={styles.form}>
                <div className={styles.formInput}>
                <Input onChange={this.onClickInputNumberHandler} type='number' placeholder="Номер телефона"/>
                <div className={styles.number}>
                    {this.state.numberError}
                </div>
                <Input onChange={this.onClickInputHandler} type='text' placeholder="Промокод" value={this.state.text}/>
                <div className={styles.number}>
                    {this.state.textError}
                </div>
                <Button onClick={this.handleSumbit}>Записаться</Button> 
                </div>
                
             
              
            </div>
        )
    }
}

export default FormRecording;