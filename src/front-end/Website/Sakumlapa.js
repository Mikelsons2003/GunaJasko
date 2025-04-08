import React, { useRef, useState } from "react";
import JaunakieObjekti from "./JaunakieObjekti";
import BedroomImage from '../../img/BedroomImage.jpg';
import GunaJasko from '../../img/GunaJasko.png';
import Vannasistaba from '../../img/Vannasistaba.jpg';
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
import ArrowLeft from '../../img/ArrowLeft.png';
import ArrowRight from '../../img/ArrowRight.png';
import ContactForm from "./ContactForm";
import { useTranslation } from "react-i18next";
import LazyBackground from "./LazyBackground";

function Sakumlapa() {
    const getInitials = (name) => {
        const nameParts = name.split(" ");
        return nameParts.length >= 2
            ? nameParts[0][0] + nameParts[1][0] // First letter of first & last name
            : nameParts[0][0]; // If only one name exists
    };

    const { t, i18n } = useTranslation(); // Destructure i18n for language detection
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
            {/* Hero Section */}
            <LazyBackground
                image={BedroomImage}
                className="bg-black bg-opacity-40 h-[830px] lg:h-[900px] 2xl:h-[970px] relative overflow-hidden mb-5 z-0" // Removed pointer-events-none
            >
                <div className="absolute inset-0 bg-black bg-opacity-60 pointer-events-none"></div>

                {/* Text Section */}
                <div className="w-full max-w-screen-xl mx-auto absolute top-80 left-1/2 transform -translate-x-1/2 text-white space-y-6 xs:px-8">
                    <h2 className={`text-4xl text-center xs:text-left font-garamond500 pl-3 ${
                        i18n.language === 'ru' ? 'text-ru-h' : ''
                    }`}>
                        {t("sakumlapa.header")}
                    </h2>
                    <p className="max-w-lg text-center xs:text-left font-barlow400 pl-3">
                        {t("sakumlapa.p")}
                    </p>
                    <div className="text-center xs:text-left">
                        <button
                            onClick={scrollToContactForm}
                            className="font-barlow500 w-[272px] h-[55px] sm:w-[317px] sm:h-[55px] bg-[#5B3767] hover:bg-[#371243] transition duration-300 ease-in-out text-[#CDC697] font-medium sm:ml-3">
                            {t("sakumlapa.button")}
                        </button>
                    </div>
                </div>
            </LazyBackground>

            {/* About Section */}
            <section className="bg-[#5B3767] text-white py-16 -mt-5">
                <div className="w-full max-w-screen-xl mx-auto container px-6 flex flex-col xl:flex-row items-center xl:items-start text-center xl:text-left">
                    {/* Left Side */}
                    <div className="xl:w-1/2">
                        <h1 className={`font-garamond500 text-[#CDC697] text-4xl mb-12 ${
                            i18n.language === 'ru' ? 'text-ru-h' : ''
                        }`}>
                            {t("sakumlapaAbout.headerAbout")}
                        </h1>

                        {/* Information Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
                            {/* Card 1 */}
                            <div className="w-full text-left border border-[#CDC697] p-5 flex flex-col items-center xl:items-start space-y-4">
                                <LazyBackground
                                    image={Experience}
                                    className="w-16 h-16 bg-contain bg-no-repeat bg-left"
                                ></LazyBackground>
                                <div className="font-barlow400 text-2xl text-white">
                                    {t("sakumlapaAbout.divAbout1")}
                                </div>
                                <p className="font-barlow400 text-sm text-center xl:text-left">
                                    {t("sakumlapaAbout.pAbout1")}
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="w-full text-left border border-[#CDC697] p-5 flex flex-col items-center xl:items-start space-y-4">
                                <LazyBackground
                                    image={Check}
                                    className="w-16 h-16 bg-contain bg-no-repeat bg-left"
                                ></LazyBackground>
                                <div className="text-2xl font-barlow400 text-white">
                                    {t("sakumlapaAbout.divAbout2")}
                                </div>
                                <p className="font-barlow400 text-sm text-center xl:text-left">
                                    {t("sakumlapaAbout.pAbout2")}
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="w-full text-left border border-[#CDC697] p-5 flex flex-col items-center xl:items-start space-y-4">
                                <LazyBackground
                                    image={Safety}
                                    className="w-16 h-16 bg-contain bg-no-repeat bg-left"
                                ></LazyBackground>
                                <div className="text-2xl font-barlow400 text-white">
                                    {t("sakumlapaAbout.divAbout3")}
                                </div>
                                <p className="font-barlow400 text-sm text-center xl:text-left">
                                    {t("sakumlapaAbout.pAbout3")}
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div className="w-full text-left border border-[#CDC697] p-5 flex flex-col items-center xl:items-start space-y-4">
                                <LazyBackground
                                    image={Lanida}
                                    className="w-[95px] h-[72px] bg-contain bg-no-repeat bg-left"
                                ></LazyBackground>
                                <div className="text-2xl font-barlow400 text-white">
                                    {t("sakumlapaAbout.divAbout4")}
                                </div>
                                <a
                                    href="https://lanida.lv/biedri/guna-jasko-2/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-barlow400 text-sm underline text-center xl:text-left">
                                    {t("sakumlapaAbout.pAbout4")}
                                </a>
                            </div>
                        </div>

                        {/* Button */}
                        <div className="mt-12">
                            <a href="https://gunajasko.lv/par-mani">
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
                            <LazyBackground
                                image={GunaJasko}
                                className="bg-cover bg-center w-[300px] h-[500px] md:w-[400px] md:h-[570px] lg:w-[500px] lg:h-[670px] 2xl:w-[558px] 2xl:h-[837px] relative"
                            ></LazyBackground>
                        </div>
                    </div>
                </div>
            </section>

            {/* Jaunakie Objekti Section */}
            <JaunakieObjekti />

            {/* Atsauksmes Section */}
            <section className="bg-white relative w-full flex items-center justify-center min-h-screen px-2">
                <LazyBackground
                    image={Vannasistaba}
                    className="relative flex items-center justify-center w-full lg:w-4/6 h-[500px] sm:h-[645px]"
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
                        <h1 className={`font-garamond500 text-[#CDC697] text-2xl sm:text-4xl sm:mb-12 text-center ${i18n.language === 'ru' ? 'text-ru-h' : ''}`}>
                            {t("atsauksmes.h1Atsauksmes")}
                        </h1>

                        {/* Testimonial Box */}
                        <div
                            className="relative bg-white w-full max-w-[320px] sm:max-w-[782px] h-[400px] sm:h-[450px] opacity-90 p-6 sm:p-12 flex flex-col items-center justify-center overflow-y-auto">
                            {/* Initials Circle */}
                            <div
                                className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] bg-[#CDC697] rounded-full flex items-center justify-center text-[#5B3767] font-garamond500 text-2xl sm:text-3xl mb-6">
                                {getInitials(testimonials[currentIndex].author)}
                            </div>

                            {/* Testimonial Content */}
                            <p className="font-barlow400 text-[#5B3767] text-base sm:text-lg mb-4 leading-relaxed text-center">
                                {testimonials[currentIndex].content}
                            </p>

                            {/* Author Name */}
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
                </LazyBackground>
            </section>

            {/* Sadarbības Partneri Section */}
            <section className="mx-auto bg-white">
                <div className="mx-auto px-4 sm:px-8 text-center">
                    <h1 className={`font-garamond500 text-[#6C256B] text-4xl mb-12 sm:mb-24 ${
                        i18n.language === 'ru' ? 'text-ru-h' : ''
                    }`}>
                        {t("partneri.h1Partneri")}
                    </h1>

                    {/* Partners Logos */}
                    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 lg:mx-32 place-items-center">
                        {/* Partner 1 */}
                        <LazyBackground
                            image={Swedbank}
                            className="w-[216px] h-[48px] bg-cover my-4"
                        ></LazyBackground>
                        {/* Partner 2 */}
                        <LazyBackground
                            image={LatvijasNotars}
                            className="w-[107px] h-[160px] bg-cover my-4"
                        ></LazyBackground>
                        {/* Partner 3 */}
                        <LazyBackground
                            image={Altum}
                            className="w-[152px] h-[80px] bg-cover my-4"
                        ></LazyBackground>
                        {/* Partner 4 */}
                        <LazyBackground
                            image={Luminor}
                            className="w-[165px] h-[60px] bg-cover my-4"
                        ></LazyBackground>
                        {/* Partner 5 */}
                        <LazyBackground
                            image={Seb}
                            className="w-[136px] h-[60px] bg-cover my-4"
                        ></LazyBackground>
                        {/* Partner 6 */}
                        <LazyBackground
                            image={Citadele}
                            className="w-[158px] h-[88px] bg-cover my-4"
                        ></LazyBackground>
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
