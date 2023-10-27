// Agrega a la pantalla el valor del botón que clickeemos

function agregar(valor) {
    const display = document.getElementById('pantalla');
    const valorActual = display.value;
    const ultimoCaracter = valorActual.charAt(valorActual.length - 1);
    
    if (valorActual.length >= 20) {
        return;
    }
    // No permite poner dos operadores seguidos
    if (ultimoCaracter.match(/[+\-*/.]/) && valor.match(/[+\-*/.]/)) {
        return;
    }
    display.value += valor;
}
// Agrega a la pantalla el valor de la tecla que toquemos
document.addEventListener('keydown', function (event) {
    const display = document.getElementById('pantalla');
    const valorActual = display.value;
    const ultimoCaracter = valorActual.charAt(valorActual.length - 1);
    
    if (valorActual.length >= 20) {
        return;
    }
    // No permite poner dos operadores seguidos
    if (ultimoCaracter.match(/[+\-*/.]/) && event.key.match(/[+\-*/.]/)) {
        return;
    }

    if (event.key >= '0' && event.key <= '9') {
        display.value += event.key;
    }
    if (event.key == '/' || event.key == '*' || event.key == '-' || event.key == '+' || event.key == '.') {
        display.value += event.key;
    }
    
})

// Vacía la pantalla
function borrar() {
    document.getElementById('pantalla').value = '';
}

// Calcula el resultado final
function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado;
}
// Calcula el resultado final presionando la tecla "Enter"
document.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        calcular();
    }
    if (event.key == 'Backspace') {
        borrar();
    }
})

