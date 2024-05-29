import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <div className="flex bg-[#f6f8fb] h-[50vh] ">
          <Sidebar />
          <div className="flex-grow flex flex-col bg-[#f6f8fb] ">
            <Navbar />
            <div className="p-4 flex-grow bg-[#f6f8fb]">
              <Routes>
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
