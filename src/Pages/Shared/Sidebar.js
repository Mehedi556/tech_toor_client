import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Sidebar = () => {

    const {googleLogin} = useContext(AuthContext);
    const [options , setOptions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setOptions(data))
    } , [])

    const googleProvider = new GoogleAuthProvider();

    const handleGoogle = () => {
        googleLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        }).catch(error => console.error(error))
    }

    return (
        <div className=''>
            <h2 className='text-center font-bold text-2xl mt-9'>All Courses</h2>
            {
                options.map(option => <div className=' text-center'>
                    <Link to={`/category/${option.id}`}><button  key={option.id} className="btn btn-wide my-2">{option.name}</button></Link>

                    
                </div>)
            }

            <div className='gap-2 mt-12'>

                <button onClick={handleGoogle} className='btn btn-outline mx-auto block text-xl mb-2'>Signin  by Google</button>

                <button className='btn btn-outline mx-auto block text-xl'>Signin  by Github</button>
                
                <button></button>
            </div>

        {/* <div className="btn-group btn-group-vertical mx-auto mt-11 gap-2 ">
        <button className="btn btn-wide center">Button</button>
       
        <button className="btn btn-wide center">Button</button>
        </div> */}
        </div>
    );
};

export default Sidebar;