import React, { useRef, useState } from "react";
import JaunakieObjekti from "./JaunakieObjekti";
import GunaJasko from '../../img/GunaJasko.png';
import Vannasistaba from '../../img/Vannasistaba.webp';
import Swedbank from '../../img/Swedbank.webp';
import LatvijasNotars from '../../img/LatvijasNotars.webp';
import Altum from '../../img/Altum.webp';
import Luminor from '../../img/Luminor.webp';
import Seb from '../../img/Seb.webp';
import Citadele from '../../img/Citadele.webp';
import Experience from '../../img/Experience.webp';
import Check from '../../img/Check.webp';
import Safety from '../../img/Safety.webp';
import Lanida from '../../img/Lanida.webp';
import AM from '../../img/AM.webp';
import ArrowLeft from '../../img/ArrowLeft.png';
import ArrowRight from '../../img/ArrowRight.png';
import BedroomImage from "../../img/BedroomImage.webp";
import ContactForm from "./ContactForm";
import { useTranslation } from "react-i18next";

function Sakumlapa() {
    const { t } = useTranslation();

    const contactFormRef = useRef(null); // Create a reference for ContactForm
    const [currentIndex, setCurrentIndex] = useState(0); // State for testimonials

    const testimonials = [
        {
            content: t("atsauksmes.pAtsauksmes1"),
            author: "Andrejs Mihailovs",
        },
        {
            content: t("atsauksmes.pAtsauksmes2"),
            author: "Mats Johansson",
        },
        {
            content: t("atsauksmes.pAtsauksmes3"),
            author: "Arvis Galdiņš",
        },
        // Add more testimonials as needed
    ];

    // Logic for switching testimonials
    const handleSwitchContent = (direction) => {
        if (direction === "left") {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
            );
        } else if (direction === "right") {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }
    };

    // Custom scrolling logic
    const scrollToContactForm = () => {
        const targetPosition = contactFormRef.current.getBoundingClientRect().top + window.pageYOffset; // Calculate target position
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000; // Duration in milliseconds
        let startTime = null;

        const animation = (currentTime) => {
            if (!startTime) startTime = currentTime;

            const timeElapsed = currentTime - startTime;
            const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);

            if (timeElapsed < duration) requestAnimationFrame(animation); // Continue the animation
        };

        requestAnimationFrame(animation);
    };

    // Ease-in-out quadratic function
    const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    return (
        <div className="mx-auto text-white">
            <header className="bg-cover bg-center h-[812px] lg:h-[900px] 2xl:h-[970px] relative"
                    style={{backgroundImage: `url(${BedroomImage})`}}>
                {/* Overlay with pointer-events: none */}
                <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none"></div>

                {/* Text Section */}
                <div
                    className="w-full max-w-screen-xl mx-auto absolute top-80 left-1/2 transform -translate-x-1/2 text-white space-y-6 xs:px-8">
                    <h2 className="text-4xl text-center xs:text-left font-garamond500 pl-3">
                        {t("sakumlapa.header")}
                    </h2>
                    <p className="max-w-lg text-center xs:text-left font-barlow400 pl-3">
                        {t("sakumlapa.p")}
                    </p>
                    <div className="text-center xs:text-left">
                        {/* Button that triggers custom smooth scrolll */}
                        <button
                            onClick={scrollToContactForm}
                            className="font-barlow500 w-[272px] h-[55px] sm:w-[317px] sm:h-[55px] bg-[#5B3767] hover:bg-[#371243] transition duration-300 ease-in-out text-[#CDC697] font-medium sm:ml-3"
                        >
                            {t("sakumlapa.button")}
                        </button>
                    </div>
                </div>
            </header>
            {/* about section */}
            <section className="bg-[#5B3767] text-white py-16">
                <div
                    className="w-full max-w-screen-xl mx-auto container px-6 flex flex-col xl:flex-row items-center xl:items-start text-center xl:text-left">
                    {/* Left Side */}
                    <div className="xl:w-1/2">
                        {/* Heading */}
                        <h1 className="font-garamond500 text-[#CDC697] text-4xl mb-12">
                            {t("sakumlapaAbout.headerAbout")}
                        </h1>

                        {/* Information Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
                            {/* Card 1 */}
                            <div
                                className="w-full text-left border border-[#CDC697] p-5 flex flex-col items-center xl:items-start space-y-4">
                                <div
                                    className="w-16 h-16 bg-contain bg-no-repeat bg-left"
                                    style={{backgroundImage: `url(${Experience})`}}
                                ></div>
                                <div className="font-barlow400 text-2xl text-white">{t("sakumlapaAbout.divAbout1")}</div>
                                <p className="font-barlow400 text-sm text-center xl:text-left">{t("sakumlapaAbout.pAbout1")}</p>
                            </div>

                            {/* Card 2 */}
                            <div
                                className="w-full text-left border border-[#CDC697] p-5 flex flex-col items-center xl:items-start space-y-4">
                                <div
                                    className="w-16 h-16 bg-contain bg-no-repeat bg-left"
                                    style={{backgroundImage: `url(${Check})`}}
                                ></div>
                                <div className="text-2xl font-barlow400 text-white">{t("sakumlapaAbout.divAbout2")}</div>
                                <p className="font-barlow400 text-sm text-center xl:text-left">
                                    {t("sakumlapaAbout.pAbout2")}
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div
                                className="w-full text-left border border-[#CDC697] p-5 flex flex-col items-center xl:items-start space-y-4">
                                <div
                                    className="w-16 h-16 bg-contain bg-no-repeat bg-left"
                                    style={{backgroundImage: `url(${Safety})`}}
                                ></div>
                                <div className="text-2xl font-barlow400 text-white">{t("sakumlapaAbout.divAbout3")}</div>
                                <p className="font-barlow400 text-sm text-center xl:text-left">{t("sakumlapaAbout.pAbout3")}</p>
                            </div>

                            {/* Card 4 */}
                            <div
                                className="w-full text-left border border-[#CDC697] p-5 flex flex-col items-center xl:items-start space-y-4">
                                <div
                                    className="w-[95px] h-[72px] bg-contain bg-no-repeat bg-left"
                                    style={{backgroundImage: `url(${Lanida})`}}
                                ></div>
                                <div className="text-2xl font-barlow400 text-white">{t("sakumlapaAbout.divAbout4")}</div>
                                <a
                                    href="https://lanida.lv/biedri/guna-jasko-2/"
                                    className="font-barlow400 text-sm underline text-center xl:text-left"
                                >
                                    {t("sakumlapaAbout.pAbout4")}
                                </a>
                            </div>
                        </div>

                        {/* Button */}
                        <div className="mt-12">
                            <a href="https://guna.lucid-websites.com/par-mani">
                                <button
                                    className="font-barlow500 w-full xl:w-[317px] h-[55px] border border-[#CDC697] text-[#CDC697] hover:text-[#9C9150] hover:border-[#9C9150] transition duration-300 ease-in-out font-medium text-sm">
                                    {t("sakumlapaAbout.buttonAbout")}
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    <div className="xl:w-1/2 mt-10 xl:-mt-28 xl:ml-12 flex justify-center">
                        <div className="w-full">
                            <div
                                className="bg-cover bg-center w-[300px] h-[500px] md:w-[400px] md:h-[570px] lg:w-[500px] lg:h-[670px] 2xl:w-[558px] 2xl:h-[837px] relative"
                                style={{backgroundImage: `url(${GunaJasko})`}}
                            ></div>
                        </div>
                    </div>
                </div>
            </section>

            <JaunakieObjekti/>

            {/* Atsauksmes Section */}
            <section className="bg-white relative w-full flex items-center justify-center min-h-screen px-2">
                {/* Background Image */}
                <div
                    className="relative flex items-center justify-center w-full lg:w-4/6 h-[500px] sm:h-[645px]"
                    style={{
                        backgroundImage: `url(${Vannasistaba})`,
                        backgroundSize: 'cover', // Keeps the image covering the container
                        backgroundPosition: 'center', // Centers the image
                    }}
                >
                    {/* Left Arrow */}
                    <button
                        className="absolute left-[2%] sm:left-[2%] 2xl:left-[14%] sm:top-[54%] top-1/2 transform -translate-y-1/2 z-20"
                        onClick={() => handleSwitchContent("left")}
                    >
                        <img src={ArrowRight} alt="Left Arrow" className="w-[24px] h-[24px]"/>
                    </button>

                    <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
                        {/* Heading */}
                        <h2 className="font-garamond500 text-[#CDC697] text-2xl sm:text-4xl sm:mb-12 text-center">
                            {t("atsauksmes.h1Atsauksmes")}
                        </h2>

                        {/* Testimonial Box */}
                        <div
                            className="relative bg-white w-full max-w-[320px] sm:max-w-[782px] h-auto opacity-90 p-6 sm:p-12 flex flex-col items-center"
                        >
                            {/* Centered Image */}
                            <div
                                className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] object-cover flex items-center justify-center -mt-4 mb-6"
                                style={{
                                    backgroundImage: `url(${AM})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            ></div>

                            {/* Testimonial Content */}
                            <p className="font-barlow400 text-[#5B3767] text-base sm:text-lg mb-4 leading-relaxed text-center">
                                {testimonials[currentIndex].content}
                            </p>
                            <p className="font-barlow400 text-[#9C9150] mt-4 text-center text-sm sm:text-base">
                                {testimonials[currentIndex].author}
                            </p>
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        className="absolute right-[2%] sm:right-[2%] 2xl:right-[14%] sm:top-[54%] top-1/2 transform -translate-y-1/2 z-20"
                        onClick={() => handleSwitchContent("right")}
                    >
                        <img src={ArrowLeft} alt="Right Arrow" className="w-[24px] h-[24px]"/>
                    </button>
                </div>
            </section>

            {/* Sadarbības Partneri Section */}
            <section className="mx-auto bg-white">
                <div className="mx-auto px-4 sm:px-8 text-center">
                    <h1 className="font-garamond500 text-[#6C256B] text-4xl mb-12 sm:mb-24">{t("partneri.h1Partneri")}</h1>

                    {/* Partners Logos */}
                    <div
                        className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 lg:mx-32 place-items-center">
                        {/* Partner 1 */}
                        <div className="w-[216px] h-[48px] bg-cover my-4"
                             style={{backgroundImage: `url(${Swedbank})`}}></div>
                        {/* Partner 2 */}
                        <div className="w-[107px] h-[160px] bg-cover my-4"
                             style={{backgroundImage: `url(${LatvijasNotars})`}}></div>
                        {/* Partner 3 */}
                        <div className="w-[152px] h-[80px] bg-cover my-4"
                             style={{backgroundImage: `url(${Altum})`}}></div>
                        {/* Partner 4 */}
                        <div className="w-[165px] h-[60px] bg-cover my-4"
                             style={{backgroundImage: `url(${Luminor})`}}></div>
                        {/* Partner 5 */}
                        <div className="w-[136px] h-[60px] bg-cover my-4"
                             style={{backgroundImage: `url(${Seb})`}}></div>
                        {/* Partner 6 */}
                        <div className="w-[158px] h-[88px] bg-cover my-4"
                             style={{backgroundImage: `url(${Citadele})`}}></div>
                    </div>

                    <div className="w-full max-w-screen-xl mx-auto mt-16">
                        <div className="border-b-[1px] border-[#CDC697]"></div>
                    </div>
                </div>
            </section>
            <div ref={contactFormRef}>
                <ContactForm/>
            </div>
        </div>
    );
}

export default Sakumlapa;