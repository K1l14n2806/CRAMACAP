let articulos = global.articulos || [];
global.articulos = articulos;

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { nombre } = req.body;
    const articulo = articulos.find(a => a.nombre.toLowerCase() === nombre.toLowerCase());
    if (articulo) {
      const precioVenta = (articulo.precio * 1.1).toFixed(2);
      articulos = articulos.filter(a => a !== articulo);
      global.articulos = articulos;
      res.status(200).json({ mensaje: `La IA compró el artículo por ${articulo.precio}€ y lo revende por ${precioVenta}€.` });
    } else {
      res.status(200).json({ mensaje: 'No hay artículos disponibles con ese nombre.' });
    }
  } else {
    res.status(405).end();
  }
}
