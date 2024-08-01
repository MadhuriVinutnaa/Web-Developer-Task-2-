
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImageSlider from "./ImageSliders/ImageSlider";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/imageSlider" element={<ImageSlider/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
