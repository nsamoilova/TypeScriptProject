import React from 'react';
import { Link } from 'react-router-dom';
import Todo from '../../components/Content/components/Todo'


const ContactPages = () => {
    return(
        <div>
            <Link to="/contact">contact</Link>
            <Todo />
        </div>
    )
}

export default ContactPages;