import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' text-center py-3' >
            <nav className=' space-x-2 border border-s-yellow-200'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/user/add'>user</NavLink>

            </nav>
        </div>
    );
};

export default Header;