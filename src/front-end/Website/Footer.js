import React from "react";
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok} from 'react-icons/fa';
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

function Footer() {
    const { t, i18n } = useTranslation();
    return (
        <div className="mx-auto font-sans text-white">
            <div className="footer bg-[#5B3767] text-white py-6">
                {/* Top Divider */}
                <div className="w-full max-w-screen-xl mx-auto">
                    <div className="border-b-[1px] border-[#9C9150]"></div>
                </div>

                {/* Footer Content */}
                <div
                    className="flex flex-col sm:flex-row justify-between items-center mx-auto w-full max-w-screen-xl mt-4 px-6">
                    {/* Left Section */}
                    <div className="font-marcellus text-4xl p-2 text-center sm:text-left">
                        GUNA JASKO
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-4 sm:mt-0 justify-center sm:justify-start">
                        <a
                            href="https://www.facebook.com/profile.php?id=100062951665076&mibextid=wwXIfr&rdid=hCVlgIdTGejCSuBS&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1u4u65Eu5izWGVmZ%2F%3Fmibextid%3DwwXIfr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center border-2 border-white rounded-md hover:bg-[#6C256B] transition-all"
                        >
                            <FaFacebookF className="text-white"/>
                        </a>
                        <a
                            href="https://www.tiktok.com/@guna.realestate.agent?_t=ZN-8sjsw8dCvRO&_r=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center border-2 border-white rounded-md hover:bg-[#6C256B] transition-all"
                        >
                            <FaTiktok className="text-white"/>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/gunajasko/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center border-2 border-white rounded-md hover:bg-[#6C256B] transition-all"
                        >
                            <FaLinkedinIn className="text-white"/>
                        </a>
                        <a
                            href="https://www.instagram.com/gunarealty/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center border-2 border-white rounded-md hover:bg-[#6C256B] transition-all"
                        >
                            <FaInstagram className="text-white"/>
                        </a>
                    </div>

                    {/* Right Section */}
                    <div className="text-right text-sm mt-4 sm:mt-0">
                        <Link to="/privatuma-politika" className={`font-barlow500 hover:underline ${i18n.language === 'ru' ? 'text-ru-p' : ''}`}>
                            {t("footer.h1Footer")}
                        </Link>
                        <br/>
                        <span className="font-barlow400 text-xs">{t("footer.pFooter")}: Edīte Šatkovska</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
