// 1.Pintar usuarios
// En este ejercicio utilizaremos la API de https://jsonplaceholder.typicode.com/users. 
// Leyendo su documentación, deberás hacer lo siguiente:
// Imprimir por consola la lista de usuarios.
// Imprimir por consola solo el nombre de los usuarios.
// Crea una variable global users y cuando hagas la petición axios rellénala con la respuesta de la api (todo esto fuera de una función)
// Crea una función que muestre por consola la variable global que habías creado
// Crea un botón que cuando lo cliques ejecute la función que habías creado
// Ahora en vez de mostrar los usuarios por consola muestra el nombre de cada uno en el DOM ( en el HTML)
// Recuerda que para estos ejercicios deberás utilizar Axios.

// ---------------------------------------------------------------------------------------

//1. Variable global users
let users = [];

//2. Petición con Axios y guardado en la variable global
axios.get("https://jsonplaceholder.typicode.com/users").then(response => {

    //Mostrar los datos de los usuarios completos por consola
    users = response.data;
    console.log("1 -Todos los usuarios con todos los datos son:", users);

    //mostrar solo los nombres
    console.log("2- Nombres de los uuarios:");
    
    users.forEach(user => {
        console.log(user.name);
        
    });
})
.catch(error => {
    console.error("Error al obtener los usuarios:", error);
    
});

// 3. Función que muestra usuarios (desde la variable global)
function mostrarUsuarios() {
    console.log("3 - Mostrando desde la variable global:", users);
    
}

// 5. Mostrar los nombres en el DOM (reemplazamos la función anterior):
function mostrarUsuarios() {
    const lista = document.getElementById("listaUsuarios");
    lista.innerHTML = "";

    users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = user.name;
        lista.appendChild(li);

    });
}


// 4. Asignar esa función al botón
document.getElementById("mostrarUsuarios").addEventListener("click", mostrarUsuarios);