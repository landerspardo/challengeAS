let listaAmigos = []; // Lista para almacenar los nombres

// Función para mostrar una alerta
function mostrarAlerta(mensaje) {
    alert(mensaje);
}

// Función para validar si un nombre ya está en la lista
function esNombreDuplicado(nombre) {
    return listaAmigos.includes(nombre);
}

// Función para agregar amigos a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    let lista = document.getElementById("listaAmigos");

    // Validar si el nombre es vacío o tiene solo espacios
    if (nombre === "") {
        mostrarAlerta("Por favor, ingresa un nombre válido.");
        return;
    }

    // Validar si el nombre ya está en la lista
    if (esNombreDuplicado(nombre)) {
        mostrarAlerta("Este nombre ya fue agregado.");
        return;
    }

    // Agregar el nombre a la lista de amigos
    listaAmigos.push(nombre);

    // Crear el nuevo elemento de lista
    let li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);

    // Limpiar el campo de entrada
    input.value = "";
    input.focus(); // Volver a enfocar el campo de entrada
}

// Función para realizar el sorteo aleatorio
function sortearAmigo() {
    // Validar si hay al menos 2 amigos en la lista
    if (listaAmigos.length < 2) {
        mostrarAlerta("Debes ingresar al menos 2 nombres antes de iniciar el sorteo.");
        return;
    }

    // Sorteo aleatorio
    let indiceDeAmigoGanador = Math.floor(Math.random() * listaAmigos.length);
    let ganador = listaAmigos[indiceDeAmigoGanador];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es: ${ganador}`;
}

// Función para limpiar la lista de amigos
function limpiarLista() {
    listaAmigos = [];
    let lista = document.getElementById("listaAmigos");

    // Limpiar el contenido visual de la lista
    lista.innerHTML = "";
    mostrarAlerta("La lista de amigos ha sido limpiada.");
}

// Función para mostrar todos los amigos en la consola
function mostrarListaAmigos() {
    console.log("Lista de Amigos:");
    for (let i = 0; i < listaAmigos.length; i++) {
        console.log(`${i + 1}. ${listaAmigos[i]}`);
    }
}

