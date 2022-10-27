import React from 'react';
import { Link } from 'react-router-dom';
import part from '../../Assets/part.jpg';
import { FaBeer , FaUserAlt } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { signOut } from 'firebase/auth';


const Header = () => {

  const {user , logOut} = useContext(AuthContext);

const handleLogOut = () => {
  logOut()
  .then(() => {})
  .catch(error => console.error(error))
}



    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/">COURSES</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/blog">BLOG</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </div>
    <img style={{width: '40px'}} src={part} alt="" />
    <a className="btn btn-ghost normal-case text-xl">Tech Toor</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
        <li><Link to="/">COURSES</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/blog">BLOG</Link></li>
        {/* <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li> */}
    </ul>
  </div>
  <div className="navbar-end">
    <div>
         <div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text font-bold pr-2">Dark/Light</span> 
    <input type="checkbox" className="toggle" />
  </label>
</div>
    </div>
    <div className='flex pl-5'>
      
        
         
          {user?.photoURL ? 
          <img className='rounded-xl' style={{height:'25px'}} src={user.photoURL}/>
        :
        <FaUserAlt className='inline'></FaUserAlt>
        }
          
          {
            user?.uid ?
            <button className='ml-2 btn btn-xs btn-outline' onClick={handleLogOut}>Sign Out</button>
            :

             <div className='hidden lg:block ml-2'>
            <Link to="/login"><button className='btn btn-xs btn-outline'>Login</button></Link>
        <Link to="/register"><button className='btn btn-xs btn-outline'>Register</button></Link>
          </div>
          }
          
          
         
          
        

        
        

    </div>
 
  </div>
</div>
    );
};

export default Header;