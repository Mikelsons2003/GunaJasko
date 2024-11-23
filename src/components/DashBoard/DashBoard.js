import React, { useState, useEffect } from "react";
import { getProperties } from "../../services/api";
import AddProperty from "./AddProperty";
import EditProperty from "./EditProperty";
import DeleteProperty from "./DeleteProperty";

const Dashboard = () => {
    const [properties, setProperties] = useState([]);
    const [editingProperty, setEditingProperty] = useState(null);

    useEffect(() => {
        const fetchProperties = async () => {
            const data = await getProperties();
            setProperties(data);
        };
        fetchProperties();
    }, []);

    const handlePropertyDeleted = (id) => {
        setProperties((prev) => prev.filter((property) => property.id !== id));
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
            <AddProperty />
            <div className="grid gap-4 mt-8">
                {properties.map((property) => (
                    <div key={property.id} className="border p-4 rounded">
                        <h2 className="font-bold">{property.address}</h2>
                        <button
                            onClick={() => setEditingProperty(property)}
                            className="mr-2 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                        >
                            Edit
                        </button>
                        <DeleteProperty
                            propertyId={property.id}
                            onPropertyDeleted={handlePropertyDeleted}
                        />
                    </div>
                ))}
            </div>
            {editingProperty && (
                <EditProperty
                    property={editingProperty}
                    onClose={() => setEditingProperty(null)}
                />
            )}
        </div>
    );
};

export default Dashboard;
