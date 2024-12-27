import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Sakumlapa from "./components/Website/Sakumlapa";
import ParMani from "./components/Website/ParMani";
import Footer from "./components/Website/Footer";
import Pakalpojumi from "./components/Website/Pakalpojumi";
import Kontakti from "./components/Website/Kontakti";
import Objekti from "./components/Website/Objekti";
import Starpniecibas from "./components/Website/UnderPakalpojumi/Starpniecibas";
import Darijuma from "./components/Website/UnderPakalpojumi/Darijuma";
import Projekti from "./components/Website/UnderPakalpojumi/Projekti";
import PrivatumaPolitika from "./components/Website/PrivatumaPolitika";

function App() {
    return (
        <Router>
            <div className="App">
                {/* Define Routes */}
                <Routes>
                    <Route path="/" element={<Sakumlapa />} />
                    <Route path="/par-mani" element={<ParMani />} />
                    <Route path="/pakalpojumi" element={<Pakalpojumi />} />
                    <Route path="/starpniecibas" element={<Starpniecibas />} />
                    <Route path="/darijuma" element={<Darijuma />} />
                    <Route path="/projekti" element={<Projekti />} />
                    <Route path="/objekti" element={<Objekti />} />
                    <Route path="/kontakti" element={<Kontakti />} />
                    <Route path="/privatuma-politika" element={<PrivatumaPolitika />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
