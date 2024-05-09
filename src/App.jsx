import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import BridalPage from "./Pages/BridalPage";
import ServicesPage from "./Pages/ServicesPage";
import AboutPage from "./Pages/AboutPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Services" element={<ServicesPage/>}/>
        <Route path="/Bridal" element={<BridalPage/>}/>
        <Route path="/About" element={<AboutPage/>}/>
        <Route path="/Contact" element={<ContactPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
