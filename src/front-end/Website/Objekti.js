import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {PiArrowDownThin, PiArrowRightThin, PiArrowUpThin} from "react-icons/pi";
import {useLocation, useNavigate} from "react-router-dom";
import objekts1 from '../../img/objekts1.webp';

function Objekti() {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const [properties, setProperties] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortCriteria, setSortCriteria] = useState("none");
    const [sortOrder, setSortOrder] = useState("asc");
    const [propertyType, setPropertyType] = useState("all");
    const [transactionType, setTransactionType] = useState("all");
    const itemsPerPage = 6;

    const extractField = (content, fieldName) => {
        const regex = new RegExp(`<label>${fieldName}:<\\/label>\\s*([^<]+)`);
        const match = content.match(regex);
        return match ? match[1].trim() : "Not available";
    };

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await fetch("https://backends.lucid-websites.com/wp-json/wp/v2/posts");
                const data = await response.json();
                const formattedData = data.map((item) => {
                    const content = item.content.rendered;

                    return {
                        id: item.id,
                        header: item.title.rendered,
                        price: parseFloat(extractField(content, "Property Value")) || 0,
                        address: extractField(content, "Address"),
                        type: extractField(content, "Property Type"),
                        transactionType: extractField(content, "Transaction Type"),
                        rooms: parseInt(extractField(content, "Room Count")) || 0,
                        image: item.featured_media_src_url || objekts1,
                    };
                });
                setProperties(formattedData);
            } catch (error) {
                console.error("Error fetching properties:", error);
            }
        };
        fetchProperties();
    }, []);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const propertyTypeParam = params.get("propertyType") || "all";
        const transactionTypeParam = params.get("transactionType") || "all";
        setPropertyType(propertyTypeParam);
        setTransactionType(transactionTypeParam);
    }, [location.search]);

    const sortProperties = (criteria, order) => {
        const sortedProperties = [...properties].sort((a, b) => {
            if (criteria === "price") {
                return order === "asc" ? a.price - b.price : b.price - a.price;
            } else if (criteria === "rooms") {
                return order === "asc" ? a.rooms - b.rooms : b.rooms - a.rooms;
            } else {
                return 0;
            }
        });
        setProperties(sortedProperties);
    };

    const handleSortChange = (criteria) => {
        if (criteria === sortCriteria) {
            const newOrder = sortOrder === "asc" ? "desc" : "asc";
            setSortOrder(newOrder);
            sortProperties(criteria, newOrder);
        } else {
            setSortCriteria(criteria);
            setSortOrder("asc");
            sortProperties(criteria, "asc");
        }
    };

    const handleFilterChange = (type, value) => {
        const params = new URLSearchParams(location.search);
        if (type === "propertyType" && value === "all") {
            params.set("transactionType", "all");
        }
        params.set(type, value);
        navigate({search: params.toString()});
    };

    const filteredProperties = properties.filter(property => {
        return (propertyType === "all" || property.type === propertyType) &&
            (transactionType === "all" || property.transactionType === transactionType);
    });

    const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
    const currentItems = filteredProperties.slice(
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
            <section
                className="relative w-full h-[428px] bg-contain bg-center pt-24"
                style={{
                    backgroundImage: `url(${objekts1})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                    <nav
                        className="font-garamond500 w-full max-w-[1267px] flex items-center justify-center md:justify-start text-white text-sm lg:text-xl uppercase tracking-wide px-6">
                        <ul className="grid grid-cols-1 md:flex md:space-x-4 lg:space-x-8 text-center">
                            <li className="cursor-pointer"
                                onClick={() => handleFilterChange("propertyType", "all")}>{t("objekti.liObjekti13")}</li>
                            <li className="mt-3 md:mt-0 cursor-pointer"
                                onClick={() => handleFilterChange("propertyType", "Apartment")}>{t("objekti.liObjekti2")}</li>
                            <li className="mt-3 md:mt-0 cursor-pointer"
                                onClick={() => handleFilterChange("propertyType", "House")}>{t("objekti.liObjekti3")}</li>
                            <li className="mt-3 md:mt-0 cursor-pointer"
                                onClick={() => handleFilterChange("propertyType", "Land")}>{t("objekti.liObjekti4")}</li>
                            <li className="mt-3 md:mt-0 cursor-pointer"
                                onClick={() => handleFilterChange("propertyType", "New Project")}>{t("objekti.liObjekti5")}</li>
                            <li className="mt-3 md:mt-0 cursor-pointer"
                                onClick={() => handleFilterChange("propertyType", "Investment Property")}>{t("objekti.liObjekti6")}</li>
                        </ul>
                    </nav>
                    <nav
                        className="font-barlow400 w-full max-w-[1267px] flex justify-center md:justify-start items-center text-white text-sm lg:text-lg uppercase tracking-wide px-6">
                        <ul className="flex space-x-4 lg:space-x-8 mt-12">
                            <li className="cursor-pointer"
                                onClick={() => handleFilterChange("transactionType", "Rent")}>{t("objekti.liObjekti8")}</li>
                            <li className="cursor-pointer"
                                onClick={() => handleFilterChange("transactionType", "Sell")}>{t("objekti.liObjekti9")}</li>
                        </ul>
                    </nav>
                </div>
            </section>

            <section className="w-full max-w-screen-xl mx-auto py-12 px-4 lg:px-12 bg-white text-[#9C9150]">
                <div className="flex flex-col items-center sm:items-start space-y-4 mb-14">
                    <div className="font-barlow400 flex items-center space-x-2 text-sm uppercase mb-10 mt-6">
                        <span>{t("objekti.liObjekti1")}</span>
                        <PiArrowRightThin className="font-semibold"/>
                        <span>{propertyType === "all" ? t("objekti.liObjekti7") : propertyType}</span>
                        {transactionType !== "all" && (
                            <>
                                <PiArrowRightThin className="font-semibold"/>
                                <span>{transactionType}</span>
                            </>
                        )}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                        <button
                            onClick={() => handleSortChange("price")}
                            className="font-barlow400 flex justify-between items-center border border-[#9C9150] text-[#9C9150] w-[223px] h-[63px] px-4 py-2"
                        >
                            <span>{t("objekti.spanSort1")}</span>
                            {sortCriteria === "price" && (
                                sortOrder === "asc" ? <PiArrowUpThin/> : <PiArrowDownThin/>
                            )}
                        </button>
                        <button
                            onClick={() => handleSortChange("rooms")}
                            className="font-barlow400 flex justify-between items-center border border-[#9C9150] text-[#9C9150] w-[223px] h-[63px] px-4 py-2"
                        >
                            <span>{t("objekti.spanSort2")}</span>
                            {sortCriteria === "rooms" && (
                                sortOrder === "asc" ? <PiArrowUpThin/> : <PiArrowDownThin/>
                            )}
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                    {currentItems.map((property) => (
                        <a
                            key={property.id}
                            href={`/objekti/${property.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-[#9C9150] bg-white block hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="w-full h-[254px] bg-gray-200">
                                <img
                                    className="w-full h-[254px] object-cover transition-opacity duration-500 opacity-100"
                                    src={property.image}
                                    alt="Property"
                                />
                            </div>
                            <div className="p-6">
                                <h1 className="font-garamond500 text-[#5B3767] text-xl mb-3 text-left">
                                    {property.header}
                                </h1>
                                <h2 className="font-infant600 text-[#5B3767] text-2xl font-bold mb-4 text-left">
                                    {property.price} EUR
                                </h2>
                                <div className="w-full border-b-[1px] border-[#9C9150] mb-4"></div>
                                <div
                                    className="font-barlow400 grid grid-cols-2 text-sm gap-y-2 text-left text-[#5B3767]">
                                    <span>{t("jaunakieObjekti.spanObjekti1")}</span>
                                    <span className="font-semibold text-right">{property.address}</span>
                                    <span>{t("jaunakieObjekti.spanObjekti2")}</span>
                                    <span className="font-semibold text-right">{property.type}</span>
                                    <span>{t("jaunakieObjekti.spanObjekti3")}</span>
                                    <span className="font-semibold text-right">{property.rooms}</span>
                                </div>
                                <div className="flex justify-start mt-6 text-[#9C9150] text-sm">
                                    {t("jaunakieObjekti.aObjekti")} <span className="ml-1">&rarr;</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

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