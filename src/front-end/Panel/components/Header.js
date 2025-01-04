import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {FaUserCircle} from "react-icons/fa";

const Header = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("Savienojums neveiksmīgs"); // Default username

    useEffect(() => {
        // Fetch token from localStorage
        const token = localStorage.getItem('token');

        if (token) {
            // Decode the token or fetch username (replace this mockup with actual logic)
            const decodedToken = parseJwt(token); // Replace `parseJwt` with your preferred method
            setUsername(decodedToken?.username || "Pievienojies");
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token'); // Clear token
        setUsername("Savienojums neveiksmīgs"); // Reset username
        navigate('/login');
    };

    return (
        <header className="bg-[#633b70] shadow-md p-4 flex justify-end items-center">
            {/* User Info */}
            <div className="flex items-center space-x-6">
                <span className="text-gold font-medium flex flex-row gap-1">
                    <FaUserCircle className="text-2xl" />
                    {username}
                </span>
                <button
                    onClick={handleLogout}
                    className="bg-gold text-white font-bold py-2 px-4 rounded-md hover:bg-[#b59860] active:bg-[#9A7A4C]"
                >
                    Iziet
                </button>
            </div>
        </header>
    );
};

export default Header;

// Helper function to parse JWT (JSON Web Token)
function parseJwt(token) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split('')
                .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
                .join('')
        );

        return JSON.parse(jsonPayload);
    } catch (error) {
        console.error('Failed to parse token:', error);
        return null;
    }
}

