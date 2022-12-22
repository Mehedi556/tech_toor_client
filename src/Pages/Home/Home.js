import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
  const dataDetails = useLoaderData();

  // console.log(dataDetails);
  return (
    <div className='mb-32'>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mx-auto mt-14'>
        {dataDetails.map(data => (
          <div className="shadow-xl rounded-xl">
            <div className="card glass p-2">
              <figure>
                <img className='h-[240px] w-full rounded-xl border' src={data.picture} alt="car!" />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">Language: {data.name}</h2>
                
                <div className="card-actions justify-end">
                {
                    <Link to={`/category/${data.id}`}><button  key={data.id} className="btn btn-outline btn-sm  my-2">Details</button></Link>
                }
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
