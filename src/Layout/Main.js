import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Header from '../Pages/Shared/Header';
import Sidebar from '../Pages/Shared/Sidebar';

const Main = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Header></Header>

            <div className='block md:flex'>
                <Sidebar className="w-4/4 md:w-2/4 lg:w-1/4"></Sidebar>
                <div className="bg-slate-100 divider sm:divider-horizontal"></div>
                <Outlet className="w-4/4 md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Main;