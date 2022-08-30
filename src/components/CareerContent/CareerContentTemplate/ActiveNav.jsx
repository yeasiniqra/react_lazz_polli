import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveNav = () => {
    return (
        <div>
            <nav>
                <NavLink
                    to="/career"
                    className={({ isActive }) => (isActive ? "link-active" : "link")}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => (isActive ? "link-active" : "link")}
                >
                    About
                </NavLink>
                <NavLink
                    to="/career"
                    className={({ isActive }) => (isActive ? "link-active" : "link")}
                >
                    Contact
                </NavLink>
            </nav>
        </div>
    );
};

export default ActiveNav;