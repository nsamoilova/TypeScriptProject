import React from 'react';
import { Link } from 'react-router-dom';
import Albums from '../../components/Content/components/Albums';


const KursyPages = () => {
    return(
        <div>
            <Link to="/kursy-programmirovaniya">Курсы</Link>
            <Albums />
        </div>
    )
}

export default KursyPages;