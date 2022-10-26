import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center h-full'>
           <div className='mt-[100px]'>
                <h1 className='text-5xl font-bold pb-10'>404 - Not Found!</h1>
                    <Link className='text-2xl underline' to="/">Go Home</Link>
                </div>
      </div>
    );
};

export default Error;