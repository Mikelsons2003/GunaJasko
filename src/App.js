import React, {Suspense} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import "./App.css";
import "./i18n";
import {useTranslation} from "react-i18next";
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
import Header from "./front-end/Website/Header";

function App() {
    const {t} = useTranslation();
    const location = useLocation();

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div>
                <Header/>
                <Routes>
                    <Route path="/" element={<Sakumlapa/>}/>
                    <Route path="/par-mani" element={<ParMani/>}/>
                    <Route path="/pakalpojumi" element={<Pakalpojumi/>}/>
                    <Route path="/starpniecibas" element={<Starpniecibas/>}/>
                    <Route path="/darijuma" element={<Darijuma/>}/>
                    <Route path="/projekti" element={<Projekti/>}/>
                    <Route path="/objekti" element={<Objekti/>}/>
                    <Route path="/objekti/:id" element={<ObjektiIeskats/>}/>
                    <Route path="/kontakti" element={<Kontakti/>}/>
                    <Route path="/privatuma-politika" element={<PrivatumaPolitika/>}/>
                </Routes>
                <Footer/>
            </div>
        </Suspense>
    );
}

export default App;