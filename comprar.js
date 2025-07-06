import { useState } from 'react';

export default function Comprar() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleBuscar = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/buscar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre })
    });
    const data = await res.json();
    setMensaje(data.mensaje);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Buscar un artículo</h1>
      <form onSubmit={handleBuscar}>
        <input placeholder="¿Qué buscas?" value={nombre} onChange={e => setNombre(e.target.value)} required />
        <button type="submit">Buscar</button>
      </form>
      <p>{mensaje}</p>
    </div>
  );
}
