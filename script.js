// Generar un número aleatorio entre 1 y 100
let randomNum = Math.floor(Math.random() * 100) + 1;

// Obtener los elementos del DOM
let numIntro = document.getElementById('numIntro');
let msg = document.getElementById('msg');

// Función para comprobar el resultado
function checkRes() {
  // Obtener el número introducido por el usuario
  let numIntroDone = parseInt(numIntro.value);

  // Comprobar si el número introducido es válido
  if (numIntroDone < 1 || numIntroDone > 100 || isNaN(numIntroDone)) {
    msg.textContent = 'Por favor, introduce un número válido entre 1 y 100:';
    return;
    }

  // Comprobar si el número introducido es igual al número aleatorio
  if (numIntroDone === randomNum) {
    msg.textContent = '¡Felicidades, número acertado!';
    msg.style.color = 'green';
    numIntro.disabled = true;
  } else if (numIntroDone < randomNum) {
    msg.textContent = 'El número es mayor, estás por debajo.';
    msg.style.color = 'red';
  } else {
    msg.textContent = 'El número es menor, estás por arriba.';
    msg.style.color = 'blue';
    }

}