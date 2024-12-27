import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Check if already logged in and redirect to dashboard
        const token = localStorage.getItem('token');
        if (token) {
            console.log('Token found, navigating to /dashboard');
            navigate('/dashboard');
        }
    }, [navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors

        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {email, password});

            if (response.data.token) {
                localStorage.setItem('token', response.data.token); // Store token
                console.log('Token saved to localStorage:', response.data.token);

                // Using setTimeout to delay the navigation to ensure it happens after the state update
                setTimeout(() => {
                    console.log('Navigating to /dashboard');
                    navigate('/dashboard'); // Redirect to the dashboard after the token is saved
                }, 500); // Delay can be adjusted
            } else {
                setError('Failed to log in. Try again.');
            }
        } catch (error) {
            console.error('Login failed:', error);
            setError(error.response?.data?.message || 'Invalid credentials');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gold">
            <div className="bg-[#5B3767] p-6 rounded-lg shadow-md max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4 text-white">Admin Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-xs mb-4">{error}</p>}
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-gold text-white rounded-md hover:hover:bg-[#B18E58] focus:outline-none text-xl font-bold ease-in-out duration-500"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;

