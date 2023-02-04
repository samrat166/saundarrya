import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./common/navbar";
import Gallery from "./components/gallery";
import Home from "./components/Home";
import CustomerRegister from "./components/register/CustomerRegister";

function App() {
  const [value, setValue] = useState(0);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="new-arrival" element={<Gallery />} />
        <Route path="customer-register" element={<CustomerRegister />} />
      </Routes>
    </>
  );
}

export default App;
