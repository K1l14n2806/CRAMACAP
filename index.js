export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Bienvenido al Marketplace IA</h1>
      <p>Publica artículos en venta o busca lo que necesitas. La IA se encarga del resto.</p>
      <div style={{ marginTop: '2rem' }}>
        <a href="/vender">Vender un artículo</a> | <a href="/comprar">Buscar artículo</a>
      </div>
    </div>
  );
}
