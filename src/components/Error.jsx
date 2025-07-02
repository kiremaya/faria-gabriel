import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '70vh',
      textAlign: 'center',
      color: '#d32f2f',
    }}>
      <h1 style={{ fontSize: '5rem', margin: 0 }}>404</h1>
      <h2 style={{ margin: '1rem 0' }}>Página no encontrada</h2>
      <p>La dirección que ingresaste no existe.</p>
      <Link to="/" style={{
        marginTop: '2rem',
        padding: '0.7rem 2rem',
        background: '#1976d2',
        color: '#fff',
        borderRadius: '5px',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        transition: 'background 0.2s',
      }}>Volver al inicio</Link>
    </div>
  );
}

export default Error;