import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#fafafa" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;






