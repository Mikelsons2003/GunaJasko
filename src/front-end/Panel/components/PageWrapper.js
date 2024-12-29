import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../Website/Header";
import Footer from "../../Website/Footer";

const PageWrapper = ({ hideHeaderAndFooter, children }) => {
    const location = useLocation(); // Get current location

    // If hideHeaderAndFooter is passed as true, don't show Header and Footer
    const showHeaderAndFooter = !hideHeaderAndFooter;

    return (
        <div className="min-h-screen bg-gray-900 text-white relative">
            {showHeaderAndFooter && <Header />}
            <main>{children}</main>
            {showHeaderAndFooter && <Footer />}
        </div>
    );
};

export default PageWrapper;