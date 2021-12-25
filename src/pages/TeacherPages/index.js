import React from 'react';
import { Link } from 'react-router-dom';
import FormConnected from '../../components/Content/components/FormConnected';


const TeacherPages = () => {
    return(
        <div>
            <Link to="/teacher">teacher</Link>
            <FormConnected/>
        </div>
    )
}

export default TeacherPages;