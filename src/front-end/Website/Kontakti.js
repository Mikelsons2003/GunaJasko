import React, { useState } from "react";
import PopupMessage from "./PopupMessage"; // Import the PopupMessage component
import Kontaktu from "../../img/Kontaktu.png";
import GunaKontakti from "../../img/GunaKontakti.png";

const Kontakti = () => {
    const [popupVisible, setPopupVisible] = useState(false); // State to handle popup visibility

    const handleFormSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        setPopupVisible(true); // Show the popup
    };

    const closePopup = () => {
        setPopupVisible(false); // Hide the popup
    };

    return (
        <div
            className="bg-cover bg-center text-white min-h-screen relative"
            style={{ backgroundImage: `url(${Kontaktu})` }}
        >
            {/* Contact Form and Image Layout */}
            <div className="flex justify-center items-center min-h-screen px-4 md:px-8 lg:px-0">
                <div
                    className="w-full max-w-[1267px] bg-[#CDC697] flex flex-col lg:flex-row justify-between items-center py-12 px-6 lg:py-16 lg:px-8 mt-32 mb-10">
                    {/* Left Column: Form */}
                    <div className="w-full lg:w-1/2 lg:pr-8">
                        <h2 className="text-2xl lg:text-3xl font-bold text-[#5B3767] text-left mb-6">
                            SAZIŅAS FORMA
                        </h2>
                        <form className="space-y-4" onSubmit={handleFormSubmit}>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="firstName"
                                    className="peer text-[#9C9150] w-full p-4 pt-5 placeholder-transparent border border-[#E8E1D3] focus:outline-none hover:border-[#CDC697] focus:border-[#CDC697] focus:ring-0"
                                    placeholder="Vārds"
                                />
                                <label
                                    htmlFor="firstName"
                                    className="absolute left-4 top-2 text-[#9C9150] text-sm transition-all duration-300
                                       peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#9C9150]
                                       peer-placeholder-shown:top-4 peer-placeholder-shown:text-[#9C9150]"
                                >
                                    Vārds, Uzvārds
                                </label>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="relative">
                                    <input
                                        type="Email"
                                        id="epasts"
                                        className="peer text-[#9C9150] w-full p-4 pt-5 placeholder-transparent border border-[#E8E1D3] focus:outline-none hover:border-[#CDC697]"
                                        placeholder="E-pasts"
                                    />
                                    <label
                                        htmlFor="epasts"
                                        className="absolute left-4 top-2 text-[#9C9150] text-sm transition-all duration-300
                                       peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#9C9150]
                                       peer-placeholder-shown:top-4 peer-placeholder-shown:text-[#9C9150]"
                                    >
                                        E-pasts
                                    </label>
                                </div>
                                <div className="relative">
                                    <input
                                        type="Tel"
                                        id="Tālrunis"
                                        className="peer text-[#9C9150] w-full p-4 pt-5 placeholder-transparent border border-[#E8E1D3] focus:outline-none hover:border-[#CDC697]"
                                        placeholder="Tālrunis"
                                    />
                                    <label
                                        htmlFor="Tālrunis"
                                        className="absolute left-4 top-2 text-[#9C9150] text-sm transition-all duration-300
                                       peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#9C9150]
                                       peer-placeholder-shown:top-4 peer-placeholder-shown:text-[#9C9150]"
                                    >
                                        Tālrunis
                                    </label>
                                </div>
                            </div>
                            <div className="relative">
                            <textarea
                                id="comment"
                                rows="4"
                                className="peer text-[#9C9150] w-full p-4 pt-5 placeholder-transparent border border-[#E8E1D3] focus:outline-none hover:border-[#CDC697] focus:border-[#CDC697] focus:ring-0"
                                placeholder="Komentārs"
                            ></textarea>
                                <label
                                    htmlFor="comment"
                                    className="absolute left-4 top-2 text-[#9C9150] text-sm transition-all duration-300
                                       peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#9C9150]
                                       peer-placeholder-shown:top-4 peer-placeholder-shown:text-[#9C9150]"
                                >
                                    Ziņas Teksts
                                </label>
                            </div>
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
                                className="w-full lg:w-[274px] h-[55px] bg-[#CDC697] text-[#5B3767] border border-[#5B3767] hover:text-[#9C9150] hover:border-[#9C9150] transition duration-300 ease-in-out py-3 mt-6 lg:mt-12"
                            >
                                SAZINĀTIES
                            </button>
                        </form>
                    </div>

                    {/* Right Column: Image with Text */}
                    <div className="w-full lg:w-1/2 flex flex-col lg:flex-row items-center lg:items-end mt-12 lg:mt-0">
                        {/* Text Section */}
                        <div className="flex-1 text-left lg:text-right pr-0 lg:pr-8 text-[#5B3767]">
                            <h3 className="text-xl lg:text-2xl font-bold">Guna Jasko</h3>
                            <p className="mt-2 font-bold">NEKUSTAMO ĪPAŠUMU AGENTS</p>
                            <p className="mt-2 font-bold">TĀLR.: 20 016 688</p>
                            <p className="mt-2 font-bold">E-PASTS: jaskoguna@gmail.com</p>
                        </div>

                        {/* Image Section */}
                        <div
                            className="w-full max-w-[314px] h-[400px] lg:h-[472px] mt-6 lg:mt-0 2xl:-mr-16"
                            style={{
                                backgroundImage: `url(${GunaKontakti})`,
                                backgroundSize: "cover", // Ensure the image covers the box
                                backgroundPosition: "center", // Center the image within the box
                                backgroundRepeat: "no-repeat", // Prevent repeating the background image
                            }}
                        ></div>
                    </div>
                </div>
            </div>

            {/* Popup Message */}
            {popupVisible && (
                <PopupMessage
                    message="Jūsu ziņa nosūtīta. Tuvākajā laikā sazināšos ar Jums!"
                    onClose={closePopup}
                />
            )}
        </div>
    );
};

export default Kontakti;
