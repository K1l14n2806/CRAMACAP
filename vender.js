import { useState } from 'react';

export default function Vender() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/publicar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, descripcion, precio: parseFloat(precio) })
    });
    alert('Artículo publicado correctamente');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Vender un artículo</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} required /><br />
        <input placeholder="Descripción" value={descripcion} onChange={e => setDescripcion(e.target.value)} required /><br />
        <input type="number" placeholder="Precio" value={precio} onChange={e => setPrecio(e.target.value)} required /><br />
        <button type="submit">Publicar</button>
      </form>
    </div>
  );
}
