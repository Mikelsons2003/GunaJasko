import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import objekts1 from "../../img/objekts1.webp";
import GunaJaskoBlue from "../../img/GunaJaskoBlue.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import LazyBackground from "./LazyBackground";

function ObjektiIeskats() {
    const { id } = useParams();
    const [property, setProperty] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const response = await fetch(`https://backends.lucid-websites.com/wp-json/wp/v2/posts/${id}`);
                const data = await response.json();

                const featuredMediaResponse = await fetch(data._links["wp:featuredmedia"][0].href);
                const featuredMediaData = await featuredMediaResponse.json();
                const fullSizeImageUrl = featuredMediaData.media_details.sizes.full.source_url;

                const content = data.content.rendered;
                const imageRegex = /<a[^>]+href="([^">]+)"/g;
                const images = [];
                let match;
                while ((match = imageRegex.exec(content)) !== null) {
                    images.push(match[1]);
                }

                const formattedData = {
                    id: data.id,
                    header: data.title.rendered,
                    price: parseFloat(content.match(/<label>Property Value:<\/label>\s*([^<]+)/)[1].trim()) || 0,
                    address: content.match(/<label>Address:<\/label>\s*([^<]+)/)[1].trim(),
                    type: content.match(/<label>Property Type:<\/label>\s*([^<]+)/)[1].trim(),
                    size: parseFloat(content.match(/<label>Size:<\/label>\s*([^<]+)/)[1].trim()) || 0,
                    rooms: parseInt(content.match(/<label>Room Count:<\/label>\s*([^<]+)/)[1].trim()) || 0,
                    floors: parseInt(content.match(/<label>Floor\/s:<\/label>\s*([^<]+)/)[1].trim()) || 0,
                    descriptionENG: content.match(/<label>Property Description ENG:<\/label>\s*([\s\S]*?)<\/li>/)[1].trim(),
                    descriptionLV: content.match(/<label>Property Description LV:<\/label>\s*([\s\S]*?)<\/li>/)[1].trim(),
                    descriptionRU: content.match(/<label>Property Description RU:<\/label>\s*([\s\S]*?)<\/li>/)[1].trim(),
                    images: images,
                    image: fullSizeImageUrl || objekts1,
                };
                setProperty(formattedData);
            } catch (error) {
                console.error("Error fetching property:", error);
            }
        };
        fetchProperty();
    }, [id]);

    if (!property) {
        return <div>Loading...</div>;
    }

    // Open Lightbox
    const openImage = (index) => {
        setCurrentIndex(index);
        setSelectedImage(property.images[index]);
    };

    // Close Lightbox
    const closeLightbox = () => {
        setSelectedImage(null);
    };

    // Navigate Images
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

    return (
        <div className="mx-auto">
            <LazyBackground
                image={objekts1}
                className="relative w-full h-[341px] bg-cover bg-center pt-24"
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </LazyBackground>
            {/* Existing content unchanged */}
            <section className="w-full max-w-screen-xl mx-auto py-12 px-4 lg:px-6 bg-white text-[#5B3767]">
                <div className="flex flex-col sm:items-start lg:items-start space-y-4 mb-14 text-center lg:text-left">
                    <div
                        className="font-barlow400 flex items-center justify-center lg:justify-start space-x-2 text-sm uppercase mb-10 mt-6">
                        <span className="font-semibold">Objekti</span>
                        <span>&rarr;</span>
                        <span className="font-semibold">Dzīvokļi</span>
                        <span>&rarr;</span>
                        <span className="font-semibold">Pārdod</span>
                    </div>
                    <h1 className="font-garamond500 text-2xl">{property.header}</h1>
                    <h1 className="font-infant600 text-3xl">{property.price} EUR</h1>
                </div>

                <LazyBackground
                    image={property.image}
                    className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[662px] max-w-[1224px] mx-auto flex items-center justify-center bg-cover bg-center"
                ></LazyBackground>
            </section>

            <section className="w-full max-w-screen-xl mx-auto px-4 lg:px-6">
                <div className="w-full md:w-[742px] py-12 bg-white text-[#5B3767]">
                    <div className="grid grid-cols-2 lg:grid-cols-4">
                        <div className="text-center lg:text-left space-y-2 font-barlow400">
                            <span className="block">Adrese</span>
                            <span className="block">Ēkas tips</span>
                        </div>
                        <div className="text-center lg:text-left space-y-2 font-barlow500">
                            <span className="block font-semibold">{property.address}</span>
                            <span className="block font-semibold">{property.type}</span>
                        </div>
                        <div className="text-center lg:text-right space-y-2 font-barlow400 mt-6 lg:mt-0">
                            <span className="block">Platība</span>
                            <span className="block">Istabu sk.</span>
                            <span className="block">Stāvs</span>
                        </div>
                        <div className="text-center lg:text-right space-y-2 font-barlow500 mt-6 lg:mt-0">
                            <span className="block font-semibold">{property.size} m²</span> {/* Display Size */}
                            <span className="block font-semibold">{property.rooms}</span>
                            <span className="block font-semibold">{property.floors}</span> {/* Display Floors */}
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-[847px] max-w-screen-xl relative z-10 text-left mt-6 mb-12">
                    <div className="border-b-[1px] border-[#CDC697]"></div>
                </div>

                <div className="w-full text-left description">
                    <div
                        className="font-barlow400 text-[#5B3767] leading-relaxed"
                        dangerouslySetInnerHTML={{__html: property.descriptionLV}} // Render HTML
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

                {/* Button Section */}
                <div className="mt-12 flex justify-center">
                    <a href="https://guna.lucid-websites.com/kontakti">
                        <button
                            className="font-barlow500 w-[274px] h-[55px] bg-[#5B3767] text-[#CDC697] text-sm hover:bg-[#371243] transition duration-300 ease-in-out">
                            SAZINĀTIES
                        </button>
                    </a>
                </div>
            </div>

            {/* Lightbox (Fullscreen Image View) */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                    >
                        {/* Close Button */}
                        <button className="absolute top-4 right-4 text-white text-3xl" onClick={closeLightbox}>
                            <X size={32}/>
                        </button>

                        {/* Main Image */}
                        <motion.img
                            key={selectedImage}
                            src={selectedImage}
                            alt="Fullscreen"
                            className="max-w-[90vw] max-h-[80vh] rounded-lg"
                            initial={{scale: 0.8}}
                            animate={{scale: 1}}
                            exit={{scale: 0.8}}
                        />

                        {/* Navigation */}
                        <div className="flex items-center justify-between w-full px-10 mt-4">
                            <button className="text-white text-3xl" onClick={prevImage}>
                                <ChevronLeft size={40}/>
                            </button>
                            <button className="text-white text-3xl" onClick={nextImage}>
                                <ChevronRight size={40}/>
                            </button>
                        </div>

                        {/* Thumbnails Under Image */}
                        <div className="flex gap-4 mt-6">
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
                                NEKUSTAMO ĪPAŠUMU AĢENTS
                            </p>
                            <p className="font-barlow400 text-lg">TĀLR.: +371 20 016 688</p>
                            <p className="font-barlow400 text-lg">E-PASTS: JASKOGUNA@GMAIL.COM</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center lg:items-end space-y-4 mt-8 lg:mt-0">
                        <h1 className="font-barlow500 text-[#9C9150] text-xl">DALĪTIES</h1>
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
