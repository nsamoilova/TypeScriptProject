import { props } from "cypress/types/bluebird";
import React, {useEffect, useState} from "react";

interface Props {
    // defaultValue:  number,
    onChangeOne: () => void,
    onChangeTwo: () => void,
    value: number,

}


const Counter: React.FunctionComponent<Props> = (props) => {
//    const [count, setCount] = useState(props.defaultValue);
//    const [count, setCount] = useState(props.onChange);
  
 
//    useEffect(() => {
//    props.onChange()
//    },[count])

   const increment = () => {
    //    setCount(count + 1)
    props.onChangeOne()

   }

   const ondecrement = () => {
    // if( count !== 0){
    //     setCount(count - 1)   
    // }
   props.onChangeTwo()

   }

    


// const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     console.log(e.target.value)
// }

    return (
        <div>
            <button onClick={increment}>+</button>
            {props.value}
            <button onClick={ondecrement}>-</button>
            {/* <input onChange={onChangeInput}/> */}
        </div>
    )
}

export default Counter;