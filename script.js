// Agrega a la pantalla el valor del botón que clickeemos
function agregar(valor) {
    document.getElementById('pantalla').value += valor;
}
// Agrega a la pantalla el valor de la tecla que toquemos
document.addEventListener('keydown', function (event) {
    if (event.key >= '0' && event.key <= '9') {
        document.getElementById('pantalla').value += event.key;
    }
    if (event.key == '/' || event.key == '*' || event.key == '-' || event.key == '+' || event.key == '.') {
        document.getElementById('pantalla').value += event.key;
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

