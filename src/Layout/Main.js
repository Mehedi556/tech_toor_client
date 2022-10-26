import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Header from '../Pages/Shared/Header';
import Sidebar from '../Pages/Shared/Sidebar';

const Main = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <Header></Header>

            <div className='grid grid-cols-1 md:grid-cols-3'>
                <Sidebar className="col-span-3 md:col-span-1"></Sidebar>
                <Outlet className="col-span-3 md:col-span-2"></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Main;