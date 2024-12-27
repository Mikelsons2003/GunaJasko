import React from 'react';
import NavLink from './NavLink';
import { MdDashboard, MdOutlineStarPurple500 } from "react-icons/md";
import { BsFillHousesFill } from "react-icons/bs";
import { SiHomeassistant } from "react-icons/si";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

const Sidebar = ({ isExpanded, toggleSidebar }) => {
    return (
        <aside
            className={`fixed top-0 left-0 h-screen shadow-md flex flex-col bg-[#5B3767] z-50 ${
                isExpanded ? 'w-64' : 'w-20'
            } transition-all duration-500 ease-in-out`}
        >
            {/* Panel Title */}
            <div
                className={`p-6 bg-primary text-gold font-bold text-center uppercase flex items-center ${
                    isExpanded ? 'justify-between' : 'justify-center'
                }`}
            >
                {isExpanded && (
                    <h1 className="text-xl flex items-center gap-2">
                        Guna Panel
                        <SiHomeassistant />
                    </h1>
                )}
                <button
                    onClick={toggleSidebar}
                    className="text-gold text-2xl hover:text-[#B18E58] active:text-[#9A7A4C] focus:outline-none"
                >
                    {isExpanded ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
                </button>
            </div>

            {/* Navigation */}
            <nav className={`mt-4 flex-1 ${isExpanded ? 'px-4' : 'px-2'}`}>
                <NavLink
                    name="Dashboard"
                    path="/dashboard"
                    icon={<MdDashboard className="text-2xl" />}
                    isExpanded={isExpanded}
                />
                <NavLink
                    name="Properties"
                    path="/properties"
                    icon={<BsFillHousesFill className="text-2xl" />}
                    isExpanded={isExpanded}
                />
                <NavLink
                    name="Reviews"
                    path="/reviews"
                    icon={<MdOutlineStarPurple500 className="text-2xl" />}
                    isExpanded={isExpanded}
                />
            </nav>
        </aside>
    );
};

export default Sidebar;
