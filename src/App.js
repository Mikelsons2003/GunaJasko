import React, {useEffect, useState} from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {jwtDecode} from "jwt-decode";
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
import ObjektiIeskats from "./front-end/Website/ObjektiIeskats";
import Login from "./front-end/Panel/Login"; // Login page component
import Dashboard from "./front-end/Panel/Dashboard"; // Dashboard page component
import Properties from "./front-end/Panel/Properties"; // Properties page component
import AddProperty from "./front-end/Panel/AddProperty"; // Add Property page component
import Layout from "./front-end/Panel/components/Layout";
import UpdateProperty from "./front-end/Panel/UpdateProperty"; // Update Property page component
import Header from "./front-end/Website/Header"; // Import Header component

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
            <BrowserRouter>
                <Header/> {/* Ensure Header is inside BrowserRouter */}
                <Routes>
                    {/* Main Website Routes */}
                    <Route path="/" element={<Sakumlapa/>}/>
                    <Route path="/par-mani" element={<ParMani/>}/>
                    <Route path="/pakalpojumi" element={<Pakalpojumi/>}/>
                    <Route path="/starpniecibas" element={<Starpniecibas/>}/>
                    <Route path="/darijuma" element={<Darijuma/>}/>
                    <Route path="/projekti" element={<Projekti/>}/>
                    <Route path="/objekti" element={<Objekti/>}/>
                    <Route path="/objektiIeskats" element={<ObjektiIeskats/>}/>
                    <Route path="/kontakti" element={<Kontakti/>}/>
                    <Route path="/privatuma-politika" element={<PrivatumaPolitika/>}/>
                    {/* Admin Panel Routes */}
                    <Route path="/login" element={<Login/>}/>
                    {/* Protected Admin Panel Routes */}
                    <Route
                        path="/dashboard"
                        element={isTokenValid ? <Layout><Dashboard/></Layout> : <Navigate to="/login"/>}
                    />
                    <Route
                        path="/properties"
                        element={isTokenValid ? <Layout><Properties/></Layout> : <Navigate to="/login"/>}
                    />
                    <Route
                        path="/add-property"
                        element={isTokenValid ? <Layout><AddProperty/></Layout> : <Navigate to="/login"/>}
                    />
                    <Route
                        path="/update-property/:id"
                        element={isTokenValid ? <Layout><UpdateProperty/></Layout> : <Navigate to="/login"/>}
                    />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
