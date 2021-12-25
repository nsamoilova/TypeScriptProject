import React, {useEffect, useState} from "react";
import Counter from "./components/Counter";
import VideoPlayer from "components/Content/components/VideoPlayer";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setLoading } from "../../redux/action/todo";

const TestTypescript = () => {
    // const [count, setCount] = useState(0);
    // const [count2, setCount2] = useState(0);

    const value = useSelector((state: Store) => state.todo.loading)
    const dispatch = useDispatch()

    // useEffect(() => {
    //   dispatch(addTodo('new item'))
    // },[])

    const onClockAddNewItem = () => {
        dispatch(setLoading(true))
    }

    return (
        <div>
            {/* <Counter defaultValue={10}  onChange={() => console.log('change')}/> */}
            {/* <Counter  value={count} onChangeOne={() => setCount(count + 1)} onChangeTwo={() => setCount(count - 1)}/>
            <Counter  value={count2} onChangeOne={() => setCount2(count2 + 2)}  onChangeTwo={() => setCount(count2 - 2)}/> */}
        
        </div>
    )
}

export default TestTypescript;