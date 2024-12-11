import React from "react";
import Kontaktu from '../../img/Kontaktu.png';
import GunaKontakti from '../../img/GunaKontakti.png';
import Header from './Header';

const Kontakti = () => {
    return (
        <div className="bg-cover bg-center h-[812px] relative" style={{backgroundImage: `url(${Kontaktu})`}}>
            <Header/>
            {/* Contact Form and Image Layout */}
            <div className="flex justify-center items-center">
                <div className="w-[1267px] h-[611px] flex justify-between items-center bg-[#CDC697] py-16 px-8 mt-44">
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
                    <div className="w-1/2 flex items-end text-[#5B3767] -mr-20 mt-16">
                        {/* Text Section */}
                        <div className="flex-1 text-right pr-8 align-text-bottom">
                            <h3 className="text-2xl font-bold">Guna Jasko</h3>
                            <p className="mt-2">NEKUSTAMO ĪPAŠUMU AGENTS</p>
                            <p className="mt-2">TĀLR.: 20 016 688</p>
                            <p className="mt-2">E-PASTS: jaskoguna@gmail.com</p>
                        </div>

                        {/* Image Section */}
                        <div
                            className="w-[314px] h-[472px]"
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
