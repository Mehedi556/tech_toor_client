import React from 'react';

const Register = () => {
    return (
        <div className='mx-auto'>
        <div className="hero mt-24 p-5 rounded-xl w-full bg-base-200">
<div className="hero-content flex-col lg:flex-row-reverse">
<div className="text-center lg:text-left">
  <h1 className="text-5xl font-bold">Register Now!</h1>
  <h1 className="text-3xl font-bold">Welcome to TechToor</h1>

  <p className="py-6">We are waiting for you!!</p>
</div>
<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <div className="card-body">


    <div className="form-control">
      <label className="label">
        <span className="label-text">Your name</span>
      </label>
      <input type="text" ty placeholder="Name" className="input input-bordered" />
    </div>


    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo URL</span>
      </label>
      <input type="text" placeholder="Photo URL" className="input input-bordered" />
    </div>


    <div className="form-control">
      <label className="label">
        <span className="label-text">Your email</span>
      </label>
      <input type="email" placeholder="email" className="input input-bordered" />
    </div>



    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" placeholder="password" className="input input-bordered" />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>



    <div className="form-control mt-6">
      <button className="btn btn-primary">Login</button>
    </div>
  </div>
</div>
</div>
</div>
    </div>
    );
};

export default Register;