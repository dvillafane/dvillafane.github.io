// Cargar datos almacenados en localStorage si existen
let users = JSON.parse(localStorage.getItem('users')) || [];

let cuerpotabla = document.getElementById('tabla-body');

const listar = () => {
  let usuarios = '';
  for (let i = 0; i < users.length; i++) {
    usuarios += `<tr><td>${users[i].Nombre}</td><td>${users[i].Apellido}</td><td>${users[i].email}</td><td>${users[i].Sexo}</td><td>${users[i].actividadFisica}</td><td>${users[i].Altura}</td><td>${users[i].Peso}</td><tr/>`;
  }
  cuerpotabla.innerHTML = usuarios;

  const thead = document.getElementById('thead');
  thead.style.display = users.length > 0 ? 'table-header-group' : 'none';
};

const registrar = () => {
  const Nombre = document.getElementById('Nombre').value.trim();
  const Apellido = document.getElementById('Apellido').value.trim();
  const email = document.getElementById('email').value.trim();
  const Sexo = document.getElementById('sexo').value;
  const actividadFisica = document.getElementById('actividadFisica').value;
  const Altura = document.getElementById('altura').value.trim();
  const Peso = document.getElementById('peso').value.trim();

  // Validar que todos los campos estén llenos
  if (Nombre === '' || Apellido === '' || email === '' || Sexo === '' || actividadFisica === '' || Altura === '' || Peso === '') {
    alert('Por favor, complete todos los campos antes de registrar el usuario.');
    return;
  }

  // Agregar el nuevo usuario al arreglo
  users.push({ Nombre, Apellido, email, Sexo, actividadFisica, Altura, Peso });

  // Guardar los datos en localStorage
  localStorage.setItem('users', JSON.stringify(users));

  // Llamar a listar() para actualizar la tabla
  listar();
};

// Eliminar datos al cargar la página
window.onload = () => {
  localStorage.removeItem('users');
};
