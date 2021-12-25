import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import Counter from '../../components/Content/components/Counter';
import Input from '../../components/Form/Input';


const BlogPages = () => {

    return(
        <div>
            <h1>Blog</h1>
            <Link to="/blog"></Link>
            {/* <Counter>0</Counter> */}
            <Input value='123'/>
        </div>
    )
}

export default BlogPages;