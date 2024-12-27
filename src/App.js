import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Sakumlapa from "./front-end/Website/Sakumlapa"; // Your main website component
import Login from "./front-end/Panel/Login"; // Login page component
import Dashboard from "./front-end/Panel/Dashboard"; // Dashboard page component
import Properties from "./front-end/Panel/Properties"; // Properties page component
import AddProperty from "./front-end/Panel/AddProperty"; // Add Property page component
import Layout from "./front-end/Panel/components/Layout";
import UpdateProperty from "./front-end/Panel/UpdateProperty"; // Layout component

function App() {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [isTokenValid, setIsTokenValid] = useState(true);

    useEffect(() => {
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                const currentTime = Date.now() / 1000; // Current time in seconds

                if (decodedToken.exp < currentTime) {
                    setIsTokenValid(false); // Token is expired
                    localStorage.removeItem('token'); // Remove the expired token
                    setToken(null); // Set token state to null
                } else {
                    setIsTokenValid(true); // Token is valid
                }
            } catch (error) {
                console.error('Error decoding token:', error);
                setIsTokenValid(false);
                localStorage.removeItem('token'); // In case of any error in decoding
                setToken(null);
            }
        }
    }, [token]); // Re-run this effect when token changes

    return (
        <div className="App">
            <Router>
                <Routes>
                    {/* Main Website Route */}
                    <Route path="/" element={<Sakumlapa />} />

                    {/* Admin Panel Routes */}
                    <Route path="/login" element={<Login />} />

                    {/* Protected Routes */}
                    <Route
                        path="/dashboard"
                        element={isTokenValid ? <Layout><Dashboard /></Layout> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/properties"
                        element={isTokenValid ? <Layout><Properties /></Layout> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/add-property"
                        element={isTokenValid ? <Layout><AddProperty /></Layout> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/update-property/:id"
                        element={isTokenValid ? <Layout><UpdateProperty /></Layout> : <Navigate to="/login" />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;


