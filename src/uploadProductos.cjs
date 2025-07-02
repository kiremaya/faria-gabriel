const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc } = require("firebase/firestore");
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
    await addDoc(productosRef, producto);
    console.log(`Subido: ${producto.nombre}`);
  }
  console.log("Todos los productos subidos.");
}

uploadAll();
