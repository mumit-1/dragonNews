import React from 'react';
import Header from '../Comp/Header';
import Latest from '../Comp/Latest';
import NavBar from '../Comp/NavBar';
import LeftSide from '../Comp/LeftSide';
import MiddleSide from '../Comp/MiddleSide';
import RightSide from '../Comp/RightSide';

const HomeLayout = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <Header></Header>
            <Latest></Latest>
            <NavBar></NavBar>
            <div className='grid grid-cols-12 gap-5'>
                <aside className='col-span-3'><LeftSide></LeftSide></aside>
                <section className='col-span-6'><MiddleSide></MiddleSide></section>
                <aside className='col-span-3'><RightSide></RightSide></aside>
            </div>
        </div>
    );
};

export default HomeLayout;