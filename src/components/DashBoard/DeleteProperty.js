import React from "react";
import { deleteProperty } from "../../services/api";

const DeleteProperty = ({ propertyId, onPropertyDeleted }) => {
    const handleDelete = async () => {
        try {
            await deleteProperty(propertyId);
            alert("Property deleted successfully!");
            onPropertyDeleted(propertyId); // Trigger a callback to refresh the list
        } catch (error) {
            console.error("Error deleting property:", error);
            alert("Failed to delete property.");
        }
    };

    return (
        <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
            Delete
        </button>
    );
};

export default DeleteProperty;
