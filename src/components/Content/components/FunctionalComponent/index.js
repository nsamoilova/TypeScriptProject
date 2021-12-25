import React, { memo,useCallback, useEffect, useMemo, useState } from "react";
import Input from 'components/Form/Input';
import Button from 'components/Form/Button'
import axios  from "axios";

const users = [
    {name:'dima', age: 15},
    {name:'dima2', age: 16},
    {name:'dima3', age: 17},
    {name:'dima4', age: 55},
    {name:'dima5', age: 19},

]


const FunctionalComponent = ({ title }) => {

    const [count, setCount] = useState(0);
    // const [number, setNumber] = useState(0)
    const [value, setValue] = useState('default')




const adult = useMemo(() => {
   return users.filter(user => user.age > 10 & user.age <= 20)
},[])

const onChangeInput = (value) => {
    setValue(value)
}


// const onClickHandler = () => {
//     console.log('work', count)
// };

const onClickHandler = useCallback(() => {
    console.log('work', value)
}, [value]);


// useEffect(() => {
//     console.log('я обновился')
// }, []);

// useEffect(() => {
//     console.log('count обновился' + number)
// }, [number,count]);

//     const onClickHandler = () => {
//         setCount(count + 1);
        
//     }

//     const onInputHandler = (value) => {
//         setCount(() => {
//           return value * 2
//         })
//     }


    return(
        <div>
            <Button onClick={onClickHandler}>click</Button>
        {adult.map(user => (
            <div>{user.name}</div>
        ))}
        <Input onChange={onChangeInput} />
        {/* <div>{number}</div> */}
        {/* <div>{value}</div> */}
        {value}
        </div>
        
        
        
    )
}

export default memo(FunctionalComponent);