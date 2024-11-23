import axios from "axios";

const API_URL = "http://62.72.20.34/api/";

// Fetch all properties
export const getProperties = async () => {
    const response = await axios.get(`${API_URL}getProperties.php`);
    return response.data;
};

// Add a new property
export const addProperty = async (property) => {
    const response = await axios.post(`${API_URL}addProperty.php`, property);
    return response.data;
};

// Update an existing property
export const updateProperty = async (property) => {
    const response = await axios.post(`${API_URL}updateProperty.php`, property);
    return response.data;
};

// Delete a property
export const deleteProperty = async (id) => {
    const response = await axios.post(`${API_URL}deleteProperty.php`, { id });
    return response.data;
};
