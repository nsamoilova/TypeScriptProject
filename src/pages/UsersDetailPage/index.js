import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { usersList } from 'components/Content/components/Users';

const UsersDetailPages = () => {
    const { id } = useParams();
    const [user, setUser] = useState({})

    console.log(usersList)

  useEffect(() => {
   const newUser = usersList.find(user => user.id == id);
    setUser(newUser)
       
      
  }, [id])

    return (
        <div>detaile users {id} {user.name} | {user.age}</div>
    )
}

export default UsersDetailPages;