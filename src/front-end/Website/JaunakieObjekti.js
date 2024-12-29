import React, { useState } from "react";
import JaunakieObjekti from '../../img/JaunakieObjekti.webp';

const JaunakieObjektiSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState("right"); // Default direction

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
        setDirection("left");
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    const handleNext = () => {
        setDirection("right");
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    return (
        <section className="py-16 bg-white flex items-center justify-center min-h-screen">
            <div className="container mx-auto lg:px-20">
                {/* Heading */}
                <h1 className="font-garamond500 text-center text-[#5B3767] text-4xl mb-12">JAUNĀKIE OBJEKTI</h1>

                {/* Cards */}
                <div className="relative flex lg:flex-row lg:gap-6 items-center justify-center overflow-hidden lg:overflow-visible">
                    {/* Mobile: Card Navigation */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-4 md:left-12 bg-[#5B3767] text-white p-2 rounded-full hover:bg-opacity-90 focus:outline-none z-10 lg:hidden">
                        &larr;
                    </button>

                    {/* Cards Container */}
                    <div className="relative w-[310px] xs:w-[340px] h-[523px] lg:flex lg:gap-6 xl:gap-20 lg:w-auto lg:h-auto">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className={`lg:static lg:visible lg:opacity-100 lg:translate-x-0 ${
                                    index === currentIndex
                                        ? "absolute inset-0 transition-transform duration-[700ms] ease-in-out translate-x-0 opacity-100 visible"
                                        : direction === "right"
                                            ? "absolute inset-0 transition-transform duration-[700ms] ease-in-out translate-x-full opacity-0 invisible"
                                            : "absolute inset-0 transition-transform duration-[700ms] ease-in-out -translate-x-full opacity-0 invisible"
                                } lg:border lg:border-[#CDC697]`}
                            >
                                <div className="border border-[#CDC697] w-full h-full mx-auto lg:border-none">
                                    <div className="w-full h-[254px] bg-gray-200">
                                        <img
                                            className="object-cover w-full h-full"
                                            src={card.image}
                                            alt="Property"
                                        />
                                    </div>
                                    <div className="p-6">
                                        {/* Header */}
                                        <div className="font-garamond500 text-left">{card.header}</div>

                                        {/* Price */}
                                        <div className="text-left">
                                            <h2 className="font-infant600  text-[#5B3767] text-2xl font-bold mb-4">{card.price}</h2>
                                        </div>

                                        {/* Divider */}
                                        <div className="w-full max-w-screen-xl mx-auto mb-4">
                                            <div className="border-b-[1px] border-[#CDC697]"></div>
                                        </div>

                                        {/* Two-Column Layout for Text */}
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
                                                className="font-barlow500 text-[#CDC697] text-sm mt-6 inline-flex items-center">
                                                SKATĪT <span className="ml-1">&rarr;</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile: Right Arrow */}
                    <button
                        onClick={handleNext}
                        className="absolute right-4 md:right-12 bg-[#5B3767] text-white p-2 rounded-full hover:bg-opacity-90 focus:outline-none z-10 lg:hidden">
                        &rarr;
                    </button>
                </div>

                {/* Button */}
                <div className="mt-12 flex justify-center">
                    <a href="https://guna.lucid-websites.com/objekti"><button
                        className="font-barlow500 w-[280px] xs:w-[356px] h-[55px] bg-[#5B3767] text-[#CDC697] text-sm hover:bg-[#371243] transition duration-300 ease-in-out">
                        SKATĪT VISUS OBJEKTUS
                    </button></a>
                </div>
            </div>
        </section>
    );
};

export default JaunakieObjektiSection;
