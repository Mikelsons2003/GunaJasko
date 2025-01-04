import React, {useEffect, useState} from 'react';
import NavLink from './NavLink';
import {MdDashboard} from "react-icons/md";
import {BsFillHousesFill} from "react-icons/bs";
import {SiHomeassistant} from "react-icons/si";
import {AiOutlineMenuFold, AiOutlineMenuUnfold} from "react-icons/ai";

const Sidebar = ({isExpanded, toggleSidebar}) => {
    const [isTextVisible, setIsTextVisible] = useState(false);

    useEffect(() => {
        if (isExpanded) {
            const timer = setTimeout(() => {
                setIsTextVisible(true);
            }, 800); // Wait for the animation to finish (800ms)

            return () => clearTimeout(timer); // Clean up the timer if the component unmounts
        } else {
            setIsTextVisible(false); // Hide text immediately when collapsing
        }
    }, [isExpanded]);

    return (
        <aside
            className={`fixed top-0 left-0 h-screen shadow-md flex flex-col bg-[#5B3767] z-50 
                ${isExpanded ? 'w-64' : 'w-14'} transition-all duration-1000 ease-in-out`}
        >
            {/* Panel Title */}
            <div
                className={`p-4 sm:p-6 bg-primary text-gold font-bold text-center uppercase flex items-center 
                ${isExpanded ? 'justify-between' : 'justify-center'} transition-all delay-500`}
            >
                {isExpanded && isTextVisible && (
                    <h1 className="text-lg sm:text-xl flex items-center gap-2 transition-opacity duration-500 opacity-100">
                        Guna Panel
                        <SiHomeassistant/>
                    </h1>
                )}
                <button
                    onClick={toggleSidebar}
                    className="text-gold text-2xl hover:text-[#B18E58] active:text-[#9A7A4C] focus:outline-none"
                >
                    {isExpanded ? <AiOutlineMenuFold/> : <AiOutlineMenuUnfold/>}
                </button>
            </div>

            {/* Navigation */}
            <nav className={`mt-4 flex-1 ${isExpanded} transition-all delay-300`}>
                <NavLink
                    name={isExpanded && isTextVisible ? "IZVĒLNE" : ""}
                    path="/dashboard"
                    icon={<MdDashboard className="text-2xl"/>}
                    isExpanded={isExpanded}
                    className="w-full" // Added w-full to make it full width
                />
                <NavLink
                    name={isExpanded && isTextVisible ? "ĪPAŠUMI" : ""}
                    path="/properties"
                    icon={<BsFillHousesFill className="text-2xl"/>}
                    isExpanded={isExpanded}
                    className="w-full" // Added w-full to make it full width
                />
            </nav>
        </aside>
    );
};

export default Sidebar;

