import React from 'react';
import Memo from '../../../../HOC/memo';
import Button from 'components/Form/Button'


class MemoShould extends React.Component{
    constructor(props){
        super(props)

        this.state={
            count: 0
        }

    }

    onClickButton = (e) =>{
        this.setState({
              count: this.state.count + 1
        });
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log(this.state, nextState)
    if(this.state.count !== nextState.count) {
        return true;
    }
        return false;
    }

    


        render() {
            return (
                <div>
                <span>click me: {this.state.count}</span>
                <Button onClick = {this.onClickButton}>Click</Button>
            </div>
          )
      }
    }


export default Memo(MemoShould);
