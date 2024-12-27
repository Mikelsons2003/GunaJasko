import React, { useState } from 'react';
import PopupMessage from './PopupMessage';
import SazinasForma from '../../img/SazinasForma.png';

export default function ContactForm() {
    const [isPopupVisible, setPopupVisible] = useState(false);

    // Function to open popup
    const handleSubmit = (e) => {
        e.preventDefault();
        setPopupVisible(true);
    };

    // Function to close popup
    const closePopup = () => {
        setPopupVisible(false);
    };

    return (
        <section className="w-full py-16 relative mt-16 min-h-screen">
            {/* Background Image */}
            <div className="flex justify-center items-center w-full h-[711px] absolute">
                <div
                    className="w-[1440px] h-[711px]"
                    style={{
                        backgroundImage: `url(${SazinasForma})`,
                        backgroundSize: 'contain', // Ensures the full image is visible without cropping
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                    }}
                ></div>
            </div>

            {/* Form Container */}
            <div className="relative z-10 w-full lg:w-8/12 xl:w-5/12 mx-auto bg-[#E8E1D3] p-6 sm:p-10 shadow-lg -mt-16 mr-0 lg:mr-80">
                <h2 className="text-[#6C256B] text-4xl font-bold mb-8 text-center xs:text-left">SAZIŅAS FORMA</h2>

                {/* Form */}
                <form onSubmit={handleSubmit} className="grid gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                                Vārds
                            </label>
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                id="lastName"
                                className="peer text-[#9C9150] w-full p-4 pt-5 placeholder-transparent border border-[#E8E1D3] focus:outline-none hover:border-[#CDC697]"
                                placeholder="Uzvārds"
                            />
                            <label
                                htmlFor="lastName"
                                className="absolute left-4 top-2 text-[#9C9150] text-sm transition-all duration-300
                                       peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#9C9150]
                                       peer-placeholder-shown:top-4 peer-placeholder-shown:text-[#9C9150]"
                            >
                                Uzvārds
                            </label>
                        </div>
                    </div>

                    {/* E-pasts (Email) & Tālrunis (Phone Number) */}
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

                    {/* Darījuma veids (Transaction Type), Reģions (Region), Īpašuma tips (Property Type) */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div>
                            <select
                                className="w-full p-4 text-[#9C9150] placeholder-[#9C9150] border border-[#E8E1D3] focus:outline-none hover:border-[#CDC697] focus:border-[#CDC697] focus:ring-0"
                            >
                                <option>Darījuma veids</option>
                                <option>Pirkšana</option>
                                <option>Pārdošana</option>
                            </select>
                        </div>
                        <div>
                            <select
                                className="w-full p-4 text-[#9C9150] placeholder-[#9C9150] border border-[#E8E1D3] focus:outline-none hover:border-[#CDC697] focus:border-[#CDC697] focus:ring-0"
                            >
                                <option>Reģions</option>
                                <option>Rīga</option>
                                <option>Latgale</option>
                            </select>
                        </div>
                        <div>
                            <select
                                className="w-full p-4 text-[#9C9150] placeholder-[#9C9150] border border-[#E8E1D3] focus:outline-none hover:border-[#CDC697] focus:border-[#CDC697] focus:ring-0"
                            >
                                <option>Īpašuma tips</option>
                                <option>Dzīvoklis</option>
                                <option>Māja</option>
                            </select>
                        </div>
                    </div>

                    {/* Komentārs (Comments) */}
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
                            Komentārs
                        </label>
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="agree"
                            className="mr-2 w-4 h-4 border-[#6C256B] checked:bg-[#6C256B] focus:ring-0"
                            required
                        />
                        <label htmlFor="agree" className="text-sm text-[#5B3767]">
                            Piekrītu personas datu apstrādes noteikumiem.
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center mt-6">
                        <button
                            type="submit"
                            className="w-full sm:w-[238px] h-[55px] bg-[#5B3767] text-[#CDC697] font-medium text-sm hover:bg-opacity-90"
                        >
                            SŪTĪT
                        </button>
                    </div>
                </form>
            </div>

            {/* Popup Component */}
            {isPopupVisible && (
                <PopupMessage
                    message="Jūsu ziņa nosūtīta. Tuvākajā laikā sazināšos ar Jums!"
                    onClose={closePopup}
                />
            )}
        </section>
    );
}
