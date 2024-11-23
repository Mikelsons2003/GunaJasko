import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/DashBoard/DashBoard";
import Properties from "./components/Website/Properties";

function App() {
  return (
      <div className="App">
        <Router>
          <header className="App-header">
            <nav className="flex justify-between items-center p-4 bg-blue-500">
              <h1 className="text-white text-xl">Real Estate Manager</h1>
              <div>
                <Link to="/dashboard" className="App-link mx-2">
                  Dashboard
                </Link>
                <Link to="/" className="App-link mx-2">
                  View Properties
                </Link>
              </div>
            </nav>
          </header>

          <main className="p-6">
            <Routes>
              <Route path="/" element={<Properties />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
        </Router>
      </div>
  );
}

export default App;
