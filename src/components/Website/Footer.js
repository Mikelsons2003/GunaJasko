import React from "react";
import { FaFacebookF, FaTiktok, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import {Link} from "react-router-dom";

function Footer() {
    return (
        <div className="mx-auto font-sans text-white">
            <div className="footer bg-[#5B3767] text-white py-6">
                {/* Top Divider */}
                <div className="w-full max-w-screen-xl mx-auto">
                    <div className="border-b-[1px] border-[#9C9150]"></div>
                </div>

                {/* Footer Content */}
                <div className="flex justify-between items-center mx-auto w-[1200px] mt-4">
                    {/* Left Section */}
                    <div className="text-4xl p-2">
                        GUNA JASKO
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="w-8 h-8 flex items-center justify-center border-2 border-white rounded-md hover:bg-[#6C256B] transition-all"
                        >
                            <FaFacebookF className="text-white"/>
                        </a>
                        <a
                            href="#"
                            className="w-8 h-8 flex items-center justify-center border-2 border-white rounded-md hover:bg-[#6C256B] transition-all"
                        >
                            <FaTiktok className="text-white"/>
                        </a>
                        <a
                            href="#"
                            className="w-8 h-8 flex items-center justify-center border-2 border-white rounded-md hover:bg-[#6C256B] transition-all"
                        >
                            <FaLinkedinIn className="text-white"/>
                        </a>
                        <a
                            href="#"
                            className="w-8 h-8 flex items-center justify-center border-2 border-white rounded-md hover:bg-[#6C256B] transition-all"
                        >
                            <FaInstagram className="text-white"/>
                        </a>
                        <a
                            href="#"
                            className="w-8 h-8 flex items-center justify-center border-2 border-white rounded-md hover:bg-[#6C256B] transition-all"
                        >
                            <FaYoutube className="text-white"/>
                        </a>
                    </div>


                    {/* Right Section */}
                    <div className="text-right text-sm">
                        <Link to="/privatuma-politika" className="hover:underline">
                            PRIVĀTUMA POLITIKA
                        </Link>
                        <br/>
                        <span className="text-xs">Dizaina izstrāde: Edīte Šatkowska</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;