const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productosController');

router.get('/', productoController.obtenerTodos);
router.post('/', productoController.crearProducto);
router.put('/:id', productoController.actualizarProducto);
router.delete('/:id', productoController.eliminarProducto);

module.exports = router;