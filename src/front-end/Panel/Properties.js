import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {MdDeleteForever} from 'react-icons/md';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "https://guna.lucid-websites.com/api";

const ImageWithLoading = ({src}) => {
    const [isImageLoading, setIsImageLoading] = useState(true);

    return (
        <div className="w-full h-52 sm:h-72 bg-gray-300 rounded-md flex items-center justify-center mt-4 mb-4 relative">
            {isImageLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                    <div
                        className="spinner-border animate-spin text-gray-400 w-6 h-6 rounded-full border-4 border-gray-400 border-t-transparent"></div>
                </div>
            )}
            {src ? (
                <img
                    src={src}
                    alt="Property"
                    onLoad={() => setIsImageLoading(false)}
                    onError={() => setIsImageLoading(false)}
                    className={`w-full h-52 sm:h-72 object-cover rounded-md transition-opacity duration-500 ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
                />
            ) : (
                <span className="text-gray-500">No Image</span>
            )}
        </div>
    );
};

const Properties = () => {
    const [properties, setProperties] = useState([]);
    const [sortedProperties, setSortedProperties] = useState([]);
    const [sortCriteria, setSortCriteria] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');
    const [searchQuery, setSearchQuery] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [loading, setLoading] = useState(true); // Loading state
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/properties`);
                console.log(response.data); // Check what data you receive
                setProperties(response.data);
                // Check if the response data is an array
                if (Array.isArray(response.data)) {
                    setProperties(response.data);
                    setSortedProperties(response.data);
                } else {
                    console.error("Data is not an array:", response.data);
                }
            } catch (error) {
                console.error('Error fetching properties:', error.response?.data || error.message);
            } finally {
                setLoading(false); // End loading
            }
        };

        fetchProperties().catch(error => {
            console.error("Error in fetchProperties from api in Properties:", error);
        });
    }, []);

    const handleSort = (criteria) => {
        if (sortCriteria === criteria) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortOrder('asc');
            setSortCriteria(criteria);
        }

        const sorted = [...properties];
        switch (criteria) {
            case 'time':
                sorted.sort((a, b) => {
                    return sortOrder === 'asc'
                        ? new Date(a.createdAt) - new Date(b.createdAt)
                        : new Date(b.createdAt) - new Date(a.createdAt);
                });
                break;
            case 'price':
                sorted.sort((a, b) => {
                    return sortOrder === 'asc'
                        ? (a.price || 0) - (b.price || 0)
                        : (b.price || 0) - (a.price || 0);
                });
                break;
            case 'category':
                sorted.sort((a, b) => {
                    return sortOrder === 'asc'
                        ? (a.category || '').localeCompare(b.category || '')
                        : (b.category || '').localeCompare(a.category || '');
                });
                break;
            default:
                break;
        }

        setSortedProperties(sorted);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);

        const filtered = properties.filter((property) =>
            (property.title && property.title.toLowerCase().includes(query.toLowerCase())) ||
            (property.category && property.category.toLowerCase().includes(query.toLowerCase())) ||
            (property.address && property.address.toLowerCase().includes(query.toLowerCase()))
        );

        setSortedProperties(filtered);
    };

    const handleAddProperty = () => {
        navigate('/add-property');
    };

    const handleDelete = async (id) => {
        const updatedProperties = properties.filter((property) => property.id !== id);
        setProperties(updatedProperties);
        setSortedProperties(updatedProperties);

        try {
            await axios.delete(`${API_BASE_URL}/properties/${id}`);
        } catch (error) {
            setProperties(properties);
            setSortedProperties(properties);
            console.error('Error deleting property:', error.response?.data || error.message);
        }
    };

    const handleUpdate = (id) => {
        navigate(`/update-property/${id}`);
    };

    return (
        <div className="p-1 md:p-4">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Īpašumi</h1>
                <div className="flex flex-col sm:flex-row gap-4">
                    {/* Search Input */}
                    <input
                        type="text"
                        placeholder="Meklēt īpašumu..."
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        className="border rounded-md px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#3F1E47]"
                    />

                    {/* Sort Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="bg-gold font-bold py-1 px-4 sm:px-6 rounded-md hover:bg-[#B18E58] shadow-md text-white ease-in-out duration-500 w-full"
                        >
                            Kārtot īpašumus
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                                <button
                                    onClick={() => handleSort('time')}
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100 ease-in-out duration-500"
                                >
                                    Kārtot pēc laika {sortCriteria === 'time' && (sortOrder === 'asc' ? '↑' : '↓')}
                                </button>
                                <button
                                    onClick={() => handleSort('price')}
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100 ease-in-out duration-500"
                                >
                                    Kārtot pēc cenas {sortCriteria === 'price' && (sortOrder === 'asc' ? '↑' : '↓')}
                                </button>
                                <button
                                    onClick={() => handleSort('category')}
                                    className="w-full text-left px-4 py-2 hover:bg-gray-100 ease-in-out duration-500"
                                >
                                    Kārtot pēc
                                    kategorijas {sortCriteria === 'category' && (sortOrder === 'asc' ? '↑' : '↓')}
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Add Property Button */}
                    <button
                        onClick={handleAddProperty}
                        className="bg-[#5B3767] hover:bg-[#7A4D8F] active:bg-[#3F1E47] text-white font-bold py-1 px-4 sm:px-6 rounded-md shadow-md ease-in-out duration-500 w-full"
                    >
                        Pievienot īpašumu
                    </button>
                </div>
            </div>

            {/* Properties Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-8">
                {loading ? (
                    <div className="col-span-3 text-center">
                        <Skeleton count={6}/>
                    </div>
                ) : sortedProperties.length === 0 ? (
                    <p className="col-span-3 text-center text-gray-500">No properties available.</p>
                ) : (
                    sortedProperties.map((property) => (
                        <div key={property.id} className="relative bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                            <button
                                onClick={() => handleDelete(property.id)}
                                className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-xl sm:text-2xl font-bold ease-in-out duration-500"
                            >
                                <MdDeleteForever/>
                            </button>

                            <ImageWithLoading
                                src={property.mainImage ? `http://localhost:5000${property.mainImage}` : null}
                            />

                            <div className="text-center md:text-left">
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
                                    {property.title || <Skeleton/>}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-500 hidden md:flex md:flex-col overflow-hidden text-ellipsis whitespace-nowrap">
                                    {property.category || <Skeleton width={100}/>}
                                </p>
                                <p className="text-sm sm:text-base text-gray-500 hidden md:flex md:flex-col overflow-hidden text-ellipsis whitespace-nowrap">
                                    ${property.price || <Skeleton width={60}/>}
                                </p>
                                <p className="text-sm sm:text-base text-gray-500 hidden md:flex md:flex-col overflow-hidden text-ellipsis whitespace-nowrap">
                                    {property.address || <Skeleton width={120}/>}
                                </p>
                            </div>

                            <div className="mt-4 flex justify-between items-center">
                                <button
                                    onClick={() => handleUpdate(property.id)}
                                    className="bg-[#5B3767] hover:bg-[#7A4D8F] text-white font-semibold py-2 px-4 rounded-md ease-in-out duration-500"
                                >
                                    Rediģēt
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Properties;
