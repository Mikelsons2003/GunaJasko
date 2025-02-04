import React, { useState } from "react";
import objekts1 from '../../img/objekts1.webp';
import objekts2 from '../../img/objekts2.webp';
import objekts3 from '../../img/objekts3.webp';
import objekts4 from '../../img/objekts4.webp';
import objekts5 from '../../img/objekts5.webp';
import objekts6 from '../../img/objekts6.webp';
import objekts7 from '../../img/objekts7.webp';
import { useTranslation } from "react-i18next";
import LazyBackground from "./LazyBackground";
import photo8 from "../../img/photo8.png";

function Objekti() {
    const { t } = useTranslation();
    const properties = [
        { id: 1, header: "Pārdod", price: "120 000 EUR", address: "Alberta 1, Rīga", type: "Dzīvoklis", rooms: "5", image: objekts2 },
        { id: 2, header: "Izīrē", price: "560 EUR / mēn.", address: "Alberta 1, Rīga", type: "Dzīvoklis", rooms: "5", image: objekts3 },
        { id: 3, header: "Pārdod", price: "120 000 EUR", address: "Alberta 1, Rīga", type: "Dzīvoklis", rooms: "5", image: objekts4 },
        { id: 4, header: "Izīrē", price: "120 EUR / mēn.", address: "Alberta 1, Rīga", type: "Dzīvoklis", rooms: "5", image: objekts5 },
        { id: 5, header: "Pārdod", price: "760 EUR / mēn.", address: "Alberta 1, Rīga", type: "Dzīvoklis", rooms: "5", image: objekts6 },
        { id: 6, header: "Pārdod", price: "120 000 EUR", address: "Alberta 1, Rīga", type: "Dzīvoklis", rooms: "5", image: objekts7 },
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
        <div className="mx-auto text-white">
            <LazyBackground
                image={objekts1}
                className="relative w-full h-[428px] bg-cover bg-center pt-24"
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                    {/* Navigation Container */}
                    <nav
                        className="font-garamond500 w-full max-w-[1267px] flex items-center justify-center md:justify-start text-white text-sm lg:text-xl uppercase tracking-wide px-6">
                        <ul className="grid grid-cols-1 md:flex md:space-x-4 lg:space-x-8 text-center">
                            <li>{t("objekti.liObjekti1")}</li>
                            <li className="mt-3 md:mt-0">{t("objekti.liObjekti2")}</li>
                            <li className="mt-3 md:mt-0">{t("objekti.liObjekti3")}</li>
                            <li className="mt-3 md:mt-0">{t("objekti.liObjekti4")}</li>
                            <li className="mt-3 md:mt-0">{t("objekti.liObjekti6")}</li>
                        </ul>
                    </nav>
                    {/* Secondary Navigation */}
                    <nav
                        className="font-barlow400 w-full max-w-[1267px] flex justify-center md:justify-start items-center text-white text-sm lg:text-lg uppercase tracking-wide px-6">
                        <ul className="flex space-x-4 lg:space-x-8 mt-12">
                            <li>{t("objekti.liObjekti7")}</li>
                            <li>{t("objekti.liObjekti8")}</li>
                        </ul>
                    </nav>
                </div>
            </LazyBackground>

            {/* Property Grid Section */}
            <section className="w-full max-w-screen-xl mx-auto py-12 px-4 lg:px-12 bg-white text-[#5B3767]">
                {/* Breadcrumb and Sort By */}
                <div className="flex flex-col items-start space-y-4 mb-14">
                    <div className="font-barlow400 flex items-center space-x-2 text-sm uppercase mb-10 mt-6">
                        <span className="font-semibold">{t("objekti.liObjekti10")}</span>
                        <span>&rarr;</span>
                        <span className="font-semibold">{t("objekti.liObjekti1")}</span>
                        <span>&rarr;</span>
                        <span className="font-semibold">{t("objekti.liObjekti7")}</span>
                    </div>
                    <button
                        className="font-barlow400 flex justify-between items-center border border-[#9C9150] text-[#9C9150] w-[223px] h-[63px] px-4 py-2">
                        <span>{t("objekti.liObjekti9")}</span>
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
                                <h1 className="font-garamond500 text-[#5B3767] text-xl mb-3 text-left">
                                    {property.header}
                                </h1>

                                {/* Price */}
                                <h2 className="font-infant600 text-[#5B3767] text-2xl font-bold mb-4 text-left">
                                    {property.price}
                                </h2>

                                {/* Divider */}
                                <div className="w-full border-b-[1px] border-[#CDC697] mb-4"></div>

                                {/* Details */}
                                <div className="font-barlow400 grid grid-cols-2 text-sm gap-y-2 text-left">
                                    <span>{t("jaunakieObjekti.spanObjekti1")}</span>
                                    <span className="font-bold text-right">{property.address}</span>
                                    <span>{t("jaunakieObjekti.spanObjekti2")}</span>
                                    <span className="font-bold text-right">{property.type}</span>
                                    <span>{t("jaunakieObjekti.spanObjekti3")}</span>
                                    <span className="font-bold text-right">{property.rooms}</span>
                                </div>

                                {/* View More */}
                                <div className="flex justify-start">
                                    <a
                                        href="#"
                                        className="font-barlow500 text-[#CDC697] text-sm mt-6 inline-flex"
                                    >
                                        {t("jaunakieObjekti.aObjekti")} <span className="ml-1">&rarr;</span>
                                    </a>
                                </div>
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
                        &larr; {t("objekti.liObjekti11")}
                    </button>
                    <div className="text-sm">
                        {currentPage} / {totalPages}
                    </div>
                    <button
                        onClick={handleNextPage}
                        className="text-[#5B3767] font-bold disabled:opacity-50"
                        disabled={currentPage === totalPages}
                    >
                        {t("objekti.liObjekti12")} &rarr;
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Objekti;