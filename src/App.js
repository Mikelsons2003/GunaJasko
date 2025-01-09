import React, {useEffect, useState} from "react";
import axios from "axios";
import {Route, Routes, useLocation} from "react-router-dom";
import "./App.css";
import Sakumlapa from "./front-end/Website/Sakumlapa";
import ParMani from "./front-end/Website/ParMani";
import Footer from "./front-end/Website/Footer";
import Pakalpojumi from "./front-end/Website/Pakalpojumi";
import Kontakti from "./front-end/Website/Kontakti";
import Objekti from "./front-end/Website/Objekti";
import ObjektiIeskats from "./front-end/Website/ObjektiIeskats";
import Starpniecibas from "./front-end/Website/UnderPakalpojumi/Starpniecibas";
import Darijuma from "./front-end/Website/UnderPakalpojumi/Darijuma";
import Projekti from "./front-end/Website/UnderPakalpojumi/Projekti";
import PrivatumaPolitika from "./front-end/Website/PrivatumaPolitika";
import Login from "./front-end/Panel/Login"; // Login page component
import Dashboard from "./front-end/Panel/Dashboard"; // Dashboard page component
import Properties from "./front-end/Panel/Properties"; // Properties page component
import AddProperty from "./front-end/Panel/AddProperty"; // Add Property page component
import Layout from "./front-end/Panel/components/Layout";
import UpdateProperty from "./front-end/Panel/UpdateProperty"; // Update Property page component
import Header from "./front-end/Website/Header"; // Import Header component

function App() {
    const location = useLocation(); // Access current location
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        // Fetch properties data from API when component mounts
        const fetchProperties = async () => {
            try {
                const response = await axios.get('/api/properties'); // API call to fetch properties
                if (Array.isArray(response.data)) {
                    setProperties(response.data);
                } else {
                    console.error("Data is not an array:", response.data);
                }
            } catch (error) {
                console.error("Error fetching properties:", error);
            }
        };

        fetchProperties().catch(error => {
            console.error("Error in fetchProperties from api in App:", error);
        });
    }, []);

    const isAdminRoute =
        location.pathname.startsWith("/dashboard") ||
        location.pathname.startsWith("/properties") ||
        location.pathname.startsWith("/add-property") ||
        location.pathname.startsWith("/update-property") ||
        location.pathname.startsWith("/login");

    return (
        <div className={`App ${isAdminRoute ? "admin-panel" : ""}`}>
            {!isAdminRoute && <Header/>} {/* Show Header only on non-admin routes */}
            <Routes>
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
                <Route path="/login" element={<Login/>}/>
                <Route path="/dashboard" element={<Layout><Dashboard/></Layout>}/>
                <Route path="/properties" element={<Layout><Properties properties={properties}/></Layout>}/>
                <Route path="/add-property" element={<Layout><AddProperty/></Layout>}/>
                <Route path="/update-property/:id" element={<Layout><UpdateProperty/></Layout>}/>
            </Routes>
            {!isAdminRoute && <Footer/>} {/* Show Footer only on non-admin routes */}
        </div>
    );
}

export default App;
