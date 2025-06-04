import { Footer } from "./components/Footer";
import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./App.css";
import Productos from "./components/itemlistcontainer/Productos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Error from "./components/Error";
import Nosotros from "./components/Nosotros";
import Detalles from "./components/itemlistcontainer/Detalles";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="productos" element={<Productos />} />
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="productos/:id" element={<Detalles />} />
            <Route path="/" element={<Error />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
