import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Female from "./pages/female/Female";
import Male from "./pages/male/Male";
import All from "./pages/allProducts/All";
import Kids from "./pages/kids/Kids";
import About from "./pages/about/About";
import Details from "./components/details/Details";

function App() {
  return (
     <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/female" element={<Female />} />
        <Route path="/male" element={<Male />} />  
        <Route path="/allproducts" element={<All />} />  
        <Route path="/kids" element={<Kids />} />  
        <Route path="/aboutus" element={<About />} />  
        <Route path="/product/details" element={<Details />} />  
      </Routes>
    </BrowserRouter>
     </div>
  );
}

export default App;
