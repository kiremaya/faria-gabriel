import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAszpmeY_9rjjcatPSsIDT0jmAm6OPVieo",
  authDomain: "coder-tarot.firebaseapp.com",
  projectId: "coder-tarot",
  storageBucket: "coder-tarot.firebasestorage.app",
  messagingSenderId: "80907925966",
  appId: "1:80907925966:web:b05305c451518d60cf139f"
};

const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
