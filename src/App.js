import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import "./App.css";
import Sakumlapa from "./front-end/Website/Sakumlapa";
import ParMani from "./front-end/Website/ParMani";
import Footer from "./front-end/Website/Footer";
import Pakalpojumi from "./front-end/Website/Pakalpojumi";
import Kontakti from "./front-end/Website/Kontakti";
import Objekti from "./front-end/Website/Objekti";
import Starpniecibas from "./front-end/Website/UnderPakalpojumi/Starpniecibas";
import Darijuma from "./front-end/Website/UnderPakalpojumi/Darijuma";
import Projekti from "./front-end/Website/UnderPakalpojumi/Projekti";
import PrivatumaPolitika from "./front-end/Website/PrivatumaPolitika";
import Login from "./front-end/Panel/Login"; // Login page component
import Dashboard from "./front-end/Panel/Dashboard"; // Dashboard page component
import Properties from "./front-end/Panel/Properties"; // Properties page component
import AddProperty from "./front-end/Panel/AddProperty"; // Add Property page component
import UpdateProperty from "./front-end/Panel/UpdateProperty"; // Update Property page component
import Header from "./front-end/Website/Header"; // Import Header component

function Layout() {
    const location = useLocation(); // Get the current route

    // Conditionally render the Header and Footer based on the route
    const hideHeaderAndFooterRoutes = ["/login", "/dashboard"];
    const showHeaderAndFooter = !hideHeaderAndFooterRoutes.includes(location.pathname);

    return (
        <div className="min-h-screen text-white relative">
            {showHeaderAndFooter && <Header />}
            <Routes>
                {/* Main Website Routes */}
                <Route path="/" element={<Sakumlapa />} />
                <Route path="/par-mani" element={<ParMani />} />
                <Route path="/pakalpojumi" element={<Pakalpojumi />} />
                <Route path="/starpniecibas" element={<Starpniecibas />} />
                <Route path="/darijuma" element={<Darijuma />} />
                <Route path="/projekti" element={<Projekti />} />
                <Route path="/objekti" element={<Objekti />} />
                <Route path="/kontakti" element={<Kontakti />} />
                <Route path="/privatuma-politika" element={<PrivatumaPolitika />} />

                {/* Admin Panel Routes */}
                <Route path="/login" element={<Login />} />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/properties"
                    element={
                        <ProtectedRoute>
                            <Properties />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/add-property"
                    element={
                        <ProtectedRoute>
                            <AddProperty />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/update-property/:id"
                    element={
                        <ProtectedRoute>
                            <UpdateProperty />
                        </ProtectedRoute>
                    }
                />
            </Routes>
            {showHeaderAndFooter && <Footer />}
        </div>
    );
}

function ProtectedRoute({ children }) {
    const [token] = useState(localStorage.getItem("token"));
    const [isTokenValid, setIsTokenValid] = useState(true);

    useEffect(() => {
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                const currentTime = Date.now() / 1000; // Current time in seconds

                if (decodedToken.exp < currentTime) {
                    setIsTokenValid(false); // Token is expired
                    localStorage.removeItem("token"); // Remove the expired token
                } else {
                    setIsTokenValid(true); // Token is valid
                }
            } catch (error) {
                console.error("Error decoding token:", error);
                setIsTokenValid(false);
                localStorage.removeItem("token");
            }
        } else {
            setIsTokenValid(false); // No token found
        }
    }, [token]);

    if (!isTokenValid) {
        return <Navigate to="/login" />;
    }

    return children;
}

function App() {
    return (
        <Router>
            <Layout />
        </Router>
    );
}

export default App;
