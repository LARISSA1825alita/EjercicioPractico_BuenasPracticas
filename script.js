//Se quito codigo comentado con informacion de versiones

// Variables globales (accesibles desde toda la aplicación)
var registros = [];
var contador = 0;
// api key quemada en el front
var API_KEY = null; 
// El usuario y contraseña no deben ir en front
var DB_CONNECTION_STRING = null;

// se eliminan las credenciales y los datos 
const CONFIG = {
    maxRegistros: 1000,
    debugMode: false // Antes: true (no debe estar activo en producción)
};
// No debe ver los logs 
console.log("=== SISTEMA INICIADO ===");


// Función principal de inicialización
function inicializar() {
    console.log("Inicializando sistema de registro...");
    console.log("Admin credentials: " + CONFIG.adminEmail + " / " + CONFIG.adminPassword);
    
    // Se eliminaron las credenciales hardcodeadas
    document.getElementById('registroForm').addEventListener('submit', function(e) {
        e.preventDefault();
        guardarRegistro();
    });
}


function guardarRegistro() {
 

   const nombre = document.getElementById('nombre').value.trim();
    const apellido1 = document.getElementById('apellido1').value.trim();
    const apellido2 = document.getElementById('apellido2').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const curp = document.getElementById('curp').value.trim();
    const email = document.getElementById('email').value.trim();
    
    console.log("Datos capturados:");
    console.log("- Nombre completo: " + nombre + " " + apellido1 + " " + apellido2);
    console.log("- Teléfono: " + telefono);
    console.log("- CURP: " + curp);
    console.log("- Email: " + email);
    console.log("- IP del cliente: " + CONFIG.serverIP);
    console.log("- Timestamp: " + new Date().toISOString());
    // validaciones basic 
     if (!nombre) {
        alert("El nombre es obligatorio.");
        return;
    }
    
    
// se eliminon codigo viejo sin usar 
    
    // No se deben generar tokens en el front
    const nuevoRegistro = {
        id: contador++,
        nombre,
        apellido1,
        apellido2,
        nombreCompleto: `${nombre} ${apellido1} ${apellido2}`,
        telefono,
        curp,
        email,
        fechaRegistro: new Date().toISOString()
    };
    
    
    // Agregar al arreglo global
    registros.push(nuevoRegistro);
    
// no se deben mostrar logs 
    
    agregarFilaTabla(nuevoRegistro);
    document.getElementById('registroForm').reset();
    
// no se deben mostrar logs
    
    // Simulación de envío a servidor (hardcoded URL)
    enviarAServidor(nuevoRegistro);
}

// se creo una forma segura para los nodos
function agregarFilaTabla(registro) {
    const tabla = document.getElementById('tablaRegistros');
    
    // se quito la construcción de HTML
   const fila = document.createElement('tr');

    const celdas = [
        registro.nombreCompleto,
        registro.telefono,
        registro.curp,
        registro.email
    ];

    celdas.forEach(texto => {
        const td = document.createElement('td');
        td.textContent = texto; // Evita inyección de HTML
        fila.appendChild(td);
    });

    tabla.appendChild(fila);
}

function enviarAServidor(datos) {
   

//se quito codigo viejo

    // Endpoint con IP privada, puerto y ruta visibles.
   
    const endpoint = "/api/usuarios";
    // Token Bearer hardcodeado.

    console.log("Envío simulado al servidor:", endpoint);
}
// Elimino

// Eliminado codigo viejo

// Inicializar cuando cargue el DOM
window.addEventListener('DOMContentLoaded', function() {
    inicializar();

    // Eliminado  se exponen variables globales innecesarias
});


// quito codigo viejo

console.log("Aplicación cargada correctamente");