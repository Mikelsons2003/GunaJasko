import React, { useState } from "react";
import JaunakieObjekti from '../../img/JaunakieObjekti.webp';
import ArrowLeft from '../../img/ArrowLeft.png';
import ArrowRight from '../../img/ArrowRight.png';

const JaunakieObjektiSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
            header: <div className="mb-3">&nbsp;</div>, // Empty space for the first box
            price: "120 000 EUR",
            address: "Alberta 1, Rīga",
            type: "Dzīvoklis",
            rooms: "5",
            image: JaunakieObjekti,
        },
        {
            header: <h1 className="text-[#5B3767] text-xl mb-3">Izīrē</h1>, // Header for the second box
            price: "760 EUR / mēn",
            address: "Alberta 1, Rīga",
            type: "Dzīvoklis",
            rooms: "5",
            image: JaunakieObjekti,
        },
        {
            header: <h1 className="text-[#5B3767] text-xl mb-3">Pārdod</h1>, // Header for the third box
            price: "120 000 EUR",
            address: "Alberta 1, Rīga",
            type: "Dzīvoklis",
            rooms: "5",
            image: JaunakieObjekti,
        },
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    return (
        <section className="py-16 bg-white flex items-center justify-center min-h-screen">
            <div className="container mx-auto flex flex-col items-center justify-center">
                {/* Heading */}
                <h1 className="font-garamond500 text-center text-[#5B3767] text-4xl mb-12">JAUNĀKIE OBJEKTI</h1>

                {/* Responsive Cards Section */}
                <div className="relative flex items-center justify-center lg:justify-between">
                    {/* Arrows: Only visible on small screens */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-[2%] sm:left-[2%] top-1/2 transform -translate-y-1/2 z-20 lg:hidden -ml-8 xs:-ml-12"
                    >
                        <img src={ArrowRight} alt="Left Arrow" className="w-[24px] h-[24px]"/>
                    </button>

                    {/* Cards Container */}
                    <div
                        className="relative w-full flex items-center gap-4 md:gap-6 lg:gap-8 overflow-hidden lg:overflow-visible">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className={`w-full md:w-1/2 lg:w-1/3 transition-transform duration-[700ms] ease-in-out ${
                                    index === currentIndex
                                        ? "translate-x-0 opacity-100 visible"
                                        : "hidden lg:block" // Show all cards on large screens
                                }`}
                            >
                                <div className="border border-[#CDC697] w-[261px] md:w-[311px] 2xl:w-[341px] h-full mx-auto">
                                    {/* Image */}
                                    <div
                                        className="w-[260px] md:w-[310px] 2xl:w-[340px] h-[254px] bg-gray-200"
                                        style={{
                                            backgroundImage: `url(${card.image})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                    ></div>

                                    {/* Content */}
                                    <div className="p-4 sm:p-6">
                                        {/* Header */}
                                        <div className="font-garamond500 text-left">{card.header}</div>

                                        {/* Price */}
                                        <div className="text-left">
                                            <h2 className="font-infant600 text-[#5B3767] text-2xl font-bold mb-4">{card.price}</h2>
                                        </div>

                                        {/* Divider */}
                                        <div className="w-full max-w-screen-xl mx-auto mb-4">
                                            <div className="border-b-[1px] border-[#CDC697]"></div>
                                        </div>

                                        {/* Details */}
                                        <div className="font-barlow400 grid grid-cols-2 text-sm text-[#5B3767] gap-y-2">
                                            <span className="text-left py-1">Adrese:</span>
                                            <span className="text-right font-semibold">{card.address}</span>

                                            <span className="text-left pb-1">Īpašuma tips:</span>
                                            <span className="text-right font-semibold">{card.type}</span>

                                            <span className="text-left">Istabu sk.:</span>
                                            <span className="text-right font-semibold">{card.rooms}</span>
                                        </div>

                                        {/* View More Link */}
                                        <div className="text-left">
                                            <a
                                                href="#"
                                                className="font-barlow500 text-[#CDC697] text-sm mt-6 inline-flex items-center"
                                            >
                                                SKATĪT <span className="ml-1">&rarr;</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow: Only visible on small screens */}
                    <button
                        onClick={handleNext}
                        className="absolute right-[2%] sm:right-[2%] top-1/2 transform -translate-y-1/2 z-20 lg:hidden -mr-8 xs:-mr-12"
                    >
                        <img src={ArrowLeft} alt="Right Arrow" className="w-[24px] h-[24px]"/>
                    </button>
                </div>

                {/* View All Button */}
                <div className="mt-12 flex justify-center">
                    <a href="https://guna.lucid-websites.com/objekti">
                        <button
                            className="font-barlow500 w-[280px] sm:w-[356px] h-[55px] bg-[#5B3767] text-[#CDC697] text-sm hover:bg-[#371243] transition duration-300 ease-in-out">
                            SKATĪT VISUS OBJEKTUS
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default JaunakieObjektiSection;
