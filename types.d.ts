declare module "*.scss";
declare module "*mp4";

type HTMLProps<T, U> = T & Omit<React.HTMLProps<U>, keyof T> //утилити тайп

interface TodoState {
    items: string[],
    loading: boolean
 }

 interface Store {
     todo: TodoState
 }

 
 