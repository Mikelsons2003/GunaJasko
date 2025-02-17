import React, {useEffect, useState} from "react";
import {getProperties} from "../../services/api";

const Properties = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const data = await getProperties();
                setProperties(data);
            } catch (error) {
                console.error("Error fetching properties:", error);
            }
        };
        fetchProperties();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
            {properties.map((property) => (
                <div key={property.id} className="border rounded-lg p-4 shadow-lg">
                    <img
                        src={property.image}
                        alt={property.address}
                        className="w-full h-40 object-cover mb-4"
                    />
                    <h2 className="text-xl font-bold">{property.address}</h2>
                    <p className="text-gray-600">Price: ${property.price}</p>
                    <p>Size: {property.size} sq ft</p>
                    <p>Rooms: {property.rooms}</p>
                    <p>Type: {property.type}</p>
                    {property.is_rent ? (
                        <p>Monthly Rent: ${property.rent_price}</p>
                    ) : (
                        <p>Selling Price: ${property.sell_price}</p>
                    )}
                    <p className="text-gray-700 mt-2">{property.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Properties;
