import React from 'react';
import user from "../assets/user.png"
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div>
            <div className='flex justify-between mt-6'>
                <div className=''></div>
                <div className='space-x-3'>
                    <Link to="/home">Home</Link>
                    <Link to="/career">Career</Link>
                    <Link to="/about">About</Link>
                </div>
                <div className='flex  justify-center items-center gap-2'>
                    <div><img src={user} alt="" /></div>
                    <div><button className='btn bg-black text-white'>Log in</button></div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;