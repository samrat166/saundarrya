import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./common/navbar";
import Gallery from "./components/gallery";

function App() {
  const [value, setValue] = useState(0);
  return (
    <>
      <Header />
      <Routes>
        <Route path="gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;
