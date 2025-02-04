const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto');

router.get('/', async (req, res) => {
  const productos = await Producto.obtenerTodos();
  res.json(productos);
});

router.post('/', async (req, res) => {
  const producto = new Producto(req.body);
  await producto.guardar();
  res.json(producto);
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const producto = await Producto.obtenerPorId(id);
  if (!producto) {
    res.status(404).json({ mensaje: 'Producto no encontrado' });
  } else {
    producto.nombre = req.body.nombre;
    producto.cantidad = req.body.cantidad;
    await producto.guardar();
    res.json(producto);
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const producto = await Producto.obtenerPorId(id);
  if (!producto) {
    res.status(404).json({ mensaje: 'Producto no encontrado' });
  } else {
    await producto.eliminar();
    res.json({ mensaje: 'Producto eliminado' });
  }
});

module.exports = router;