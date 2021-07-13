const insertar = document.getElementById('insertar')
const buscar = document.getElementById('buscar')
const actualizar = document.getElementById('actualizar')
const eliminar = document.getElementById('eliminar')
const listaNombres = document.querySelector('.render')

let nombres = [];

insertar.addEventListener('click', ()=>{
    agregarNombre();
    renderizado();
})

buscar.addEventListener('click', ()=>{
    const texto = document.getElementById('entrada').value;
    buscarNombre(texto);
})

actualizar.addEventListener('click', ()=>{
    const texto = document.getElementById('entrada');
    cambiarNombre(texto.value);
    renderizado();
})

eliminar.addEventListener('click',()=>{
    const nombre = document.getElementById('entrada').value;
    eliminarNombre(nombre);
    renderizado();
})

function agregarNombre() {
    const texto = document.getElementById('entrada')
    if (texto.value != '') {
        nombres.push(texto.value)
        texto.value = '';
    }else {
        console.log('Debes ingresar un nombre')
    }  
}

function buscarNombre(nombre) {
    for (let i = 0; i < nombres.length; i++) {
        const elemento = nombres[i];
        if (elemento === nombre) {
            console.log(`si contiene el nombre: ${nombre} en la posición ${nombres.indexOf(nombre)} `)
        }
    }
};
//Esta funcion recibe un numero de contador para controlar el for, de esta manera no repetir la imopresion en el dom
function renderizado() {
    listaNombres.innerHTML=''
    nombres.forEach( ( item ) => {
        const html = `<li>${item}</li>`;
        listaNombres.innerHTML += html;
    })
}

function cambiarNombre(nombre) {
    for (let i = 0; i < nombres.length; i++) {
        const elemento = nombres[i];
        if (elemento === nombre) {
            const nuevoNombre = document.getElementById('entrada1')
            const entrada = document.getElementById('entrada')
            nombres[nombres.indexOf(nombre)] = nuevoNombre.value
            nuevoNombre.value = ''
            entrada.value = ''
            console.log(nombres)
        }  
    }
}

function eliminarNombre(nombre){
    if(nombres.includes(nombre)){
        const array = [];
        nombres.forEach(item=>{
            if(item != nombre){
                array.push(item);
            }
        })
        nombres = array;
    }
}