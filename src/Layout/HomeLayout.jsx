import React from 'react';
import Header from '../Comp/Header';
import Latest from '../Comp/Latest';
import NavBar from '../Comp/NavBar';

const HomeLayout = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <Header></Header>
            <Latest></Latest>
            <NavBar></NavBar>
            <div className='grid grid-cols-12'>
                <aside className='col-span-3'>left</aside>
                <section className='col-span-6'>center</section>
                <aside className='col-span-3'>right</aside>
            </div>
        </div>
    );
};

export default HomeLayout;