const guardarContacto = (database, contacto) =>{
    database.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href= '/'
}

const cargarContactos = (database, parentNode) =>{
    let claves = Object.keys(database)
    console.log(claves)
    for(clave of claves){
        let contacto = JSON.parse(database.getItem(clave))
        crearContacto(parentNode, contacto, database)
    }
}

const crearContacto = (parentNode, contacto, database) =>{
let divContacto = document.createElement('div')
let nombreContacto = document.createElement('h3')
let numeroContacto = document.createElement('p')
let direccionContacto = document.createElement('p')
let iconoBorrar = document.createElement('span')

nombreContacto.innerHTML = contacto.nombre
numeroContacto.innerHTML = contacto.numero
direccionContacto.innerHTML = contacto.direccion
iconoBorrar.innerHTML = 'delete_forever'

divContacto.classList.add('tarea')
iconoBorrar.classList.add('material-icons', 'icono')

iconoBorrar.onclick = () =>{
    database.removeItem(contacto.id)
    window.location.href = '/'
}
 
divContacto.appendChild(nombreContacto)
divContacto.appendChild(numeroContacto)
divContacto.appendChild(direccionContacto)
divContacto.appendChild(iconoBorrar)

parentNode.appendChild(divContacto)

}