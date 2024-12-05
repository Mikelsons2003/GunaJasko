import React from "react";
import { Link } from "react-router-dom";
import Kontaktu from '../../img/Kontaktu.png';
import GunaKontakti from '../../img/GunaKontakti.png';

const Kontakti = () => {
    return (
        <div
            className="font-sans text-white h-[855px] w-full"
            style={{
                backgroundImage: `url(${Kontaktu})`,
                backgroundSize: "cover", // Ensures the image covers the entire box
                backgroundPosition: "center", // Centers the image in the container
                backgroundRepeat: "no-repeat", // Prevents tiling of the background image
            }}
        >
            {/* Navigation Header */}
            <header className="w-full max-w-screen-xl mx-auto px-8 flex justify-between items-center relative top-4">
                {/* Logo Section */}
                <h1 className="text-6xl text-[#CDC697] font-marcellus tracking-wide p-3">
                    GUNA JASKO
                </h1>

                {/* Navigation Links */}
                <nav className="flex space-x-8 text-white text-sm z-10">
                    <Link to="/" className="hover:text-[#CDC697] transition duration-300 ease-in-out">SĀKUMS</Link>
                    <Link to="/par-mani" className="hover:text-[#CDC697] transition duration-300 ease-in-out">PAR MANI</Link>
                    <Link to="/pakalpojumi" className="hover:text-[#CDC697] transition duration-300 ease-in-out">PAKALPOJUMI</Link>
                    <Link to="/objekti" className="hover:text-[#CDC697] transition duration-300 ease-in-out">OBJEKTI</Link>
                    <Link to="/kontakti" className="hover:text-[#CDC697] transition duration-300 ease-in-out">KONTAKTI</Link>
                    <Link to="/" className="text-[#371243] transition duration-300 ease-in-out">LV</Link>
                </nav>
            </header>

            {/* Divider */}
            <div className="w-full max-w-screen-xl mx-auto px-8 mt-6">
                <div className="border-b-[1px] border-[#CDC697]"></div>
            </div>

            {/* Contact Form and Image Layout */}
            <div className="flex justify-center items-center">
                <div className="w-[1267px] h-[611px] flex justify-between items-center bg-[#CDC697] py-16 px-8 mt-16">
                    {/* Left Column: Form */}
                    <div className="w-1/2 pr-8">
                        <h2 className="text-3xl font-bold text-[#5B3767] text-left mb-6">SAZIŅAS FORMA</h2>
                        <form className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Vārds, Uzvārds"
                                    className="w-full p-5 placeholder-[#9C9150] border border-[#E8E1D3] focus:outline-none hover:border-[#CDC697] focus:border-[#CDC697] focus:ring-0"
                                />
                            </div>
                            <div className="flex space-x-4">
                                <input
                                    type="email"
                                    placeholder="E-pasts"
                                    className="w-full p-5 placeholder-[#9C9150] border border-[#E8E1D3] focus:outline-none hover:border-[#CDC697] focus:border-[#CDC697] focus:ring-0"
                                />
                                <input
                                    type="tel"
                                    placeholder="Tālrunis"
                                    className="w-full p-5 placeholder-[#9C9150] border border-[#E8E1D3] focus:outline-none hover:border-[#CDC697] focus:border-[#CDC697] focus:ring-0"
                                />
                            </div>
                            <textarea
                                placeholder="Ziņas teksts"
                                rows="4"
                                className="w-full p-5 placeholder-[#9C9150] border-none"
                            ></textarea>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="agree"
                                    className="mr-2 w-4 h-4 border-4 border-[#6C256B] bg-[#FFD700] checked:bg-[#6C256B] focus:ring-0"
                                />
                                <label htmlFor="agree" className="text-sm text-[#5B3767]">
                                    Piekrītu personas datu apstrādes noteikumiem.
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="w-[274px] h-[55px] bg-[#CDC697] text-[#5B3767] border border-[#5B3767] py-3 mt-12"
                            >
                                SAZINĀTIES
                            </button>
                        </form>
                    </div>

                    {/* Right Column: Image with Text */}
                    <div className="w-1/2 flex items-center justify-between text-[#5B3767]">
                        {/* Image Section */}
                        <div className="text-right mt-80">
                            <h3 className="text-2xl font-bold">Guna Jasko</h3>
                            <p className="mt-2">NEKUSTAMO ĪPAŠUMU AGENTS</p>
                            <p className="mt-2">TĀLR.: 20 016 688</p>
                            <p className="mt-2">E-PASTS: jaskoguna@gmail.com</p>
                        </div>
                        <div
                            className="w-[314px] h-[472px] -mr-20 mt-16"
                            style={{
                                backgroundImage: `url(${GunaKontakti})`,
                                backgroundSize: 'cover',  // Ensure the image covers the box
                                backgroundPosition: 'center', // Center the image within the box
                                backgroundRepeat: 'no-repeat' // Prevent repeating the background image
                            }}
                        ></div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Kontakti;
