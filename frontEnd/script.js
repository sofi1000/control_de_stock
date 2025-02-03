let productos = [];

// Función para agregar un producto
function agregarProducto(nombre, cantidad) {
  const producto = {
    nombre,
    cantidad
  };
  productos.push(producto);
  actualizarTabla();
}

// Función para actualizar la tabla de productos
function actualizarTabla() {
  const tbody = document.getElementById("tbody-productos");
  tbody.innerHTML = "";
  productos.forEach((producto) => {
    const row = document.createElement("tr");
    const nombreCell = document.createElement("td");
    const cantidadCell = document.createElement("td");
    nombreCell.textContent = producto.nombre;
    cantidadCell.textContent = producto.cantidad;
    row.appendChild(nombreCell);
    row.appendChild(cantidadCell);
    tbody.appendChild(row);
  });
}

// Evento para agregar un producto
document.getElementById("btn-agregar-producto").addEventListener("click", () => {
  const nombre = document.getElementById("nombre-producto").value;
  const cantidad = parseInt(document.getElementById("cantidad-producto").value);
  agregarProducto(nombre, cantidad);
});