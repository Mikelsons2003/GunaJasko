import React, {useEffect, useState} from "react";
import JaunakieObjekti from '../../img/JaunakieObjekti.webp';
import ArrowLeft from '../../img/ArrowLeft.png';
import ArrowRight from '../../img/ArrowRight.png';
import {useTranslation} from "react-i18next";

const JaunakieObjektiSection = () => {
    const {t, i18n} = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [recentProjects, setRecentProjects] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await fetch("http://intra.gunajasko.lv/wp-json/wp/v2/posts");
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
                        image: item.featured_media_src_url || JaunakieObjekti,
                        date: new Date(item.date),
                        isInvestmentProperty: extraCategory.includes("Investment Property"),
                        isNewProject: extraCategory.toLowerCase().includes("new project"),
                        projectName: projectName || null,
                    };
                });

                // Sort by date and get the 3 most recent projects
                const sortedProjects = formattedData.sort((a, b) => b.date - a.date).slice(0, 3);
                setRecentProjects(sortedProjects);
            } catch (error) {
                console.error("Error fetching properties:", error);
            }
        };
        fetchProperties();
    }, []);

    const extractField = (content, fieldName) => {
        const regex = new RegExp(`<label>${fieldName}:<\\/label>\\s*([^<]+)`);
        const match = content.match(regex);
        return match ? match[1].trim() : "Not available";
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + recentProjects.length) % recentProjects.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % recentProjects.length);
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

    return (
        <section className="py-16 bg-white flex items-center justify-center min-h-screen">
            <div className="container mx-auto flex flex-col items-center justify-center">
                {/* Heading */}
                <h1 className={`font-garamond500 text-center text-[#5B3767] text-4xl mb-12 ${i18n.language === 'ru' ? 'text-ru-h' : ''}`}>{t("jaunakieObjekti.headerObjekti")}</h1>

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
                        {recentProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`w-full md:w-1/2 lg:w-1/3 transition-transform duration-[700ms] ease-in-out ${
                                    index === currentIndex
                                        ? "translate-x-0 opacity-100 visible"
                                        : "hidden lg:block" // Show all cards on large screens
                                }`}
                            >
                                <div
                                    className="border border-[#CDC697] w-[261px] md:w-[311px] 2xl:w-[341px] h-full mx-auto">
                                    {/* Image */}
                                    <div
                                        className="w-[260px] md:w-[310px] 2xl:w-[340px] h-[254px] bg-gray-200"
                                        style={{
                                            backgroundImage: `url(${project.image})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                    ></div>

                                    {/* Content */}
                                    <div className="p-4 sm:p-6">
                                        {/* Header */}
                                        <div className="font-garamond500 text-left">
                                            <h1 className="text-[#5B3767] text-xl mb-3">
                                                {project.projectName !== "Not available"
                                                    ? project.projectName
                                                    : transactionTypeToTranslationKey[project.transactionType]
                                                        ? t(transactionTypeToTranslationKey[project.transactionType])
                                                        : "Unnamed Project"}
                                            </h1>
                                        </div>

                                        {/* Price */}
                                        <div className="text-left">
                                            <h2 className="font-infant600 text-[#5B3767] text-2xl font-bold mb-4">{project.price} EUR</h2>
                                        </div>

                                        {/* Divider */}
                                        <div className="w-full max-w-screen-xl mx-auto mb-4">
                                            <div className="border-b-[1px] border-[#CDC697]"></div>
                                        </div>

                                        {/* Details */}
                                        <div className="font-barlow400 grid grid-cols-2 text-sm text-[#5B3767] gap-y-2">
                                            <span className="text-left py-1">{t("jaunakieObjekti.spanObjekti1")}</span>
                                            <span className="text-right font-semibold">{project.address}</span>

                                            <span className="text-left pb-1">{t("jaunakieObjekti.spanObjekti2")}</span>
                                            <span
                                                className="text-right font-semibold">{t(propertyTypeToTranslationKey[project.type] || "objekti.liObjekti7")}</span>

                                            <span className="text-left">{t("objektiIeskats.spanIeskats3")}</span>
                                            <span className="text-right font-semibold">{project.rooms}</span>
                                        </div>

                                        {/* View More Link */}
                                        <div className="text-left">
                                            <a
                                                href={`/objekti/${project.id}?propertyType=${project.type}&transactionType=${project.transactionType}&lang=${i18n.language}`}
                                                className="font-barlow500 text-[#CDC697] text-sm mt-6 inline-flex items-center"
                                            >
                                                {t("jaunakieObjekti.aObjekti")} <span className="ml-1">&rarr;</span>
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
                            {t("jaunakieObjekti.buttonObjekti")}
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default JaunakieObjektiSection;
