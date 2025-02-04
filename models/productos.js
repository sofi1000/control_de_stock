const fs = require('fs');
const path = require('path');

class Producto {
  constructor(data) {
    this.nombre = data.nombre;
    this.cantidad = data.cantidad;
  }

  static obtenerTodos() {
    const productos = fs.readFileSync(path.join(__dirname, '../db/productos.json'), 'utf8');
    return JSON.parse(productos);
  }

  static obtenerPorId(id) {
    const productos = fs.readFileSync(path.join(__dirname, '../db/productos.json'), 'utf8');
    const productosArray = JSON.parse(productos);
    return productosArray.find((producto) => producto.id === id);
  }

  guardar() {
    const productos = fs.readFileSync(path.join(__dirname, '../db/productos.json'), 'utf8');
    const productosArray = JSON.parse(productos);
    productosArray.push(this);
    fs.writeFileSync(path.join(__dirname, '../db/productos.json'), JSON.stringify(productosArray));
  }

  eliminar() {
    const productos = fs.readFileSync(path.join(__dirname, '../db/productos.json'), 'utf8');
    const productosArray = JSON.parse(productos);
    const index = productosArray.findIndex((producto) => producto.id === this.id);
    if (index !== -1) {
      productosArray.splice(index, 1);
      fs.writeFileSync(path.join(__dirname, '../db/productos.json'), JSON.stringify(productosArray));
    }
  }
}