import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Coi
import './App.css';
import DashboardPage  from "./pages/DashboardPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/DashboardPage" element={<DashboardPage />} />
          <Route path="/Coins" element={<Coins/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;