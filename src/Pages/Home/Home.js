import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
  const dataDetails = useLoaderData();

  // console.log(dataDetails);
  return (
    <div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto mt-14'>
        {dataDetails.map(data => (
          <div className="">
            <div className="card glass">
              <figure>
                <img src={data.picture} alt="car!" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data.name}</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                  <Link to=''><button className="btn btn-primary">Learn now!</button></Link>
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
