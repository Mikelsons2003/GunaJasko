import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { PiArrowDownThin, PiArrowUpThin } from "react-icons/pi"; // Import icons
import objekts1 from '../../img/objekts1.webp';

function Objekti() {
    const { t } = useTranslation();
    const [properties, setProperties] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortCriteria, setSortCriteria] = useState("none"); // State for sorting criteria
    const [sortOrder, setSortOrder] = useState("asc"); // State for sorting order (asc or desc)
    const itemsPerPage = 6;

    // Helper function to extract fields from the rendered HTML content
    const extractField = (content, fieldName) => {
        const regex = new RegExp(`<label>${fieldName}:<\\/label>\\s*([^<]+)`);
        const match = content.match(regex);
        return match ? match[1].trim() : "Not available";
    };

    // Fetch data from the API
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
                        price: parseFloat(extractField(content, "Property Value")) || 0, // Convert to number for sorting
                        address: extractField(content, "Address"),
                        type: extractField(content, "Property Type"),
                        rooms: parseInt(extractField(content, "Room Count")) || 0, // Convert to number for sorting
                        image: item.featured_media_src_url || objekts1, // Use featured image or fallback
                    };
                });
                setProperties(formattedData);
            } catch (error) {
                console.error("Error fetching properties:", error);
            }
        };
        fetchProperties();
    }, []);

    // Sorting function
    const sortProperties = (criteria, order) => {
        const sortedProperties = [...properties].sort((a, b) => {
            if (criteria === "price") {
                return order === "asc" ? a.price - b.price : b.price - a.price; // Sort by price
            } else if (criteria === "rooms") {
                return order === "asc" ? a.rooms - b.rooms : b.rooms - a.rooms; // Sort by rooms
            } else {
                return 0; // No sorting
            }
        });
        setProperties(sortedProperties);
    };

    // Handle sorting criteria change
    const handleSortChange = (criteria) => {
        if (criteria === sortCriteria) {
            // Toggle sorting order if the same criteria is selected again
            const newOrder = sortOrder === "asc" ? "desc" : "asc";
            setSortOrder(newOrder);
            sortProperties(criteria, newOrder);
        } else {
            // Set new criteria and default to ascending order
            setSortCriteria(criteria);
            setSortOrder("asc");
            sortProperties(criteria, "asc");
        }
    };

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
                            <li>{t("objekti.liObjekti1")}</li>
                            <li className="mt-3 md:mt-0">{t("objekti.liObjekti2")}</li>
                            <li className="mt-3 md:mt-0">{t("objekti.liObjekti3")}</li>
                            <li className="mt-3 md:mt-0">{t("objekti.liObjekti4")}</li>
                            <li className="mt-3 md:mt-0">{t("objekti.liObjekti6")}</li>
                        </ul>
                    </nav>
                    <nav
                        className="font-barlow400 w-full max-w-[1267px] flex justify-center md:justify-start items-center text-white text-sm lg:text-lg uppercase tracking-wide px-6">
                        <ul className="flex space-x-4 lg:space-x-8 mt-12">
                            <li>{t("objekti.liObjekti7")}</li>
                            <li>{t("objekti.liObjekti8")}</li>
                        </ul>
                    </nav>
                </div>
            </section>

            <section className="w-full max-w-screen-xl mx-auto py-12 px-4 lg:px-12 bg-white text-[#5B3767]">
                <div className="flex flex-col items-start space-y-4 mb-14">
                    <div className="font-barlow400 flex items-center space-x-2 text-sm uppercase mb-10 mt-6">
                        <span className="font-semibold">{t("objekti.liObjekti10")}</span>
                        <span>&rarr;</span>
                        <span className="font-semibold">{t("objekti.liObjekti1")}</span>
                        <span>&rarr;</span>
                        <span className="font-semibold">{t("objekti.liObjekti7")}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                        <button
                            onClick={() => handleSortChange("price")}
                            className="font-barlow400 flex justify-between items-center border border-[#9C9150] text-[#9C9150] w-[223px] h-[63px] px-4 py-2"
                        >
                            <span>{t("objekti.spanSort1")}</span>
                            {sortCriteria === "price" && (
                                sortOrder === "asc" ? <PiArrowUpThin /> : <PiArrowDownThin />
                            )}
                        </button>
                        <button
                            onClick={() => handleSortChange("rooms")}
                            className="font-barlow400 flex justify-between items-center border border-[#9C9150] text-[#9C9150] w-[223px] h-[63px] px-4 py-2"
                        >
                            <span>{t("objekti.spanSort2")}</span>
                            {sortCriteria === "rooms" && (
                                sortOrder === "asc" ? <PiArrowUpThin /> : <PiArrowDownThin />
                            )}
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                    {currentItems.map((property) => (
                        <div
                            key={property.id}
                            className="border border-[#CDC697] bg-white"
                        >
                            <div className="w-full h-[254px] bg-gray-200">
                                <img
                                    className="w-full h-52 sm:h-64 object-cover transition-opacity duration-500 opacity-100"
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
                                <div className="w-full border-b-[1px] border-[#CDC697] mb-4"></div>
                                <div className="font-barlow400 grid grid-cols-2 text-sm gap-y-2 text-left">
                                    <span>{t("jaunakieObjekti.spanObjekti1")}</span>
                                    <span className="font-bold text-right">{property.address}</span>
                                    <span>{t("jaunakieObjekti.spanObjekti2")}</span>
                                    <span className="font-bold text-right">{property.type}</span>
                                    <span>{t("jaunakieObjekti.spanObjekti3")}</span>
                                    <span className="font-bold text-right">{property.rooms}</span>
                                </div>
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