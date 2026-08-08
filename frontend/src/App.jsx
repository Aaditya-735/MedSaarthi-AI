import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Report from "./pages/Report";
import Chat from "./pages/Chat";
import Search from "./pages/Search";
import About from "./pages/About";

function App() {
    return (
        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/report" element={<Report />} />

                <Route path="/chat" element={<Chat />} />

                <Route path="/search" element={<Search />} />

                <Route path="/about" element={<About />} />

            </Routes>

            <Footer />

        </BrowserRouter>
    );
}

export default App;