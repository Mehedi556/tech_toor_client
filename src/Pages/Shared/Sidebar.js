import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [options , setOptions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setOptions(data))
    } , [])
    return (
        <div className=''>
            <h2 className='text-center font-bold text-2xl mt-9'>All Courses</h2>
            {
                options.map(option => <div className='mt-5 text-center'>
                    <Link to={`/category/${option.id}`}><button  key={option.id} className="btn btn-wide my-2">{option.name}</button></Link>
                </div>)
            }

        <div className="btn-group btn-group-vertical">
        <button className="btn btn-lg mx-auto">Button</button>
        <button className="btn">Button</button>
        <button className="btn">Button</button>
        </div>
        </div>
    );
};

export default Sidebar;