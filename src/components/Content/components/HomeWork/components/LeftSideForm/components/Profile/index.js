import React, { useContext } from 'react';
import Input from 'components/Form/Input';
import { ValueContext } from '../../../../index';

const Profile = () => {
     const { value, onChangeValue} = useContext(ValueContext)
    

     return (
         <div>
             <Input value={value} onChange={onChangeValue}/>
         </div>
     )
}

export default Profile;