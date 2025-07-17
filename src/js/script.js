let total = 0;
const carrito = {};

const botones = document.querySelectorAll('.agregar-carrito');

botones.forEach(boton => {
  boton.addEventListener('click', (e) => {
    e.preventDefault();

    const precio = parseInt(boton.getAttribute('data-precio'));
    const nombre = boton.parentElement.querySelector('.card-title').textContent;

    if (carrito[nombre]) {
      carrito[nombre].cantidad += 1;
    } else {
      carrito[nombre] = {
        precio: precio,
        cantidad: 1
      };
    }

    total += precio;

    document.getElementById('totalCarrito').textContent = total;
    actualizarListaCarrito();
  });
});

function actualizarListaCarrito() {
  const lista = document.getElementById('listaCarrito');
  lista.innerHTML = '';

  for (let nombre in carrito) {
    const item = carrito[nombre];
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = `${nombre} - Cantidad: ${item.cantidad} - Subtotal: $${item.precio * item.cantidad}`;
    lista.appendChild(li);
  }
}
