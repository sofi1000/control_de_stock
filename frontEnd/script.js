const productos = [
  { nombre: 'Producto 1', cantidad: 10 },
  { nombre: 'Producto 2', cantidad: 20 },
];

function agregarProducto(nombre, cantidad) {
  const nuevoProducto = { nombre, cantidad };
  productos.push(nuevoProducto);
  actualizarTabla();
}


function actualizarTabla() {
  const tbody = document.getElementById('tbody-productos');
  tbody.innerHTML = '';
  productos.forEach((producto) => {
    const row = document.createElement('tr');
    const nombreCell = document.createElement('td');
    const cantidadCell = document.createElement('td');
    nombreCell.textContent = producto.nombre;
    cantidadCell.textContent = producto.cantidad;
    row.appendChild(nombreCell);
    row.appendChild(cantidadCell);
    tbody.appendChild(row);
  });
}


document.getElementById('btn-agregar-producto').addEventListener('click', (e) => {
  e.preventDefault();
  const nombre = document.getElementById('nombre-producto').value;
  const cantidad = parseInt(document.getElementById('cantidad-producto').value);
  agregarProducto(nombre, cantidad);
});

actualizarTabla();
