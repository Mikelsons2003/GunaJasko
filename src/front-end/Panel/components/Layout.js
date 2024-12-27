import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Assuming Sidebar is in the components folder
import Header from './Header';   // Assuming Header is in the components folder

const Layout = ({ children }) => {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

    // Toggle handler to pass to the Sidebar
    const toggleSidebar = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />

            {/* Main Content */}
            <div
                className={`flex-1 transition-all duration-500 ease-in-out ${
                    isSidebarExpanded ? 'ml-64' : 'ml-20'
                }`}
            >
                <Header />
                <main className="p-6">{children}</main>
            </div>
        </div>
    );
};

export default Layout;

