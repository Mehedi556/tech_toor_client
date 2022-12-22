import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Register = () => {

  const {makingUser , updateUser} = useContext(AuthContext)

  const navigate = useNavigate();

  const [error , setError] = useState('');

const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const name  = form.name.value;
  const photoURL  = form.photoURL.value;
  const email  = form.email.value;
  const password  = form.password.value;
  console.log(name , photoURL , email , password);


  makingUser(email , password)
  .then(result => {
    const user = result.user;
    console.log(user);
    form.reset();
    handleUpdateUser(name , photoURL);
    navigate('/')
    setError('');
}).catch(error => {
  console.error(error)
  setError(error.message)
})
}

const handleUpdateUser = (name , photoURL) => {
  const profile = {
    displayName: name,
    photoURL: photoURL
  }
  updateUser(profile)
  .then(() => { })
  .catch(error => console.error(error));
}


    return (
      <div className='mx-auto mb-32'>
        <form onSubmit={handleSubmit} className='mx-auto '>
        <div className=" mt-24 p-5 rounded-xl w-full bg-base-200">
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
      <input type="text" name="name" placeholder="Name" className="input input-bordered" required/>
    </div>


    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo URL</span>
      </label>
      <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered" />
    </div>


    <div className="form-control">
      <label className="label">
        <span className="label-text">Your email</span>
      </label>
      <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
    </div>



    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
      <label className="label">
        <Link to="/login"><a style={{color:"blue"}} href="#" className="label-text-alt link link-hover">have an Account?</a></Link>
      </label>
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">{error}</a>
      </label>
    </div>




    <div className="form-control mt-6">
      <button className="btn btn-primary">Register</button>
    </div>
  </div>
</div>
</div>
</div>
    </form>
      </div>
        
    );
};

export default Register;