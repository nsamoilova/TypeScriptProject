
import {Action, Actions} from '../action/todo'


const initialState: TodoState= {
     items: ['one', 'two', 'three'],
     loading: false
    

}

function todoReducer(state: TodoState = initialState, action: Action) {
   switch(action.type) {
       case Actions.ADD_TODO:
         return {
            ...state,
             items: state.items.concat(action.payload)
         }

    case Actions.REMOVE_TODO:
      return {
         ...state,
         items: state.items.filter(item => item !== action.payload)
       
      }
      case Actions.LOADING:
       return {
          ...state,
          loading: action.payload
       }
      default:
           return state;
   }
}

export default todoReducer;