import React, {useState} from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import PopupMessage from "./PopupMessage"; // Import PopupMessage
import Kontaktu from "../../img/Kontaktu.png";
import GunaKontakti from "../../img/GunaKontakti.png";
import {useTranslation} from "react-i18next";
import LazyBackground from "./LazyBackground";

const Kontakti = () => {
    const {t} = useTranslation();
    const [popupVisible, setPopupVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // EmailJS service details
        const serviceID = "service_gf8xwer";
        const templateID = "template_onzyibk";
        const userID = "Q5J8Ls42L1V80K3EW";

        // Send email using EmailJS
        emailjs.send(serviceID, templateID, formData, userID)
            .then(() => {
                setPopupVisible(true);
                setFormData({name: "", email: "", phone: "", message: ""}); // Reset form
            })
            .catch((error) => {
                console.error("Error sending email:", error);
            });
    };

    return (
        <LazyBackground
            image={Kontaktu}
            className="text-white min-h-[87vh] relative"
            style={{backgroundSize: "contain"}}
        >
            <div className="flex justify-center items-center min-h-[87vh] px-4 md:px-8 lg:px-0 pt-20 md:pt-28 pb-4">
                <div
                    className="w-full max-w-[1267px] bg-[#CDC697] flex flex-col lg:flex-row justify-between items-center py-12 px-6 lg:py-16 lg:px-8">
                    {/* Left Column: Form */}
                    <div className="w-full lg:w-1/2 lg:pr-8">
                        <h2 className="text-2xl lg:text-3xl text-[#5B3767] text-left mb-6">
                            {t("kontakti.h1Kontakti")}
                        </h2>
                        <form className="font-barlow400 space-y-4" onSubmit={handleFormSubmit}>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="peer text-[#9C9150] w-full p-4 pt-5 placeholder-transparent border border-[#E8E1D3] focus:outline-none hover:border-[#CDC697]"
                                    placeholder="Vārds"
                                />
                                <label className="absolute left-4 top-2 text-[#9C9150] text-sm transition-all duration-300
                                       peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#9C9150]
                                       peer-placeholder-shown:top-4 peer-placeholder-shown:text-[#9C9150]">
                                    {t("kontakti.placeholderKontakti")}
                                </label>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="peer text-[#9C9150] w-full p-4 pt-5 placeholder-transparent border border-[#E8E1D3] focus:outline-none hover:border-[#CDC697]"
                                        placeholder="E-pasts"
                                    />
                                    <label className="absolute left-4 top-2 text-[#9C9150] text-sm transition-all duration-300
                                       peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#9C9150]
                                       peer-placeholder-shown:top-4 peer-placeholder-shown:text-[#9C9150]">
                                        {t("sazina.placeholderSazina3")}
                                    </label>
                                </div>
                                <div className="relative">
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="peer text-[#9C9150] w-full p-4 pt-5 placeholder-transparent border border-[#E8E1D3] focus:outline-none hover:border-[#CDC697]"
                                        placeholder="Tālrunis"
                                    />
                                    <label className="absolute left-4 top-2 text-[#9C9150] text-sm transition-all duration-300
                                       peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#9C9150]
                                       peer-placeholder-shown:top-4 peer-placeholder-shown:text-[#9C9150]">
                                        {t("sazina.placeholderSazina4")}
                                    </label>
                                </div>
                            </div>
                            <div className="relative">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="peer text-[#9C9150] w-full p-4 pt-5 placeholder-transparent border border-[#E8E1D3] focus:outline-none hover:border-[#CDC697]"
                                    placeholder="Komentārs"
                                ></textarea>
                                <label className="absolute left-4 top-2 text-[#9C9150] text-sm transition-all duration-300
                                       peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#9C9150]
                                       peer-placeholder-shown:top-4 peer-placeholder-shown:text-[#9C9150]">
                                    {t("kontakti.placeholderKontakti1")}
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="agree"
                                    className="mr-2 w-4 h-4 border-4 border-[#6C256B] bg-[#FFD700] checked:bg-[#6C256B] focus:ring-0"
                                />
                                <label htmlFor="agree" className="font-barlow400 text-sm text-[#5B3767]">
                                    {t("sazina.pSazina")}
                                </label>
                            </div>
                            <div className="flex justify-center items-center">
                                <button
                                    type="submit"
                                    className="w-full lg:w-[274px] h-[55px] bg-[#CDC697] text-[#5B3767] border border-[#5B3767] hover:text-[#9C9150] hover:border-[#9C9150] transition duration-300 ease-in-out py-3 mt-4"
                                >
                                    {t("kontakti.buttonKontakti")}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Column: Image with Text */}
                    <div className="w-full lg:w-1/2 flex flex-col md:flex-row items-center md:items-end mt-12 lg:mt-0">
                        <div className="flex-1 text-left md:text-right pr-0 lg:pr-8 text-[#5B3767] mr-6">
                            <h3 className="font-garamond500 text-xl lg:text-2xl">Guna Jasko</h3>
                            <p className="font-barlow500 mt-2">{t("kontakti.pKontakti1")}</p>
                            <p className="font-barlow500 mt-2">{t("kontakti.pKontakti2")} 20 016 688</p>
                            <p className="font-barlow500 mt-2">{t("kontakti.pKontakti3")} guna.jasko@gmail.com</p>
                        </div>
                        <LazyBackground
                            image={GunaKontakti}
                            className="w-full max-w-[314px] h-[400px] lg:h-[472px] mt-6 lg:mt-0 2xl:-mr-16"
                        />
                    </div>
                </div>
            </div>

            {/* Popup Message */}
            {popupVisible && (
                <PopupMessage
                    message="Jūsu ziņa nosūtīta. Tuvākajā laikā sazināšos ar Jums!"
                    onClose={() => setPopupVisible(false)}
                />
            )}
        </LazyBackground>
    );
};

export default Kontakti;
