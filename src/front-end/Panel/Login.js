import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/api"; //CORS error no https://guna.lucid-websites.com/api

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous errors

        console.log("Attempting login with email:", email);

        try {
            const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });

            if (response.data) {
                console.log('Login successful');
                // Navigate to dashboard directly
                navigate('/dashboard');
            } else {
                console.error("Unexpected response format:", response);
                setError("Failed to log in. Try again.");
            }
        } catch (error) {
            console.error("Login request failed:", error);

            // Show appropriate error messages
            if (error.response) {
                setError(error.response.data?.message || "Invalid credentials");
            } else if (error.request) {
                setError("No response from server. Please try again later.");
            } else {
                setError("An error occurred while setting up the request.");
            }
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#B18E58] to-[#5B3767] p-6">
            <div className="bg-[#5B3767] p-8 rounded-xl shadow-lg max-w-sm w-full transform transition-transform duration-300 hover:scale-105">
                <h2 className="text-3xl font-extrabold mb-6 text-white text-center">Admin Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-5">
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-[#B18E58] focus:border-transparent"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-[#B18E58] focus:border-transparent"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
                    <button
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-[#B18E58] to-[#856148] text-white font-bold rounded-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#B18E58] transition duration-300"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;


