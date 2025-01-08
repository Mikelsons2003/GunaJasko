import axios from "axios";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {AiOutlineClose} from "react-icons/ai";

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "https://guna.lucid-websites.com/api";

const AddProperty = () => {
    const [formData, setFormData] = useState({
        title: "",
        titleEng: "",
        titleRu: "",
        category: "Apartment",
        transactionType: "Sell",
        price: "",
        address: "",
        size: "",
        roomCount: "",
        floor: "",
        description: "",
        descriptionEng: "",
        descriptionRu: "",
    });
    const [mainImage, setMainImage] = useState(null);
    const [collageImages, setCollageImages] = useState([]);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleMainImageChange = (e) => {
        setMainImage(e.target.files[0]);
    };

    const handleAddCollageImage = (e) => {
        const files = Array.from(e.target.files);
        setCollageImages((prevImages) => [...prevImages, ...files]);
    };

    const handleRemoveCollageImage = (index) => {
        setCollageImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check required fields
        const requiredFields = ["title", "titleEng", "titleRu", "category", "price", "address", "size", "roomCount", "floor", "description", "descriptionEng", "descriptionRu"];
        for (let field of requiredFields) {
            if (!formData[field]) {
                alert(`Please fill the ${field} field.`);
                return;
            }
        }

        if (!mainImage) {
            alert("Please upload a main image.");
            return;
        }

        if (collageImages.length === 0) {
            alert("Please upload at least one collage image.");
            return;
        }

        const requestData = new FormData();
        for (const key in formData) {
            requestData.append(key, formData[key]);
        }

        requestData.append("mainImage", mainImage);

        // Append collage images
        collageImages.forEach((image) => {
            requestData.append("collageImages", image);
        });

        try {
            console.log("Sending request to add property...");
            const response = await axios.post(`${API_BASE_URL}/properties`, requestData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log("Property added:", response.data);
            alert("Property added successfully!");
            console.log("Navigating to /properties");

            // Navigate immediately after successful addition
            navigate("/properties");
        } catch (error) {
            console.error("Error adding property:", error);
            alert("Failed to add property. Please check your inputs and try again.");
        }
    };

    // Test navigation function
    const navigateToProperties = () => {
        console.log("Testing navigation to /properties");

        // Add a delay before navigating
        setTimeout(() => {
            navigate("/properties");
        }, 2000); // 2000ms (2 seconds) delay
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Pievienot jaunu īpašumu</h2>
            <form onSubmit={handleSubmit}>
                {/* Existing Title (Latvian) */}
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Virsraksts (latviešu
                        valodā)</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                {/* Title (English) */}
                <div className="mb-4">
                    <label htmlFor="titleEng" className="block text-sm font-medium text-gray-700">Virsraksts (angļu
                        valodā)</label>
                    <input
                        type="text"
                        id="titleEng"
                        name="titleEng"
                        value={formData.titleEng}
                        onChange={handleChange}
                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                {/* Title (Russian) */}
                <div className="mb-4">
                    <label htmlFor="titleRu" className="block text-sm font-medium text-gray-700">Virsraksts (krievu
                        valodā)</label>
                    <input
                        type="text"
                        id="titleRu"
                        name="titleRu"
                        value={formData.titleRu}
                        onChange={handleChange}
                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                {/* Category */}
                <div className="mb-4">
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Kategorija</label>
                    <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                    >
                        <option value="Apartment">Dzīvoklis</option>
                        <option value="House">Māja</option>
                        <option value="Land">Zeme</option>
                    </select>
                </div>

                {/* Transaction Type */}
                <div className="mb-4">
                    <label htmlFor="transactionType" className="block text-sm font-medium text-gray-700">Pirkuma
                        veids</label>
                    <select
                        id="transactionType"
                        name="transactionType"
                        value={formData.transactionType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                    >
                        <option value="Sell">Pārdod</option>
                        <option value="Rent">Izīrē</option>
                    </select>
                </div>

                {/* Price */}
                <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Cena</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                {/* Address */}
                <div className="mb-4">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Adrese</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                {/* Size */}
                <div className="mb-4">
                    <label htmlFor="size" className="block text-sm font-medium text-gray-700">Izmērs m2</label>
                    <input
                        type="number"
                        id="size"
                        name="size"
                        value={formData.size}
                        onChange={handleChange}
                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                {/* Room Count */}
                <div className="mb-4">
                    <label htmlFor="roomCount" className="block text-sm font-medium text-gray-700">Istabu skaits</label>
                    <input
                        type="number"
                        id="roomCount"
                        name="roomCount"
                        value={formData.roomCount}
                        onChange={handleChange}
                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                {/* Floor */}
                <div className="mb-4">
                    <label htmlFor="floor" className="block text-sm font-medium text-gray-700">Stāvs/i</label>
                    <input
                        type="number"
                        id="floor"
                        name="floor"
                        value={formData.floor}
                        onChange={handleChange}
                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                {/* Existing Description (Latvian) */}
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Apraksts(latviešu
                        valodā)</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                {/* Description (English) */}
                <div className="mb-4">
                    <label htmlFor="descriptionEng" className="block text-sm font-medium text-gray-700">Apraksts(angļu
                        valodā)</label>
                    <textarea
                        id="descriptionEng"
                        name="descriptionEng"
                        value={formData.descriptionEng}
                        onChange={handleChange}
                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                {/* Description (Russian) */}
                <div className="mb-4">
                    <label htmlFor="descriptionRu" className="block text-sm font-medium text-gray-700">Apraksts(krievu
                        valodā)</label>
                    <textarea
                        id="descriptionRu"
                        name="descriptionRu"
                        value={formData.descriptionRu}
                        onChange={handleChange}
                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                {/* Main Image */}
                <div className="mb-4">
                    <label htmlFor="mainImage" className="block text-sm font-medium text-gray-700">Galvenais
                        attēls</label>
                    <input
                        type="file"
                        id="mainImage"
                        name="mainImage"
                        onChange={handleMainImageChange}
                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                        accept="image/*"
                    />
                </div>

                {/* Collage Images */}
                <div className="mb-4">
                    <label htmlFor="collageImages" className="block text-sm font-medium text-gray-700">Īpašumu
                        attēli</label>
                    <input
                        type="file"
                        id="collageImages"
                        name="collageImages"
                        onChange={handleAddCollageImage}
                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
                        accept="image/*"
                        multiple
                    />
                    <div className="mt-2 flex flex-wrap">
                        {collageImages.map((image, index) => (
                            <div key={index} className="relative m-2">
                                <img src={URL.createObjectURL(image)} alt={`Collage ${index}`}
                                     className="w-24 h-24 object-cover"/>
                                <button
                                    type="button"
                                    onClick={() => handleRemoveCollageImage(index)}
                                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                                >
                                    <AiOutlineClose/>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <button onClick={navigateToProperties} type="submit"
                        className="bg-[#5B3767] hover:bg-[#7A4D8F] active:bg-[#3F1E47] text-white font-bold py-2 px-4 sm:px-6 rounded-md shadow-md ease-in-out duration-500">
                    Pievienot
                </button>
            </form>
        </div>
    );
};

export default AddProperty;