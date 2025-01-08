import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {FaUserCircle} from "react-icons/fa";

const Header = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("Veiksmīgs savienojums"); // Default username

    const handleLogout = () => {
        // Simply reset the username (no token to remove)
        setUsername("Neveiksmīgs savienojums"); // Reset username
        navigate('/login');
    };

    return (
        <header className="bg-[#633b70] shadow-md p-4 flex justify-end items-center">
            {/* User Info */}
            <div className="flex items-center space-x-6">
                <span className="text-gold font-medium flex flex-row gap-1">
                    <FaUserCircle className="text-2xl"/>
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

