import React from 'react';

export default function Home() {
  const productos = [
    { id: 1, nombre: 'Producto 1', precio: '$1.000', emoji: '🎁' },
    { id: 2, nombre: 'Producto 2', precio: '$2.500', emoji: '✨' },
    { id: 3, nombre: 'Producto 3', precio: '$3.000', emoji: '🌸' },
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#fdf2f8', fontFamily: 'sans-serif', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ color: '#db2777', fontSize: '2.5rem', marginBottom: '10px' }}>Caprichitos Cosas Lindas</h1>
        <p style={{ color: '#4b5563', fontSize: '1.1rem' }}>¡Encontrá los mejores regalos y detalles!</p>
      </header>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
        {productos.map((prod) => (
          <div key={prod.id} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>{prod.emoji}</div>
            <h2 style={{ color: '#1f2937', fontSize: '1.25rem' }}>{prod.nombre}</h2>
            <p style={{ color: '#db2777', fontWeight: 'bold', fontSize: '1.2rem', margin: '10px 0' }}>{prod.precio}</p>
            <a
              href={`https://wa.me/?text=Hola!%20Me%20interesa%20el%20${encodeURIComponent(prod.nombre)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                backgroundColor: '#25D366',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 'bold',
                marginTop: '10px'
              }}
            >
              Pedir por WhatsApp
            </a>
          </div>
        ))}
      </section>

      <footer style={{ textAlign: 'center', marginTop: '40px', color: '#6b7280' }}>
        <p>Caprichitos Cosas Lindas ©️ 2026</p>
      </footer>
    </main>
  );
}
