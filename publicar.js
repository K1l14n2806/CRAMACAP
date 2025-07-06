let articulos = global.articulos || [];
global.articulos = articulos;

export default function handler(req, res) {
  if (req.method === 'POST') {
    articulos.push(req.body);
    res.status(200).json({ mensaje: 'Artículo guardado' });
  } else {
    res.status(405).end();
  }
}
