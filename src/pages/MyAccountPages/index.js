import React from 'react';
import { Outlet,Link } from 'react-router-dom';


const MayAccountPages = () => {
    return(
        <div>
            <h1>My account</h1>
            <Link to="download">Download</Link>
            <Outlet/>
        </div>
    )
}

export default MayAccountPages;