import React, { useContext } from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {


  const {signInUser} = useContext(AuthContext)

  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const [error , setError] = useState('');

  
  const handleSubmit =(event) => {
    event.preventDefault();
  const form = event.target;
  const email  = form.email.value;
  const password  = form.password.value;
  signInUser(email , password)
  .then(result => {
    const user = result.user;
    console.log(user);
    form.reset();
    setError('');
    navigate(from, {replace: true});
}).catch(error => {
  console.error(error)
  setError(error.message);
})
  }

    return (
        <form onSubmit={handleSubmit} className='mx-auto'>
            <div className="hero mt-24 p-5 rounded-xl w-full bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <h1 className="text-3xl font-bold">Welcome to TechToor</h1>

      <p className="py-6">We are waiting for you!!</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name="email" placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name="password" placeholder="password" className="input input-bordered" required/>
          <label className="label">
            <Link to="/register"><a style={{color:"blue"}} href="#" className="label-text-alt link link-hover">Want to Sign in?</a></Link>
          </label>
          <label className="label">
            <a style={{color:"red"}} href="#" className="label-text-alt link link-hover">{error}</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </form>
    );
};

export default Login;