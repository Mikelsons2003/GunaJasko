import React, { useState } from "react";
import objekts1 from '../../img/objekts1.webp';
import Pakalpojumaimg1 from "../../img/Pakalpojumaimg1.webp";

function Objekti() {
    const properties = [
        { id: 1, header: "Pārdod", price: "120 000 EUR", address: "Alberta 1, Rīga", type: "Dzīvoklis", rooms: "5", image: Pakalpojumaimg1 },
        { id: 2, header: "Izīrē", price: "560 EUR / mēn.", address: "Alberta 1, Rīga", type: "Dzīvoklis", rooms: "5", image: Pakalpojumaimg1 },
        { id: 3, header: "Pārdod", price: "120 000 EUR", address: "Alberta 1, Rīga", type: "Dzīvoklis", rooms: "5", image: Pakalpojumaimg1 },
        { id: 4, header: "Izīrē", price: "120 EUR / mēn.", address: "Alberta 1, Rīga", type: "Dzīvoklis", rooms: "5", image: Pakalpojumaimg1 },
        { id: 5, header: "Pārdod", price: "760 EUR / mēn.", address: "Alberta 1, Rīga", type: "Dzīvoklis", rooms: "5", image: Pakalpojumaimg1 },
        { id: 6, header: "Pārdod", price: "120 000 EUR", address: "Alberta 1, Rīga", type: "Dzīvoklis", rooms: "5", image: Pakalpojumaimg1 },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    // Pagination logic
    const totalPages = Math.ceil(properties.length / itemsPerPage);
    const currentItems = properties.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="mx-auto font-sans text-white">
            <section
                className="relative w-full h-[428px] bg-cover bg-center pt-24"
                style={{
                    backgroundImage: `url(${objekts1})`,
                    backgroundSize: "cover", // Ensures the image covers the entire box
                    backgroundPosition: "center", // Centers the image in the container
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                    {/* Navigation Container */}
                    <nav
                        className="w-full max-w-[1267px] flex items-center justify-center md:justify-start text-white text-sm lg:text-xl uppercase font-medium tracking-wide px-6">
                        <ul className="grid grid-cols-1 md:flex md:space-x-4 lg:space-x-8 text-center">
                            <li>Dzīvokļi</li>
                            <li className="mt-3 md:mt-0">Mājas</li>
                            <li className="mt-3 md:mt-0">Zeme</li>
                            <li className="mt-3 md:mt-0">Jaunie projekti</li>
                            <li className="mt-3 md:mt-0">Projekti no attīstītāja</li>
                            <li className="mt-3 md:mt-0">Komercobjekti</li>
                        </ul>
                    </nav>
                    {/* Secondary Navigation */}
                    <nav
                        className="w-full max-w-[1267px] flex justify-center md:justify-start items-center text-white text-sm lg:text-lg uppercase font-medium tracking-wide px-6">
                        <ul className="flex space-x-4 lg:space-x-8 mt-12">
                            <li>Pārdod</li>
                            <li>Izīrē</li>
                        </ul>
                    </nav>
                </div>
            </section>

            {/* Property Grid Section */}
            <section className="w-full max-w-screen-xl mx-auto py-12 px-4 lg:px-12 bg-white text-[#5B3767]">
                {/* Breadcrumb and Sort By */}
                <div className="flex flex-col items-start space-y-4 mb-14">
                    <div className="flex items-center space-x-2 text-sm uppercase mb-10 mt-6">
                        <span className="font-bold">Objekti</span>
                        <span>&rarr;</span>
                        <span className="font-bold">Dzīvokļi</span>
                        <span>&rarr;</span>
                        <span className="font-bold">Pārdod</span>
                    </div>
                    <button
                        className="flex justify-between items-center border border-[#9C9150] text-[#9C9150] w-[223px] h-[63px] px-4 py-2">
                        <span>Grupēt pēc</span>
                        <span>&darr;</span>
                    </button>
                </div>

                {/* Property Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                    {currentItems.map((property) => (
                        <div
                            key={property.id}
                            className="border border-[#CDC697] bg-white"
                        >
                            <div className="w-full h-[254px] bg-gray-200">
                            <img
                                    className="object-cover w-full h-full"
                                    src={property.image}
                                    alt="Property"
                                />
                            </div>
                            <div className="p-6">
                                {/* Header */}
                                <h1 className="text-[#5B3767] text-xl mb-3 text-left">
                                    {property.header}
                                </h1>

                                {/* Price */}
                                <h2 className="text-[#5B3767] text-2xl font-bold mb-4 text-left">
                                    {property.price}
                                </h2>

                                {/* Divider */}
                                <div className="w-full border-b-[1px] border-[#CDC697] mb-4"></div>

                                {/* Details */}
                                <div className="grid grid-cols-2 text-sm gap-y-2 text-left">
                                    <span>Adrese:</span>
                                    <span className="font-bold text-right">{property.address}</span>
                                    <span>Īpašuma tips:</span>
                                    <span className="font-bold text-right">{property.type}</span>
                                    <span>Istabu sk.:</span>
                                    <span className="font-bold text-right">{property.rooms}</span>
                                </div>

                                {/* View More */}
                                <a
                                    href="#"
                                    className="text-[#CDC697] text-sm font-bold mt-6 inline-flex items-center"
                                >
                                    SKATĪT <span className="ml-1">&rarr;</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-between items-center mt-8">
                    <button
                        onClick={handlePrevPage}
                        className="text-[#5B3767] font-bold disabled:opacity-50"
                        disabled={currentPage === 1}
                    >
                        &larr; Iepriekšējā
                    </button>
                    <div className="text-sm">
                        {currentPage} / {totalPages}
                    </div>
                    <button
                        onClick={handleNextPage}
                        className="text-[#5B3767] font-bold disabled:opacity-50"
                        disabled={currentPage === totalPages}
                    >
                        Nākamā &rarr;
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Objekti;