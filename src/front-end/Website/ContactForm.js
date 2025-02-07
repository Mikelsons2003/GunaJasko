import React, { useState } from 'react';
import PopupMessage from './PopupMessage';
import SazinasForma from '../../img/SazinasForma.jpg';
import { useTranslation } from "react-i18next";
import LazyBackground from "./LazyBackground";

export default function ContactForm() {
    const { t } = useTranslation();
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
        <section className="bg-white w-full py-16 relative mt-16 min-h-screen">
            {/* Background Image */}
            <div
                className="flex justify-center items-center w-full h-[711px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <LazyBackground
                    image={SazinasForma}
                    className="w-full h-[711px]"
                ></LazyBackground>
            </div>

            {/* Form Container */}
            <div
                className="relative z-10 w-full lg:w-8/12 xl:w-7/12 2xl:w-5/12 mx-auto bg-[#E8E1D3] p-6 sm:p-10 shadow-lg -mt-16 mr-0 lg:mr-24 2xl:mr-96">
                <h2 className="uppercase font-garamond500 text-[#6C256B] text-4xl mb-8 text-center xs:text-left">{t("sazina.h1Sazina")}</h2>

                {/* Form */}
                <form onSubmit={handleSubmit} className="grid gap-6">
                    <div className="font-barlow400 grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                                {t("sazina.placeholderSazina1")}
                            </label>
                        </div>
                        <div className="relative font-barlow400">
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
                                {t("sazina.placeholderSazina2")}
                            </label>
                        </div>
                    </div>

                    {/* E-pasts (Email) & Tālrunis (Phone Number) */}
                    <div className="font-barlow400 grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                                {t("sazina.placeholderSazina3")}
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
                                {t("sazina.placeholderSazina4")}
                            </label>
                        </div>
                    </div>

                    {/* Darījuma veids (Transaction Type), Reģions (Region), Īpašuma tips (Property Type) */}
                    <div className="font-barlow400 grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div>
                            <select
                                className="font-barlow400 w-full p-4 text-[#9C9150] placeholder-[#9C9150] border border-[#E8E1D3] focus:outline-none hover:border-[#CDC697] focus:border-[#CDC697] focus:ring-0 bg-white"
                            >
                                <option>{t("sazina.optionSazina1")}</option>
                                <option value="pirkšana">{t("sazina.optionSazina2")}</option>
                                <option value="pārdošana">{t("sazina.optionSazina3")}</option>
                            </select>
                        </div>
                        <div>
                            <select
                                className="font-barlow400 w-full p-4 text-[#9C9150] placeholder-[#9C9150] border border-[#E8E1D3] focus:outline-none hover:border-[#CDC697] focus:border-[#CDC697] focus:ring-0 bg-white"
                            >
                                <option>{t("sazina.optionSazina4")}</option>
                                <option>{t("sazina.optionSazina5")}</option>
                                <option>{t("sazina.optionSazina6")}</option>
                            </select>
                        </div>
                        <div>
                            <select
                                className="font-barlow400 w-full p-4 text-[#9C9150] placeholder-[#9C9150] border border-[#E8E1D3] focus:outline-none hover:border-[#CDC697] focus:border-[#CDC697] focus:ring-0 bg-white"
                            >
                                <option>{t("sazina.optionSazina7")}</option>
                                <option>{t("sazina.optionSazina8")}</option>
                                <option>{t("sazina.optionSazina9")}</option>
                            </select>
                        </div>
                    </div>

                    {/* Komentārs (Comments) */}
                    <div className="font-barlow400 relative">
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
                            {t("sazina.placeholderSazina5")}
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
                        <label htmlFor="agree" className="font-barlow400 text-sm text-[#5B3767]">
                            {t("sazina.pSazina")}
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center mt-6">
                        <button
                            type="submit"
                            className="font-barlow500 w-full sm:w-[238px] h-[55px] bg-[#5B3767] text-[#CDC697] text-sm hover:bg-[#371243] transition duration-300 ease-in-out"
                        >
                            {t("sazina.buttonSazina")}
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
