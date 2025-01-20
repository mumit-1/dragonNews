import React from 'react';
import Header from '../Comp/Header';
import Latest from '../Comp/Latest';
import NavBar from '../Comp/NavBar';
import LeftSide from '../Comp/LeftSide';
import MiddleSide from '../Comp/MiddleSide';
import RightSide from '../Comp/RightSide';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <Header></Header>
            <Latest className="relative"></Latest>
            <NavBar></NavBar>
            <div className='lg:grid md:grid grid-cols-12 gap-5'>
                <aside className='col-span-3 relative'><LeftSide></LeftSide></aside>
                <section className='col-span-6'>
                <p>Middle side</p>
                    <Outlet></Outlet>
                    </section>
                <aside className='col-span-3 relative'><RightSide></RightSide></aside>
            </div>
        </div>
    );
};

export default HomeLayout;