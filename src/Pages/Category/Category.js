import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const detail = useLoaderData();
    console.log(detail);
    return (
        <div className=''>
            <h2 className=''>{detail.name}</h2>
        </div>
    );
};

export default Category;