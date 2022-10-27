import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
  const detail = useLoaderData();
  console.log(detail);
  return (
    <div className="mx-auto">
      <div className="w-3/4 glass mx-auto mt-12">
        <figure className='w-4/4'>
          <img className='w-full' src={detail.picture} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{detail.name}</h2>
          <p>{detail.details}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
