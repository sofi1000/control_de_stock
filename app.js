const express = require('express');
const app = express();
const productosController = require('./controllers/productosController');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/productos', productosController);

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});