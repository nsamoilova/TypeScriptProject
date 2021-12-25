
import React, { useEffect, useState } from "react";
import List from "./components/List";
import { removeUsers } from "../../../../redux/action/users";
import { connect } from 'react-redux';

const usersList = [
    {id: 1, name:'Дима', age: 16},
    {id: 2, name:'Петя', age: 20},
    {id: 3, name:'Вася', age: 50},
    {id: 4, name:'Антон', age: 70},
    {id: 5, name:'Максим', age: 15},
];

const UsersContext = React.createContext();

const Users = ({ removeUsers, users }) => {

  
  const { Provider } = UsersContext;

  useEffect(() => {
    setUsers(usersList)
  }, []);

  const deleteUser = () => {
    // const newUsers = users.filter( user => user.id !== id);
    removeUsers(users)
  }

//   const a ={
//       users: user,
//       deleteUser
//   }

   return (
       <Provider value={{ users, deleteUser }}>
            <List onDeleteUser={deleteUser} items={users} />
       </Provider>
      
   )
}

function mapStateToProps(state) {
  return {
      users: state.users.users
  }
}



const mapDispatchToProps = {
    removeUsers: removeUsers
}

export {
    UsersContext,
    usersList,
  
}

export default connect(Users);
