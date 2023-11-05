// Obtener el formulario
const formulario = document.querySelector('.formulario');

// Obtener los elementos del formulario
const inputJugados = document.getElementById('jugados');
const inputGanados = document.getElementById('ganados');
const inputEmpatados = document.getElementById('empatados');
const resultado = document.getElementById('resultado');
const botonReiniciar = document.getElementById('reiniciar');

// Agregar el evento submit al formulario
formulario.addEventListener('submit', function(event) {
  // Evitar que se recargue la página
  event.preventDefault();

  // Obtener los valores de los inputs
  const jugados = parseInt(inputJugados.value);
  const ganados = parseInt(inputGanados.value);
  const empatados = parseInt(inputEmpatados.value);

  // Realizar el cálculo
  const puntaje = ((ganados * 3) + empatados) * 100 / (jugados * 3);

  // Mostrar el resultado
  resultado.value = puntaje.toFixed(2) + '%';
});

// Agregar el evento click al botón de reinicio
botonReiniciar.addEventListener('click', function() {
  // Limpiar los valores de los inputs y el resultado
  inputJugados.value = '';
  inputGanados.value = '';
  inputEmpatados.value = '';
  resultado.value = '';
  
});