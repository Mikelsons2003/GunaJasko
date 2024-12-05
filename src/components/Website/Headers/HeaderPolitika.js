import React from "react";
import { Link } from "react-router-dom";
import PrivatumaPolitika from '../../../img/PrivatumaPolitika.png';

const Header = () => {
    return (
        <div className="font-sans text-white bg-[#5B3767] h-[761px]">
            {/* Navigation Header */}
            <header className="w-full max-w-screen-xl mx-auto px-8 flex justify-between items-center relative top-4">
                {/* Logo Section */}
                <h1 className="text-6xl text-[#CDC697] font-marcellus tracking-wide p-3">
                    GUNA JASKO
                </h1>

                {/* Navigation Links */}
                <nav className="flex space-x-8 text-white text-sm z-10">
                    <Link to="/" className="hover:text-[#CDC697] transition duration-300 ease-in-out">SĀKUMS</Link>
                    <Link to="/par-mani" className="hover:text-[#CDC697] transition duration-300 ease-in-out">PAR
                        MANI</Link>
                    <Link to="/pakalpojumi"
                          className="hover:text-[#CDC697] transition duration-300 ease-in-out">PAKALPOJUMI</Link>
                    <Link to="/objekti"
                          className="hover:text-[#CDC697] transition duration-300 ease-in-out">OBJEKTI</Link>
                    <Link to="/kontakti"
                          className="hover:text-[#CDC697] transition duration-300 ease-in-out">KONTAKTI</Link>
                    <Link to="/" className="text-[#371243] transition duration-300 ease-in-out">LV</Link>
                </nav>
            </header>

            <div className="w-full max-w-screen-xl mx-auto px-8 mt-6">
                <div className="border-b-[1px] border-[#CDC697]"></div>
            </div>

            {/* Content Section */}
            <div className="w-full max-w-screen-xl mx-auto flex items-center gap-28">
                {/* Left: Text Section */}
                <div className="w-1/2">
                    <h1 className="text-4xl text-[#CDC697]">PRIVĀTUMA POLITIKA</h1>
                </div>

                {/* Right: Image Section */}
                <div
                    className="w-[704px] h-[469px] flex-shrink-0 mt-20"
                    style={{
                        backgroundImage: `url(${PrivatumaPolitika})`,
                        backgroundSize: "cover", // Ensures the image covers the entire box
                        backgroundPosition: "center", // Centers the image in the container
                    }}
                >
                </div>
            </div>
        </div>
    );
};

export default Header;
