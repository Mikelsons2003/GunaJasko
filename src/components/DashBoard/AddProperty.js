import React, { useState } from "react";
import { addProperty } from "../../services/api";

const AddProperty = () => {
    const [property, setProperty] = useState({
        image: "",
        address: "",
        price: "",
        size: "",
        type: "",
        rooms: "",
        sell_price: "",
        rent_price: "",
        is_rent: false,
        description: "",
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProperty({
            ...property,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addProperty(property);
            alert("Property added successfully!");
            setProperty({
                image: "",
                address: "",
                price: "",
                size: "",
                type: "",
                rooms: "",
                sell_price: "",
                rent_price: "",
                is_rent: false,
                description: "",
            });
        } catch (error) {
            console.error("Error adding property:", error);
            alert("Failed to add property.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Add New Property</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={property.image}
                    onChange={handleInputChange}
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={property.address}
                    onChange={handleInputChange}
                    className="border p-2 rounded"
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={property.price}
                    onChange={handleInputChange}
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    name="size"
                    placeholder="Size (sq ft)"
                    value={property.size}
                    onChange={handleInputChange}
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    name="type"
                    placeholder="Type (e.g., House, Apartment)"
                    value={property.type}
                    onChange={handleInputChange}
                    className="border p-2 rounded"
                />
                <input
                    type="number"
                    name="rooms"
                    placeholder="Number of Rooms"
                    value={property.rooms}
                    onChange={handleInputChange}
                    className="border p-2 rounded"
                />
                <input
                    type="number"
                    name="sell_price"
                    placeholder="Sell Price"
                    value={property.sell_price}
                    onChange={handleInputChange}
                    className="border p-2 rounded"
                />
                <input
                    type="number"
                    name="rent_price"
                    placeholder="Rent Price (monthly)"
                    value={property.rent_price}
                    onChange={handleInputChange}
                    className="border p-2 rounded"
                />
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        name="is_rent"
                        checked={property.is_rent}
                        onChange={handleInputChange}
                        className="mr-2"
                    />
                    Is it for Rent?
                </label>
                <textarea
                    name="description"
                    placeholder="Description"
                    value={property.description}
                    onChange={handleInputChange}
                    className="border p-2 rounded col-span-2"
                />
            </div>
            <button
                type="submit"
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Add Property
            </button>
        </form>
    );
};

export default AddProperty;
