import { Footer } from "./components/Footer";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./App.css";
import Productos from "./components/itemlistcontainer/Productos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Error from "./components/Error";
import Nosotros from "./components/Nosotros";
import { CartProvider } from "./context/CartContext";
import Producto from "./components/itemlistcontainer/Producto";
import { getFirestore, doc, getDoc } from "firebase/firestore";

function App() {
  const [productos, setProductos] = useState({});
  const db = getFirestore(); 
    
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="productos" element={<Productos />} />
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="productos/:id" element={<Producto />} />
            <Route path="/" element={<Error />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
