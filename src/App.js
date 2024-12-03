import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Sakumlapa from "./components/Website/Sakumlapa";
import ParMani from "./components/Website/ParMani";
import Footer from "./components/Website/Footer";

function App() {
    return (
        <Router>
            <div className="App">
                {/* Define Routes */}
                <Routes>
                    <Route path="/" element={<Sakumlapa />} />
                    <Route path="/par-mani" element={<ParMani />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
