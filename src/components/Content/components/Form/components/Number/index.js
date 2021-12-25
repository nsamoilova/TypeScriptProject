import React from 'react';
import Memo from '../../../../../../HOC/memo';


class Number extends React.Component{
    render(){
        console.log('render')
        return (
            <div>{this.props.value}</div>
        )
    }
}

export default Memo(Number);