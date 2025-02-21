import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {PiArrowRightThin} from "react-icons/pi";
import {useLocation, useNavigate} from "react-router-dom";
import objekts1 from '../../img/objekts1.webp';

function Objekti() {
    const navigate = useNavigate();
    const location = useLocation();
    const [properties, setProperties] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortCriteria, setSortCriteria] = useState("none");
    const [sortOrder, setSortOrder] = useState("asc");
    const [propertyType, setPropertyType] = useState("all");
    const [transactionType, setTransactionType] = useState("all");
    const [selectedProject, setSelectedProject] = useState("all"); // New state for project filtering
    const itemsPerPage = 6;
    const { t, i18n } = useTranslation();

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
                    const extraCategory = extractField(content, "Extra Category");
                    const projectName = extractField(content, "Project Name");

                    return {
                        id: item.id,
                        price: parseFloat(extractField(content, "Property Value")) || 0,
                        address: extractField(content, "Address"),
                        type: extractField(content, "Property Type"),
                        transactionType: extractField(content, "Transaction Type"),
                        rooms: parseInt(extractField(content, "Room Count")) || 0,
                        size: parseFloat(content.match(/<label>Size:<\/label>\s*([^<]+)/)?.[1].trim()) || 0,
                        floors: parseInt(extractField(content, "Floor/s")) || 0,
                        image: item.featured_media_src_url || objekts1,
                        date: new Date(item.date),
                        isInvestmentProperty: extraCategory.includes("Investment Property"),
                        isNewProject: extraCategory.toLowerCase().includes("new project"),
                        projectName: projectName || null,
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
            } else if (criteria === "size") {
                return order === "asc" ? a.size - b.size : b.size - a.size;
            } else {
                return 0;
            }
        });
        setProperties(sortedProperties);
    };

    const handleSortChange = (event) => {
        const [criteria, order] = event.target.value.split("-");
        setSortCriteria(criteria);
        setSortOrder(order);
        sortProperties(criteria, order);
    };

    const handleProjectFilterChange = (event) => {
        setSelectedProject(event.target.value);
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
        // Handle "New Project" category
        if (propertyType === "New Project") {
            return property.isNewProject && (transactionType === "all" || property.transactionType === transactionType) &&
                (selectedProject === "all" || property.projectName === selectedProject);
        }
        // Handle "Investment Property" category
        else if (propertyType === "Investment Property") {
            return property.isInvestmentProperty && (transactionType === "all" || property.transactionType === transactionType);
        }
        // Handle other property types (Apartment, House, Land, etc.)
        else {
            return (propertyType === "all" || property.type === propertyType) &&
                (transactionType === "all" || property.transactionType === transactionType);
        }
    }).sort((a, b) => {
        if (sortCriteria === "price") {
            return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
        } else if (sortCriteria === "rooms") {
            return sortOrder === "asc" ? a.rooms - b.rooms : b.rooms - a.rooms;
        } else if (sortCriteria === "size") {
            return sortOrder === "asc" ? a.size - b.size : b.size - a.size;
        } else {
            return 0;
        }
    });

    const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
    const currentItems = filteredProperties.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

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

    const propertyTypeToTranslationKey = {
        all: "objekti.liObjekti7", // "Visi" in Lv, "All" in Eng, "Все" in Ru
        Apartment: "objekti.liObjekti14", // "Dzīvokļi" in Lv, "Apartments" in Eng, "Квартиры" in Ru
        House: "objekti.liObjekti15", // "Mājas" in Lv, "Houses" in Eng, "Дома" in Ru
        Land: "objekti.liObjekti4", // "Zeme" in Lv, "Land" in Eng, "Земля" in Ru
        "New Project": "objekti.liObjekti5", // "Jaunie projekti" in Lv, "New Projects" in Eng, "Новые проекты" in Ru
        "Investment Property": "objekti.liObjekti6", // "Investīciju objekti" in Lv, "Investment Properties" in Eng, "Инвестиционные объекты" in Ru
    };

    const transactionTypeToTranslationKey = {
        Rent: "objekti.liObjekti8", // "Izīrē" in Lv, "Rent" in Eng, "Аренда" in Ru
        Sell: "objekti.liObjekti9", // "Pārdod" in Lv, "Sell" in Eng, "Продажа" in Ru
    };
    const propertySizeLabelKey = {
        Land: "objektiIeskats.spanIeskats2", // "Platība" for Land
        default: "jaunakieObjekti.spanObjekti3", // "Istabas" for others
    };

    const formatPrice = (price) => {
        if (price > 99999) {
            // Convert the number to a string and add a space every 3 digits
            return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }
        return price.toString(); // Return the number as is if it's less than 100000
    };

    // Get project names only from the "New Project" category
    const projectNames = [...new Set(properties
        .filter(property => property.isNewProject)
        .map(property => property.projectName)
        .filter(Boolean)
    )];

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
                            {/* All */}
                            <li
                                className={`cursor-pointer ${propertyType === "all" ? "text-[#9C9150]" : ""}`}
                                onClick={() => handleFilterChange("propertyType", "all")}
                            >
                                {t("objekti.liObjekti13")}
                            </li>

                            {/* Apartment */}
                            <li
                                className={`mt-3 md:mt-0 cursor-pointer ${propertyType === "Apartment" ? "text-[#9C9150]" : ""}`}
                                onClick={() => handleFilterChange("propertyType", "Apartment")}
                            >
                                {t("objekti.liObjekti2")}
                            </li>

                            {/* House */}
                            <li
                                className={`mt-3 md:mt-0 cursor-pointer ${propertyType === "House" ? "text-[#9C9150]" : ""}`}
                                onClick={() => handleFilterChange("propertyType", "House")}
                            >
                                {t("objekti.liObjekti3")}
                            </li>

                            {/* Land */}
                            <li
                                className={`mt-3 md:mt-0 cursor-pointer ${propertyType === "Land" ? "text-[#9C9150]" : ""}`}
                                onClick={() => handleFilterChange("propertyType", "Land")}
                            >
                                {t("objekti.liObjekti4")}
                            </li>

                            {/* New Project */}
                            <li
                                className={`mt-3 md:mt-0 cursor-pointer ${propertyType === "New Project" ? "text-[#9C9150]" : ""}`}
                                onClick={() => handleFilterChange("propertyType", "New Project")}
                            >
                                {t("objekti.liObjekti5")}
                            </li>

                            {/* Investment Property */}
                            <li
                                className={`mt-3 md:mt-0 cursor-pointer ${propertyType === "Investment Property" ? "text-[#9C9150]" : ""}`}
                                onClick={() => handleFilterChange("propertyType", "Investment Property")}
                            >
                                {t("objekti.liObjekti6")}
                            </li>
                        </ul>
                    </nav>
                    <nav
                        className="font-barlow400 w-full max-w-[1267px] flex justify-center md:justify-start items-center text-white text-sm lg:text-lg uppercase tracking-wide px-6">
                        <ul className="flex space-x-4 lg:space-x-8 mt-12">
                            {/* Rent */}
                            <li
                                className={`cursor-pointer ${transactionType === "Rent" ? "text-[#9C9150] underline underline-offset-8" : ""}`}
                                onClick={() => handleFilterChange("transactionType", "Rent")}
                            >
                                {t(transactionTypeToTranslationKey.Rent)} {/* "Izīrē" in Lv, "Rent" in Eng, "Аренда" in Ru */}
                            </li>

                            {/* Sell */}
                            <li
                                className={`cursor-pointer ${transactionType === "Sell" ? "text-[#9C9150] underline underline-offset-8" : ""}`}
                                onClick={() => handleFilterChange("transactionType", "Sell")}
                            >
                                {t(transactionTypeToTranslationKey.Sell)} {/* "Pārdod" in Lv, "Sell" in Eng, "Продажа" in Ru */}
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>

            <section className="w-full max-w-screen-xl mx-auto py-12 px-4 lg:px-12 bg-white text-[#9C9150]">
                <div className="flex flex-col items-center sm:items-start space-y-4 mb-14">
                    <div className="font-barlow400 flex items-center space-x-2 text-sm uppercase mb-10 mt-6">
                        <span>{t("objekti.liObjekti1")}</span>
                        <PiArrowRightThin className="font-semibold"/>

                        {/* Property Type */}
                        <span className={transactionType === "all" ? "text-[#371243] font-semibold" : ""}>
                            {propertyType === "all"
                                ? t("objekti.liObjekti7")
                                : t(propertyTypeToTranslationKey[propertyType])
                            }
                        </span>

                        {/* Transaction Type (if not "all") */}
                        {transactionType !== "all" && (
                            <>
                                <PiArrowRightThin className="font-semibold"/>
                                <span className="text-[#371243] font-semibold">
                                    {t(transactionTypeToTranslationKey[transactionType])} {/* Use the mapping object for transactionType */}
                                </span>
                            </>
                        )}
                    </div>

                    {/* Sorting and Project Filtering (Only for New Projects) */}
                    {propertyType === "New Project" && (
                        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                            {/* Sorting Dropdown */}
                            <select
                                onChange={handleSortChange}
                                className="font-barlow400 flex justify-between items-center border border-[#9C9150] text-[#9C9150] w-[223px] h-[63px] px-4 py-2"
                            >
                                <option value="none">Sort by</option>
                                <option value="price-asc">Price Ascending</option>
                                <option value="price-desc">Price Descending</option>
                                <option value="size-asc">Size (m²) Ascending</option>
                                <option value="size-desc">Size (m²) Descending</option>
                                <option value="rooms-asc">Rooms Ascending</option>
                                <option value="rooms-desc">Rooms Descending</option>
                            </select>

                            {/* Project Filter Dropdown */}
                            <select
                                onChange={handleProjectFilterChange}
                                className="font-barlow400 flex justify-between items-center border border-[#9C9150] text-[#9C9150] w-[223px] h-[63px] px-4 py-2"
                            >
                                <option value="all">All Projects</option>
                                {projectNames.map((projectName) => (
                                    <option key={projectName} value={projectName}>{projectName}</option>
                                ))}
                            </select>
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                    {currentItems.map((property) => (
                        <a
                            key={property.id}
                            href={`/objekti/${property.id}?propertyType=${propertyType}&transactionType=${transactionType}&lang=${i18n.language}`}
                            className="border border-[#9C9150] bg-white hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
                        >
                            <div className="w-full h-[254px] bg-gray-200">
                                <img
                                    className="w-full h-[254px] object-cover transition-opacity duration-500 opacity-100"
                                    src={property.image}
                                    alt="Property"
                                />
                            </div>

                            {/* This div now expands and ensures the link stays at the bottom */}
                            <div className="p-6 flex flex-col justify-between flex-grow">
                                {/* Conditional Rendering for New Projects */}
                                {property.isNewProject ? (
                                    <>
                                        <h1 className="font-garamond500 text-[#5B3767] text-2xl mb-3 text-left">
                                            {property.projectName}
                                        </h1>
                                        <h2 className="font-infant600 text-[#5B3767] text-2xl font-bold mb-4 text-left">
                                            {formatPrice(property.price)} EUR
                                        </h2>
                                        <div className="w-full border-b-[1px] border-[#9C9150] mb-4"></div>
                                        <div
                                            className="font-barlow400 grid grid-cols-[auto_1fr] text-sm gap-y-2 text-left text-[#5B3767]">
                                            <span>{t("jaunakieObjekti.spanObjekti2")}</span>
                                            <span className="font-semibold text-right">
                                                {t(propertyTypeToTranslationKey[property.type] || "objekti.liObjekti7")}
                                            </span>

                                            <span>{t("objektiIeskats.spanIeskats2")}</span>
                                            <span className="font-semibold text-right">
                                                {property.size} m²
                                            </span>

                                            <span>{t("objektiIeskats.spanIeskats3")}</span>
                                            <span className="font-semibold text-right">
                                                {property.rooms}
                                            </span>

                                            <span>{t("objektiIeskats.spanIeskats4")}</span>
                                            <span className="font-semibold text-right">
                                                {property.floors}
                                            </span>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <h1 className="font-garamond500 text-[#5B3767] text-2xl mb-3 text-left">
                                            {t(transactionTypeToTranslationKey[property.transactionType] || property.transactionType)}
                                        </h1>
                                        <h2 className="font-infant600 text-[#5B3767] text-2xl font-bold mb-4 text-left">
                                            {formatPrice(property.price)} EUR
                                        </h2>
                                        <div className="w-full border-b-[1px] border-[#9C9150] mb-4"></div>
                                        <div
                                            className="font-barlow400 grid grid-cols-[auto_1fr] text-sm gap-y-2 text-left text-[#5B3767]">
                                            <span>{t("jaunakieObjekti.spanObjekti1")}</span>
                                            <span
                                                className="font-semibold text-right break-words">{property.address}</span>

                                            <span>{t("jaunakieObjekti.spanObjekti2")}</span>
                                            <span className="font-semibold text-right">
                        {t(propertyTypeToTranslationKey[property.type] || "objekti.liObjekti7")}
                    </span>

                                            <span>{t(propertySizeLabelKey[property.type] || propertySizeLabelKey.default)}</span>
                                            <span className="font-semibold text-right">
                        {property.type === "Land" ? `${property.size} m²` : property.rooms}
                    </span>
                                        </div>
                                    </>
                                )}

                                {/* This will now always be at the bottom */}
                                <div className="flex justify-start text-[#9C9150] text-sm mt-auto pt-4">
                                    {t("jaunakieObjekti.aObjekti")} <span className="ml-1">&rarr;</span>
                                </div>
                            </div>
                        </a>

                    ))}
                </div>
                <div className="font-infant600 flex justify-center items-center mt-8 space-x-2">
                    {/* Previous Page Button */}
                    <button
                        onClick={handlePrevPage}
                        className="text-[#9C9150] disabled:opacity-50"
                        disabled={currentPage === 1}
                    >
                        &larr;
                    </button>

                    {/* Page Numbers */}
                    <div className="flex space-x-2">
                        {/* Always show the first page */}
                        <button
                            onClick={() => handlePageChange(1)}
                            className={`px-3 py-1 text-sm ${
                                currentPage === 1
                                    ? "text-[#9C9150] font-bold border border-[#9C9150]"
                                    : "text-[#9C9150]"
                            }`}
                        >
                            1
                        </button>

                        {/* Show dots if currentPage is greater than 3 */}
                        {currentPage > 3 && <span className="text-[#9C9150]">...</span>}

                        {/* Show 3 pages around the current page */}
                        {Array.from({length: 5}, (_, index) => {
                            const page = currentPage - 2 + index;
                            if (page > 1 && page < totalPages) {
                                return (
                                    <button
                                        key={page}
                                        onClick={() => handlePageChange(page)}
                                        className={`px-3 py-1 text-sm ${
                                            currentPage === page
                                                ? "text-[#9C9150] font-bold border border-[#9C9150]"
                                                : "text-[#9C9150]"
                                        }`}
                                    >
                                        {page}
                                    </button>
                                );
                            }
                            return null;
                        })}

                        {/* Show dots if currentPage is less than totalPages - 2 */}
                        {currentPage < totalPages - 2 && <span className="text-[#9C9150]">...</span>}

                        {/* Always show the last page */}
                        <button
                            onClick={() => handlePageChange(totalPages)}
                            className={`px-3 py-1 text-sm ${
                                currentPage === totalPages
                                    ? "text-[#9C9150] font-bold border border-[#9C9150]"
                                    : "text-[#9C9150]"
                            }`}
                        >
                            {totalPages}
                        </button>
                    </div>

                    {/* Next Page Button */}
                    <button
                        onClick={handleNextPage}
                        className="text-[#9C9150] disabled:opacity-50"
                        disabled={currentPage === totalPages}
                    >
                        &rarr;
                    </button>
                </div>

            </section>
        </div>
    );
}

export default Objekti;