import React from 'react';
import _ from 'lodash'


function Memo(Component){
    return class extends React.Component{
        shouldComponentUpdate(nextProps,nextState){
            console.log(this.props, nextProps)
        //  if (_.isEqual(this.props, nextProps)){
        //         return false
        //     }

        //     return true
        return !_.isEqual(this.props, nextProps)
           
        }
        
        render() {
            return (
           
            <Component {...this.props}/>
          )
      }
    }
}

export default Memo;