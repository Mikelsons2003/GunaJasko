import React, {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {ChevronLeft, ChevronRight, X} from "lucide-react";
import objekts1 from "../../img/objekts1.webp";
import GunaJaskoBlue from "../../img/GunaJaskoBlue.png";
import {FaFacebookF, FaInstagram} from "react-icons/fa";
import LazyBackground from "./LazyBackground";
import {useLocation, useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {PiArrowRightThin} from "react-icons/pi";
import DOMPurify from "dompurify";
import LoadingSpinner from "./Extra/LoadingSpinner";


function ObjektiIeskats() {
    const {id} = useParams();
    const location = useLocation();
    const [property, setProperty] = useState(null);
    const {t, i18n} = useTranslation();
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const searchParams = new URLSearchParams(location.search);
    const propertyType = searchParams.get("propertyType") || "all";
    const transactionType = searchParams.get("transactionType") || "all";

    // Helper function to extract field values from content
    const extractField = (content, fieldName) => {
        const regex = new RegExp(
            `<li[^>]*>\\s*<label>${fieldName}:<\\/label>\\s*([\\s\\S]*?)<\\/li>`,
            "i"
        );
        const match = content.match(regex);
        return match ? match[1].trim() : "Not available";
    };

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                // Fetch property data
                const response = await fetch(`https://backends.lucid-websites.com/wp-json/wp/v2/posts/${id}`);
                const data = await response.json();
                console.log("Fetched Data:", data);

                // Fetch featured media (main image)
                const featuredMediaResponse = await fetch(data._links["wp:featuredmedia"][0].href);
                const featuredMediaData = await featuredMediaResponse.json();
                const fullSizeImageUrl = featuredMediaData.media_details.sizes.full.source_url;

                // Extract images from content
                const content = data.content.rendered;
                const imageRegex = /<a[^>]+href="([^">]+)"/g;
                const images = [];
                let match;
                while ((match = imageRegex.exec(content)) !== null) {
                    images.push(match[1]);
                }

                // Extract titles and descriptions
                const titleLV = extractField(content, "Property Title LV");
                const titleRU = extractField(content, "Property Title RU");
                const titleENG = data.title.rendered;

                const descriptionENG = extractField(content, "Property Description ENG");
                const descriptionLV = extractField(content, "Property Description LV");
                const descriptionRU = extractField(content, "Property Description RU");

                // Extract extra category
                const extraCategory = extractField(content, "Extra Category");

                // Format property data
                const formattedData = {
                    id: data.id,
                    header: titleENG,
                    titleLV: titleLV,
                    titleRU: titleRU,
                    price: parseFloat(extractField(content, "Property Value")) || 0,
                    address: extractField(content, "Address"),
                    type: extractField(content, "Property Type"),
                    size: parseFloat(extractField(content, "Size")) || 0,
                    rooms: parseInt(extractField(content, "Room Count")) || 0,
                    floors: parseInt(extractField(content, "Floor/s")) || 0,
                    descriptionENG: descriptionENG,
                    descriptionLV: descriptionLV,
                    descriptionRU: descriptionRU,
                    images: images,
                    image: fullSizeImageUrl || objekts1, // Fallback to objekts1 if no image
                    transactionType: extractField(content, "Transaction Type"),
                    isNewProject: extraCategory.toLowerCase().includes("new project"), // Check if it's a New Project
                    isInvestmentProperty: extraCategory.toLowerCase().includes("investment property"), // Check if it's an Investment Property
                    projectName: extractField(content, "Project Name"), // Extract Project Name
                };

                setProperty(formattedData);
            } catch (error) {
                console.error("Error fetching property:", error);
            }
        };

        fetchProperty();
    }, [id]);

    if (!property) {
        return <LoadingSpinner/>;
    }
    // Translation mappings
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

    const transactionTypeToDisplay = {
        Rent: "objekti.liObjekti8", // "Izīrē" in Lv, "Rent" in Eng, "Аренда" in Ru
        Sell: "objekti.liObjekti9", // "Pārdod" in Lv, "Sell" in Eng, "Продажа" in Ru
    };

    const formatPrice = (price) => {
        if (price > 99999) {
            // Convert the number to a string and add a space every 3 digits
            return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        }
        return price.toString(); // Return the number as is if it's less than 100000
    };

    // Lightbox functions
    const openImage = (index) => {
        setCurrentIndex(index);
        setSelectedImage(property.images[index]);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const prevImage = () => {
        const newIndex = currentIndex === 0 ? property.images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setSelectedImage(property.images[newIndex]);
    };

    const nextImage = () => {
        const newIndex = currentIndex === property.images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setSelectedImage(property.images[newIndex]);
    };

    // Get the description based on the current language
    const getDescription = () => {
        if (!property) return ""; // Return empty string if property is not loaded
        switch (i18n.language) {
            case "lv":
                return property.descriptionLV;
            case "ru":
                return property.descriptionRU;
            default:
                return property.descriptionENG;
        }
    };

// Sanitize and render description
    const description = getDescription();
    const sanitizedDescription = description ? DOMPurify.sanitize(description) : "No description available.";

    return (
        <div className="mx-auto">
            {/* Hero Section */}
            <LazyBackground
                image={objekts1}
                className="relative w-full h-[341px] bg-cover bg-center pt-24"
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </LazyBackground>

            {/* Property Details Section */}
            <section className="w-full max-w-screen-xl mx-auto py-12 px-4 lg:px-6 bg-white text-[#9C9150]">
                <div className="flex flex-col sm:items-start lg:items-start space-y-4 mb-14 text-center lg:text-left">
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
                                    {t(transactionTypeToTranslationKey[transactionType])}
                                </span>
                            </>
                        )}
                    </div>
                    {/* Title and Transaction Type */}
                    <h1 className="font-garamond500 text-2xl text-[#5B3767]">
                        {!property.isNewProject && !property.isInvestmentProperty && (
                            <span className="pr-1">
                                {t(transactionTypeToDisplay[property.transactionType])}
                            </span>
                        )}
                        {i18n.language === "lv" ? property.titleLV :
                            i18n.language === "ru" ? property.titleRU :
                                property.header}
                    </h1>

                    {/* Price */}
                    <h1 className="font-infant600 text-3xl text-[#5B3767]">
                        {formatPrice(property.price)} EUR
                    </h1>
                </div>

                {/* Main Image */}
                <LazyBackground
                    image={property.image}
                    className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[662px] max-w-[1224px] mx-auto flex items-center justify-center bg-cover bg-center"
                ></LazyBackground>
            </section>

            {/* Property Info Section */}
            <section className="w-full max-w-screen-xl mx-auto lg:px-6">
                <div className="w-full md:w-[800px] py-12 bg-white text-[#5B3767]">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* First Column: Labels */}
                        <div className="text-center lg:text-left space-y-2 font-barlow400">
                            <span className="block">{t("jaunakieObjekti.spanObjekti1")}</span>
                            <span className="pt-6 xxs:pt-0 block">{t("objektiIeskats.spanIeskats1")}</span>
                        </div>

                        {/* Second Column: Values */}
                        <div className="text-center lg:text-left space-y-2 font-barlow500">
                                <span className="block font-semibold break-words w-full xxs:whitespace-nowrap">
                                    {property.address}
                                </span>
                            <span className="block font-semibold break-words whitespace-nowrap">
                                {t(propertyTypeToTranslationKey[property.type])} {/* Translate property type */}
                            </span>
                        </div>

                        {/* Third Column: Labels */}
                        <div className="text-center lg:text-right space-y-2 font-barlow400">
                            <span className="block">{t("objektiIeskats.spanIeskats2")}</span>
                            {property.type !== "Land" && !property.isNewProject && !property.isInvestmentProperty && (
                                <>
                                    <span className="block">{t("objektiIeskats.spanIeskats3")}</span>
                                    <span className="block">
                                        {property.type === "House"
                                            ? t("objektiIeskats.spanIeskats7")
                                            : t("objektiIeskats.spanIeskats4")}
                                    </span>
                                </>
                            )}
                        </div>

                        {/* Fourth Column: Values */}
                        <div className="text-center lg:text-right space-y-2 font-barlow500">
                                    <span className="block font-semibold break-words whitespace-nowrap">
                                        {property.size} m²
                                    </span>
                            {property.type !== "Land" && !property.isNewProject && !property.isInvestmentProperty && (
                                <>
                                    <span className="block font-semibold break-words whitespace-nowrap">
                                        {property.rooms}
                                    </span>
                                    <span className="block font-semibold break-words whitespace-nowrap">
                                        {property.floors}
                                    </span>
                                </>
                            )}
                        </div>
                    </div>
                </div>


                {/* Description Section */}
                <div className="w-full lg:w-[847px] max-w-screen-xl relative z-10 text-left mt-6 mb-12">
                    <div className="border-b-[1px] border-[#CDC697]"></div>
                </div>

                <div className="w-full text-center description lg:text-left">
                    <div
                        className="font-barlow400 text-[#5B3767] leading-relaxed"
                        dangerouslySetInnerHTML={{__html: sanitizedDescription}}
                    />
                </div>
            </section>

            {/* Image Grid Section */}
            <div className="w-full max-w-screen-xl mx-auto px-4 py-8 justify-center items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center">
                    {property.images.map((src, index) => (
                        <div key={index} className="w-[280px]">
                            <img
                                src={src}
                                alt={`Property Image ${index + 1}`}
                                className="w-[280px] h-[209px] object-cover cursor-pointer"
                                onClick={() => openImage(index)}
                            />
                        </div>
                    ))}
                </div>

                {/* Contact Button */}
                <div className="mt-12 flex justify-center">
                    <a href="https://guna.lucid-websites.com/kontakti">
                        <button
                            className="font-barlow500 w-[274px] h-[55px] bg-[#5B3767] text-[#CDC697] text-sm hover:bg-[#371243] transition duration-300 ease-in-out">
                            {t("parmani.buttonParmani")}
                        </button>
                    </a>
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                    >
                        {/* Close button */}
                        <button className="absolute top-4 right-4 text-white text-3xl" onClick={closeLightbox}>
                            <X size={32}/>
                        </button>

                        {/* Left Arrow */}
                        <button
                            className="absolute left-4 text-white text-3xl top-1/2 transform -translate-y-1/2"
                            onClick={prevImage}
                        >
                            <ChevronLeft size={40}/>
                        </button>

                        {/* Big Image */}
                        <motion.img
                            key={selectedImage}
                            src={selectedImage}
                            alt="Fullscreen"
                            className="max-w-[90vw] max-h-[80vh] rounded-lg"
                            initial={{scale: 0.8}}
                            animate={{scale: 1}}
                            exit={{scale: 0.8}}
                        />

                        {/* Right Arrow */}
                        <button
                            className="absolute right-4 text-white text-3xl top-1/2 transform -translate-y-1/2"
                            onClick={nextImage}
                        >
                            <ChevronRight size={40}/>
                        </button>

                        {/* Thumbnails */}
                        <div className="flex gap-4 mt-6 absolute bottom-8">
                            {property.images.map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt={`Thumbnail ${index}`}
                                    className={`w-16 h-16 object-cover cursor-pointer rounded-md ${
                                        currentIndex === index ? "border-4 border-white" : ""
                                    }`}
                                    onClick={() => openImage(index)}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Footer Section */}
            <section className="w-full max-w-screen-xl mx-auto py-12 px-4 lg:px-6 text-[#5B3767] mb-8">
                <div
                    className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-end lg:space-y-0 text-center lg:text-left">
                    <div className="flex flex-col lg:flex-row items-center lg:items-end lg:space-x-8">
                        <LazyBackground
                            image={GunaJaskoBlue}
                            className="w-[182px] h-[275px] bg-cover bg-center mb-6 lg:mb-0"
                        ></LazyBackground>
                        <div className="flex flex-col space-y-2">
                            <h2 className="font-garamond500 text-4xl">GUNA JASKO</h2>
                            <p className="font-barlow500 text-lg uppercase tracking-wide">
                                {t("objektiIeskats.spanIeskats6")}
                            </p>
                            <p className="font-barlow400 text-lg">TĀLR.: +371 20 016 688</p>
                            <p className="font-barlow400 text-lg">E-PASTS: guna.jasko@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center lg:items-end space-y-4 mt-8 lg:mt-0">
                        <h1 className="font-barlow500 text-[#9C9150] text-xl">{t("objektiIeskats.spanIeskats5")}</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <a
                                href="https://www.facebook.com/profile.php?id=100062951665076&mibextid=wwXIfr&rdid=hCVlgIdTGejCSuBS&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1u4u65Eu5izWGVmZ%2F%3Fmibextid%3DwwXIfr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center border-2 border-[#5B3767] rounded-md"
                            >
                                <FaFacebookF className="text-[#5B3767]"/>
                            </a>
                            <a
                                href="https://www.instagram.com/gunarealty/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center border-2 border-[#5B3767] rounded-md"
                            >
                                <FaInstagram className="text-[#5B3767]"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ObjektiIeskats;