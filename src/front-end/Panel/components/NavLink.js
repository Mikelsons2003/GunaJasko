import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

const NavLink = ({ name, path, icon, isExpanded  }) => {
    return (
        <RouterLink
            to={path}
            className={({ isActive }) =>
                `flex items-center px-4 py-3 text-gold font-bold hover:bg-[#7A4D8F] ${
                    isActive ? 'bg-[#3F1E47] font-bold border-b-2 border-gold' : ''
                }`
            }
        >
            <span className="mr-3">{icon}</span>
            {isExpanded && <span>{name}</span>}
        </RouterLink>
    );
};

export default NavLink;
