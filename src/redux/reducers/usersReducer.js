import { usersList } from "../../components/Content/components/Users";


const initialState = {
     items: ['one', 'two', 'three'],
     id: usersList,
    

}

function usersReducer(state = initialState, action) {
   switch(action.type) {
       
    case 'REMOVE_USERS':
      return {
         id: state.id.filter( item => item.id !== id)
         }
           default:
           return state;
      }
      
   }


export default usersReducer;