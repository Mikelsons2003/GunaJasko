import React, { useState } from "react";
import { updateProperty } from "../../services/api";

const EditProperty = ({ property, onClose }) => {
    const [updatedProperty, setUpdatedProperty] = useState(property);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setUpdatedProperty({
            ...updatedProperty,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateProperty(updatedProperty);
            alert("Property updated successfully!");
            onClose(); // Close the modal or dialog after saving
        } catch (error) {
            console.error("Error updating property:", error);
            alert("Failed to update property.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 border rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Edit Property</h2>
            {/* Reuse the same inputs as AddProperty */}
            {/* Use updatedProperty and handleInputChange */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    value={updatedProperty.image}
                    onChange={handleInputChange}
                    className="border p-2 rounded"
                />
                {/* Other fields follow the same pattern */}
            </div>
            <button
                type="submit"
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
                Save Changes
            </button>
        </form>
    );
};

export default EditProperty;
