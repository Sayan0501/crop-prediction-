import React from "react";
import Crop from "./Crop";
import Header from "./Header";
import Landing from "./Landing";
import Aboutus from "./Aboutus";
import Blog from "./blog/Blog";
import Know from "./Know";
import Blog1 from "./blog/features/Blog1";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* <Header/> */}
          <Route path="/" element={<Landing />} />
          <Route path="/crop" element={<Crop />} />
          <Route path="/know" element={<Know/>} />
          <Route path="/blog1" element={<Blog1/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
