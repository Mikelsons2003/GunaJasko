import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "https://guna.lucid-websites.com/api";

const UpdateProperty = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [property, setProperty] = useState({
        title: "",
        titleEng: "",
        titleRu: "",
        description: "",
        descriptionEng: "",
        descriptionRu: "",
        price: "",
        category: "",
        transactionType: "",
        address: "",
        size: "",
        roomCount: "",
        floor: "",
        mainImage: "",
        collageImages: [],
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const propertyResponse = await axios.get(`${API_BASE_URL}/properties/${id}`);
                setProperty({
                    ...propertyResponse.data,
                    collageImages: propertyResponse.data.collageImages || [],
                });
            } catch (err) {
                console.error("Error fetching property:", err.response?.data || err.message);
                setError("Failed to fetch property details.");
            }
        };

        fetchProperty().catch(err => {
            console.error("Error in fetchProperty:", err);
            setError("Failed to fetch property details.");
        });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProperty((prev) => ({ ...prev, [name]: value }));
    };

    const handleMainImageChange = (e) => {
        setProperty((prev) => ({ ...prev, mainImage: e.target.files[0] }));
    };

    const handleRemoveMainImage = () => {
        setProperty((prev) => ({ ...prev, mainImage: "" }));
    };

    const handleCollageImagesChange = (e) => {
        const files = Array.from(e.target.files);
        setProperty((prev) => ({
            ...prev,
            collageImages: [...prev.collageImages, ...files],
        }));
    };

    const handleRemoveCollageImage = (index) => {
        setProperty((prev) => ({
            ...prev,
            collageImages: prev.collageImages.filter((_, i) => i !== index),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const formData = new FormData();
            for (const key in property) {
                if (key === "collageImages") {
                    property[key].forEach((image) => {
                        formData.append("collageImages", image);
                    });
                } else if (key === "mainImage" && property[key] instanceof File) {
                    formData.append("mainImage", property[key]);
                } else {
                    formData.append(key, property[key]);
                }
            }

            await axios.put(`${API_BASE_URL}/properties/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            navigate("/properties");
        } catch (err) {
            console.error("Error updating property:", err.response?.data || err.message);
            setError("Failed to update property.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-6">Atjaunināt Īpašumu</h1>

            {error && <p className="text-red-500">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700">Virsraksts (latviešu valodā)</label>
                    <input
                        type="text"
                        name="title"
                        value={property.title}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Virsraksts (angļu valodā)</label>
                    <input
                        type="text"
                        name="titleEng"
                        value={property.titleEng}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Virsraksts (krievu valodā)</label>
                    <input
                        type="text"
                        name="titleRu"
                        value={property.titleRu}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Apraksts (latviešu valodā)</label>
                    <textarea
                        name="description"
                        value={property.description}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-2 border rounded-md"
                    ></textarea>
                </div>

                <div>
                    <label className="block text-gray-700">Apraksts (angļu valodā)</label>
                    <textarea
                        name="descriptionEng"
                        value={property.descriptionEng}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-2 border rounded-md"
                    ></textarea>
                </div>

                <div>
                    <label className="block text-gray-700">Apraksts (krievu valodā)</label>
                    <textarea
                        name="descriptionRu"
                        value={property.descriptionRu}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-2 border rounded-md"
                    ></textarea>
                </div>

                <div>
                    <label className="block text-gray-700">Cena</label>
                    <input
                        type="number"
                        name="price"
                        value={property.price}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Kategorija</label>
                    <select
                        name="category"
                        value={property.category}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md"
                    >
                        <option value="Apartment">Apartment</option>
                        <option value="House">House</option>
                        <option value="Commercial">Commercial</option>
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700">Pirkuma veids</label>
                    <select
                        name="transactionType"
                        value={property.transactionType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md"
                    >
                        <option value="Sell">Sell</option>
                        <option value="Rent">Rent</option>
                    </select>
                </div>

                <div>
                    <label className="block text-gray-700">Adrese</label>
                    <input
                        type="text"
                        name="address"
                        value={property.address}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Izmērs m2</label>
                    <input
                        type="text"
                        name="size"
                        value={property.size}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Istabu skaits</label>
                    <input
                        type="number"
                        name="roomCount"
                        value={property.roomCount}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Stāvs/i</label>
                    <input
                        type="number"
                        name="floor"
                        value={property.floor}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Galvenais attēls</label>
                    <div className="relative">
                        {property.mainImage && (
                            <div className="relative inline-block">
                                <img
                                    src={
                                        typeof property.mainImage === "string"
                                            ? `http://localhost:5000${property.mainImage}`
                                            : URL.createObjectURL(property.mainImage)
                                    }
                                    alt="Main"
                                    className="w-32 h-32 object-cover"
                                />
                                <button
                                    type="button"
                                    onClick={handleRemoveMainImage}
                                    className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                                >
                                    <AiOutlineClose />
                                </button>
                            </div>
                        )}
                    </div>
                    <input
                        type="file"
                        onChange={handleMainImageChange}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                </div>

                <div>
                    <label className="block text-gray-700">Īpašumu attēli</label>
                    <div className="flex flex-wrap gap-2 mb-2">
                        {property.collageImages.map((image, index) => (
                            <div key={index} className="relative m-2">
                                <img
                                    src={`http://localhost:5000${image}`}
                                    alt={`Collage ${index}`}
                                    className="w-24 h-24 object-cover"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveCollageImage(index)}
                                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                                >
                                    <AiOutlineClose />
                                </button>
                            </div>
                        ))}
                    </div>
                    <input
                        type="file"
                        multiple
                        onChange={handleCollageImagesChange}
                        className="w-full px-4 py-2 border rounded-md"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#5B3767] hover:bg-[#7A4D8F] active:bg-[#3F1E47] text-white font-bold py-2 px-4 sm:px-6 rounded-md shadow-md ease-in-out duration-500"
                >
                    {loading ? "Atjaunina..." : "Atjaunināt īpašumu"}
                </button>
            </form>
        </div>
    );
};

export default UpdateProperty;

