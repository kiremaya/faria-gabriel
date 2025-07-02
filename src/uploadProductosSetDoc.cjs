const { initializeApp } = require("firebase/app");
const { getFirestore, collection, setDoc, doc } = require("firebase/firestore");
const { productos } = require("./data/productos");

const firebaseConfig = {
  apiKey: "AIzaSyAszpmeY_9rjjcatPSsIDT0jmAm6OPVieo",
  authDomain: "coder-tarot.firebaseapp.com",
  projectId: "coder-tarot",
  storageBucket: "coder-tarot.firebasestorage.app",
  messagingSenderId: "80907925966",
  appId: "1:80907925966:web:b05305c451518d60cf139f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function uploadAll() {
  const productosRef = collection(db, "productos");
  for (const producto of productos) {
    // Usar el campo id como ID del documento (debe ser string)
    await setDoc(doc(productosRef, String(producto.id)), producto);
    console.log(`Subido: ${producto.nombre} (id: ${producto.id})`);
  }
  console.log("Todos los productos subidos con setDoc y id personalizado.");
}

uploadAll();
