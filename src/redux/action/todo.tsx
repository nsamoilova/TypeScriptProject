import { Dispatch } from "react";

 export const ADD_TODO = 'ADD_TODO';
 export const REMOVE_TODO = 'REMOVE_TODO';
 export const LOADING ='LOADING';

export enum Actions {
    ADD_TODO = 'ADD_TODO',
    REMOVE_TODO = 'REMOVE_TODO',
    LOADING ='LOADING'
}


interface AddTodoAction {
    type: Actions.ADD_TODO;
    payload: string
}

interface RemoveTodoAction{
    type: Actions.REMOVE_TODO;
    payload: string
}

interface LoadingTodoAction {
    type: Actions.LOADING;
    payload: boolean
}


export type Action = AddTodoAction | RemoveTodoAction | LoadingTodoAction;


export function addTodo(name: string): AddTodoAction {
    return {
        type: Actions.ADD_TODO ,
        payload: name
    }
}

export function removeTodo(name: string): RemoveTodoAction  {
    return {
        type: Actions.REMOVE_TODO ,
        payload: name
    }
}


export function setLoading (value: boolean): LoadingTodoAction {
    return {
        type: Actions.LOADING,
        payload: value
    }
}


export function asyncAddTodo(name: string) {
 return function(dispatch: Dispatch<Action>) {
   dispatch(setLoading(true));
   
   setTimeout(() => {
       dispatch(addTodo(name));
       dispatch(setLoading(false))
   },1000)
}
}